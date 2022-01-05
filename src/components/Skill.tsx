import { Text } from '@chakra-ui/react';
import { MdCode } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';

const Skill = () => {
  return (
    <ContentBox icon={MdCode} title='SKILL'>
      <Text>{'skill'}</Text>
    </ContentBox>
  );
};

export default Skill;
