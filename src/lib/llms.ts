import { writeFileSync } from 'fs';
import path from 'path';
import { Line, parseContent } from '@/lib/content';
import { LinkData, ProfileData, SiteData, SkillData } from '@/lib/data-schema';

const renderInline = (line: Line): string =>
  line
    .map((node) => {
      switch (node.type) {
        case 'text':
          return node.value;
        case 'link':
          return `[${node.label}](${node.href})`;
        case 'wbr':
          return '';
        case 'sup':
          return node.value;
      }
    })
    .join('');

/** content 文字列を markdown 行の配列にする（indent は各行の先頭に付ける） */
const renderContent = (src: string, indent: string): string[] => {
  const lines: string[] = [];
  for (const block of parseContent(src)) {
    if (block.type === 'paragraph') {
      for (const line of block.lines) {
        lines.push(indent + renderInline(line));
      }
    } else {
      for (const item of block.items) {
        item.forEach((line, index) => {
          lines.push(indent + (index === 0 ? '- ' : '  ') + renderInline(line));
        });
      }
    }
  }
  return lines;
};

type LlmsTxtInput = {
  site: SiteData;
  profile: ProfileData;
  skill: SkillData;
  link: LinkData;
};

/**
 * data 全体から llms.txt（markdown）本文を生成する純関数
 */
export const buildLlmsTxt = ({ site, profile, skill, link }: LlmsTxtInput): string => {
  const lines: string[] = [];
  const pushSection = (section: string, note?: string) => {
    lines.push('');
    lines.push(`## ${section}`);
    lines.push('');
    if (note !== undefined) {
      lines.push(note);
    }
  };

  lines.push(`# ${site.title}`);
  lines.push('');
  lines.push(`> ${site.description}`);

  pushSection(profile.section, profile.note);
  const profileEntries = { ...profile.personalHistory, ...profile.exPersonalHistory };
  for (const [key, value] of Object.entries(profileEntries)) {
    if (typeof value !== 'string') {
      lines.push(`- ${key}:`);
      for (const row of value) {
        lines.push(`  - ${row.period}: ${renderContent(row.value, '').join('')}`);
      }
    } else {
      const contentLines = renderContent(value, '');
      if (contentLines.length === 1) {
        lines.push(`- ${key}: ${contentLines[0]}`);
      } else {
        lines.push(`- ${key}:`);
        for (const contentLine of contentLines) {
          lines.push(`  ${contentLine}`);
        }
      }
    }
  }

  pushSection(skill.section, skill.note);
  for (const group of skill.groups) {
    lines.push('');
    lines.push(`### ${group.name}`);
    lines.push('');
    for (const item of group.items) {
      const title = Array.isArray(item.title) ? item.title.join(' / ') : item.title;
      lines.push(`- ${title} (${item.star}/5)`);
      lines.push(...renderContent(item.content, '  '));
    }
  }

  pushSection(link.section, link.note);
  for (const item of link.items) {
    lines.push(`- [${item.title}](${item.link})`);
    lines.push(...renderContent(item.content, '  '));
  }

  return `${lines.join('\n')}\n`;
};

/**
 * llms.txt を生成して public/ 配下へ書き出す（ビルド時専用）
 */
export const writeLlmsTxt = (input: LlmsTxtInput): void => {
  const utf8Bom = '\uFEFF';
  writeFileSync(path.join(process.cwd(), 'public', 'llms.txt'), utf8Bom + buildLlmsTxt(input));
};
