import { Image } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import RedRoundButton from '@/components/RedRoundButton';

const Profile = () => {
  return (
    <ContentBox icon={MdPerson} title='PROFILE'>
      <Image boxSize='200px' borderRadius='20px' src='images/profile.jpg' alt='profile' />
      <RedRoundButton>more</RedRoundButton>
      <Image w='200px' h='300px' src='images/instruments.png' alt='profile' />
    </ContentBox>
  );
};

export default Profile;
