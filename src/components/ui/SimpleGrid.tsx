import { ComponentProps } from 'react';
import { Grid } from '@/styled-system/jsx';

type Props = Omit<ComponentProps<typeof Grid>, 'columns' | 'minChildWidth'> & {
  cols?: 2 | 3;
};

const SimpleGrid = ({ cols = 3, ...props }: Props) => (
  <Grid gap={4} minChildWidth={cols === 3 ? '250px' : { base: '250px', sm: '375px' }} {...props} />
);

export default SimpleGrid;
