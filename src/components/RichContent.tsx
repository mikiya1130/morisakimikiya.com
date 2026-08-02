import { Fragment } from 'react';
import ListItem from '@/components/ui/ListItem';
import Text from '@/components/ui/Text';
import TextLink from '@/components/ui/TextLink';
import UnorderedList from '@/components/ui/UnorderedList';
import { Line, parseContent } from '@/lib/content';

const renderLine = (line: Line) =>
  line.map((node, index) => {
    switch (node.type) {
      case 'text':
        return <Fragment key={index}>{node.value}</Fragment>;
      case 'link':
        return (
          <TextLink key={index} href={node.href} target='_blank' rel='noopener' color='red'>
            {node.label}
          </TextLink>
        );
      case 'wbr':
        return <wbr key={index} />;
      case 'sup':
        return <sup key={index}>{node.value}</sup>;
    }
  });

const renderLines = (lines: Line[]) =>
  lines.map((line, index) => (
    <Fragment key={index}>
      {index !== 0 && <br />}
      {renderLine(line)}
    </Fragment>
  ));

type RichLinesProps = {
  src: string;
};

/**
 * 限定記法の単一段落をインライン要素として描画する（Text 等のラッパーは呼び出し側が持つ）
 */
export const RichLines = ({ src }: RichLinesProps) => {
  const blocks = parseContent(src);
  const block = blocks[0];
  if (blocks.length !== 1 || block.type !== 'paragraph') {
    throw new Error(`単一段落のみ指定できます: "${src}"`);
  }
  return <>{renderLines(block.lines)}</>;
};

type Props = {
  src: string;
  listWordBreak?: 'keep-all';
};

/**
 * 限定記法の content 文字列をブロック要素（段落・リスト）として描画する
 */
const RichContent = ({ src, listWordBreak }: Props) => {
  const blocks = parseContent(src);
  return (
    <>
      {blocks.map((block, index) =>
        block.type === 'paragraph' ? (
          <Text key={index}>{renderLines(block.lines)}</Text>
        ) : (
          <UnorderedList key={index} wordBreak={listWordBreak}>
            {block.items.map((item, itemIndex) => (
              <ListItem key={itemIndex}>{renderLines(item)}</ListItem>
            ))}
          </UnorderedList>
        ),
      )}
    </>
  );
};

export default RichContent;
