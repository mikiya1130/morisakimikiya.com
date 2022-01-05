import { Box, Center, Heading, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type Props = {
  icon?: IconType;
  title?: string;
  children: ReactNode;
};

const ContentBox = ({ icon, title, children }: Props) => {
  return (
    <Box w='full' p={4} borderRadius={20} bg='white' color='black'>
      {title != undefined && (
        <Heading>
          <Center>
            {icon != undefined && <Icon as={icon} />}
            {title}
          </Center>
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default ContentBox;
