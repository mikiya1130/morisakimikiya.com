import { Text } from '@chakra-ui/react';
import { MdMail } from 'react-icons/md';
import ContentBox from '@/components/customize/ContentBox';

const Contact = () => {
  return (
    <ContentBox icon={MdMail} title='CONTACT'>
      <Text>contact</Text>
    </ContentBox>
  );
};

export default Contact;
