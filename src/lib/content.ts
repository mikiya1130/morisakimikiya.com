/**
 * data の content 文字列が従う限定記法のパーサ。
 *
 * 対応記法:
 * - 行: 改行 = 表示上の `<br />`
 * - リスト: `- ` 始まりの行。直後の 2 スペースインデント行は同一項目内の改行
 * - リンク: `[label](https://...)`
 * - 折り返しヒント: `<wbr/>`
 * - 上付き文字: `<sup>...</sup>`
 *
 * 上記以外の `<` `[` を含む記法はエラーとして throw する（ビルド時に検知する前提）。
 */

/** インライン要素ノード */
export type InlineNode =
  | { type: 'text'; value: string }
  | { type: 'link'; label: string; href: string }
  | { type: 'wbr' }
  | { type: 'sup'; value: string };

/** 1 行分のインライン要素列 */
export type Line = InlineNode[];

/** ブロック要素（段落 or リスト） */
export type Block = { type: 'paragraph'; lines: Line[] } | { type: 'list'; items: Line[][] };

const LINK_PATTERN = /^\[([^\]]*)\]\(([^)]+)\)/;
const WBR_PATTERN = /^<wbr\s*\/>/;
const SUP_PATTERN = /^<sup>([^<]+)<\/sup>/;

const textNode = (value: string): InlineNode => {
  if (value.includes('<') || value.includes('[')) {
    throw new Error(`未対応の記法を含みます: "${value}"`);
  }
  return { type: 'text', value };
};

/**
 * 1 行分の文字列をインライン要素列にパースする
 */
export const parseInlines = (line: string): Line => {
  const nodes: InlineNode[] = [];
  let buffer = '';
  const flushBuffer = () => {
    if (buffer !== '') {
      nodes.push(textNode(buffer));
      buffer = '';
    }
  };
  let i = 0;
  while (i < line.length) {
    const rest = line.slice(i);
    const linkMatch = rest.match(LINK_PATTERN);
    if (linkMatch) {
      flushBuffer();
      const href = linkMatch[2];
      if (!/^https?:\/\//.test(href)) {
        throw new Error(`リンク URL が不正です: "${href}"`);
      }
      nodes.push({ type: 'link', label: linkMatch[1], href });
      i += linkMatch[0].length;
      continue;
    }
    const wbrMatch = rest.match(WBR_PATTERN);
    if (wbrMatch) {
      flushBuffer();
      nodes.push({ type: 'wbr' });
      i += wbrMatch[0].length;
      continue;
    }
    const supMatch = rest.match(SUP_PATTERN);
    if (supMatch) {
      flushBuffer();
      nodes.push({ type: 'sup', value: supMatch[1] });
      i += supMatch[0].length;
      continue;
    }
    buffer += line[i];
    i += 1;
  }
  flushBuffer();
  return nodes;
};

/**
 * content 文字列全体をブロック列にパースする
 */
export const parseContent = (src: string): Block[] => {
  const lines = src.split('\n');
  const blocks: Block[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line === '') {
      i += 1;
      continue;
    }
    if (line.startsWith('- ')) {
      const items: Line[][] = [];
      while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('  '))) {
        if (lines[i].startsWith('- ')) {
          items.push([parseInlines(lines[i].slice(2))]);
        } else {
          const lastItem = items[items.length - 1];
          lastItem.push(parseInlines(lines[i].slice(2)));
        }
        i += 1;
      }
      blocks.push({ type: 'list', items });
    } else {
      const paragraphLines: Line[] = [];
      while (i < lines.length && lines[i] !== '' && !lines[i].startsWith('- ')) {
        paragraphLines.push(parseInlines(lines[i]));
        i += 1;
      }
      blocks.push({ type: 'paragraph', lines: paragraphLines });
    }
  }
  return blocks;
};
