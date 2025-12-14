import { Flex, Image } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import PersonalHistory from '@/components/PersonalHistory';
import { exPersonalHistory, personalHistory } from '@/data/profile';

const Profile = () => {

  return (
    <ContentBox icon={MdPerson} title='PROFILE'>
      <Flex direction={['column', null, 'row-reverse']} align='center' justify='space-evenly'>
        <Image boxSize='200px' borderRadius='20px' src='images/profile.jpg' alt='profile' />
        <PersonalHistory data={personalHistory} />
      </Flex>
      <Flex direction={['column', null, 'row']} align='center' justify='space-evenly'>
        <Image w='200px' h='300px' src='images/instruments.png' alt='profile' />
        <PersonalHistory data={exPersonalHistory} />
      </Flex>
    </ContentBox>
  );
};

export default Profile;
