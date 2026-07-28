import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const aspectRatioRecipe = cva({
  base: {
    position: 'relative',
    _before: {
      content: '""',
      height: 0,
      display: 'block',
      paddingBottom: '56.25%',
    },
    '& > *:not(style)': {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  },
});

const AspectRatio = styled('div', aspectRatioRecipe);

export default AspectRatio;
