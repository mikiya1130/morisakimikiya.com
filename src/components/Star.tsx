import { Box } from '@chakra-ui/react';

type Props = {
  value: number;
  size: number;
};

const Star = ({ value, size }: Props) => {
  const width = (value * 100) / 5;

  return (
    <Box
      display='inline-block'
      position='relative'
      w='5em'
      h='1em'
      fontSize={size}
      _before={{ content: "'★★★★★'", position: 'absolute', color: '#BBBBBB' }}
      _after={{
        content: "'★★★★★'",
        position: 'absolute',
        color: '#F4B14C',
        wordWrap: 'normal',
        overflow: 'hidden',
        width: `${width}%`,
      }}
    ></Box>
  );
};

export default Star;
