import { Fragment, ReactElement } from 'react';
import Text from '@/components/ui/Text';
import { Box, Grid } from '@/styled-system/jsx';

type Props = {
  data: Object;
};

const PersonalHistory = ({ data }: Props) => {
  return (
    <Grid gridTemplateColumns='6em minmax(auto, 25em)' gap={0}>
      {Object.entries(data).map(([key, value]: [string, ReactElement]) => (
        <Fragment key={key}>
          <Text my={4} textAlign='right' _after={{ content: '"："' }}>
            {key}
          </Text>
          <Box my={4}>{value}</Box>
        </Fragment>
      ))}
    </Grid>
  );
};

export default PersonalHistory;
