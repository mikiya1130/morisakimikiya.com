import { Box, BoxProps, Center, Heading, Icon } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type CustomProps = {
  icon?: IconType;
  title?: string;
  children: ReactNode;
};

type Props = BoxProps & CustomProps;

const ContentBox = ({ icon, title, children, ...boxProps }: Props) => {
  return (
    <Box w='full' p={4} borderRadius={20} bg='white' color='black' {...boxProps}>
      {title != undefined && (
        <Heading mb={4}>
          <Center>
            {icon != undefined && <Icon as={icon} mr={2} />}
            {title}
          </Center>
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default ContentBox;
