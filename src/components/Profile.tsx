import { MdPerson } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import PersonalHistory from '@/components/PersonalHistory';
import Image from '@/components/ui/Image';
import { ProfileData } from '@/lib/data-schema';
import { Flex } from '@/styled-system/jsx';

type Props = {
  data: ProfileData;
};

const Profile = ({ data }: Props) => {
  return (
    <ContentBox icon={MdPerson} title='PROFILE'>
      <Flex direction={{ base: 'column', md: 'row-reverse' }} align='center' justify='space-evenly'>
        <Image boxSize='200px' borderRadius='20px' src='images/profile.jpg' alt='profile' />
        <PersonalHistory data={data.personalHistory} />
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} align='center' justify='space-evenly'>
        <Image w='200px' h='300px' src='images/instruments.png' alt='profile' />
        <PersonalHistory data={data.exPersonalHistory} />
      </Flex>
    </ContentBox>
  );
};

export default Profile;
