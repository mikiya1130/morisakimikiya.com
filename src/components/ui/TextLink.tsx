import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const textLinkRecipe = cva({
  base: {
    transitionProperty: 'var(--transition-property-common)',
    transitionDuration: 'fast',
    transitionTimingFunction: 'out',
    outline: 'none',
    _hover: { textDecoration: 'underline' },
    _focusVisible: { boxShadow: 'outline' },
  },
});

const TextLink = styled('a', textLinkRecipe);

export default TextLink;
