import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const headingRecipe = cva({
  base: {
    fontFamily: 'heading',
    fontWeight: 'bold',
  },
  variants: {
    size: {
      md: { fontSize: 'xl', lineHeight: 1.2 },
      lg: {
        fontSize: { base: '2xl', md: '3xl' },
        lineHeight: { base: 1.33, md: 1.2 },
      },
      xl: {
        fontSize: { base: '3xl', md: '4xl' },
        lineHeight: { base: 1.33, md: 1.2 },
      },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

const Heading = styled('h2', headingRecipe);

export default Heading;
