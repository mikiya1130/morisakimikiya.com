import { Box, Grid, Text } from '@chakra-ui/react';
import { Fragment, ReactElement } from 'react';

type Props = {
  data: Object;
};

const PersonalHistory = ({ data }: Props) => {
  return (
    <Grid templateColumns='6em minmax(auto, 25em)'>
      {Object.entries(data).map(([key, value]: [string, ReactElement]) => (
        <Fragment key={key}>
          <Text my={4} align='right' _after={{ content: '"："' }}>
            {key}
          </Text>
          <Box my={4}>{value}</Box>
        </Fragment>
      ))}
    </Grid>
  );
};

export default PersonalHistory;
