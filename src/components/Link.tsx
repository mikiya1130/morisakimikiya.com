import { Text } from '@chakra-ui/react';
import { MdLink } from 'react-icons/md';
import ContentBox from '@/components/customize/ContentBox';

const Link = () => {
  return (
    <ContentBox icon={MdLink} title='LINK'>
      <Text>link</Text>
    </ContentBox>
  );
};

export default Link;
