import { Text } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import ContentBox from '@/components/customize/ContentBox';

const Profile = () => {
  return (
    <ContentBox icon={MdPerson} title='PROFILE'>
      <Text>profile</Text>
    </ContentBox>
  );
};

export default Profile;
