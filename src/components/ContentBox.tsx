import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ContentBox = ({ children }: Props) => {
  return (
    <Box w='full' p={4} borderRadius={20} bg='white' color='black'>
      {children}
    </Box>
  );
};

export default ContentBox;
