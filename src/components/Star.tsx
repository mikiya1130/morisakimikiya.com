import { CSSProperties } from 'react';
import { css } from '@/styled-system/css';
import { Box } from '@/styled-system/jsx';

type Props = {
  value: number;
  size: number;
};

const starStyle = css({
  display: 'inline-block',
  position: 'relative',
  w: '5em',
  h: '1em',
  fontSize: 'var(--star-font-size)',
  _before: { content: "'★★★★★'", position: 'absolute', color: '#BBBBBB' },
  _after: {
    content: "'★★★★★'",
    position: 'absolute',
    color: 'yellow',
    overflow: 'hidden',
    width: 'var(--star-width)',
  },
});

const Star = ({ value, size }: Props) => {
  const width = (value * 100) / 5;

  return (
    <Box
      className={starStyle}
      style={{ '--star-font-size': `${size}px`, '--star-width': `${width}%` } as CSSProperties}
    ></Box>
  );
};

export default Star;
