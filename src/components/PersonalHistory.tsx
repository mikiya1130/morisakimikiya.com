import { Fragment } from 'react';
import { RichLines } from '@/components/RichContent';
import Text from '@/components/ui/Text';
import { ProfileValue } from '@/lib/data-schema';
import { Box, Flex, Grid } from '@/styled-system/jsx';

type Props = {
  data: Record<string, ProfileValue>;
};

const PersonalHistory = ({ data }: Props) => {
  return (
    <Grid gridTemplateColumns='6em minmax(auto, 25em)' gap={0}>
      {Object.entries(data).map(([key, value]) => (
        <Fragment key={key}>
          <Text my={4} textAlign='right' _after={{ content: '"："' }}>
            {key}
          </Text>
          <Box my={4}>
            {typeof value === 'string' ? (
              <Text>
                <RichLines src={value} />
              </Text>
            ) : (
              <Flex direction='column'>
                {value.map((row, index) => (
                  <Fragment key={index}>
                    <Text>{row.period}</Text>
                    <Text pl='2em' textAlign='right' wordBreak='keep-all'>
                      <RichLines src={row.value} />
                    </Text>
                  </Fragment>
                ))}
              </Flex>
            )}
          </Box>
        </Fragment>
      ))}
    </Grid>
  );
};

export default PersonalHistory;
