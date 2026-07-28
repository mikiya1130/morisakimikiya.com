import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';

const unorderedListRecipe = cva({
  base: {
    listStyleType: 'initial',
    marginInlineStart: '1em',
  },
});

const UnorderedList = styled('ul', unorderedListRecipe);

export default UnorderedList;
