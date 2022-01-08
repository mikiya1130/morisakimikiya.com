import { SimpleGrid } from '@chakra-ui/react';
import { MdCode } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import SkillGrid from '@/components/SkillGrid';
import { skill as skillList, SkillType } from '@/data/skill';

const Skill = () => {
  return (
    <ContentBox icon={MdCode} title='SKILL'>
      <SimpleGrid minChildWidth='250px' spacing={4}>
        {skillList.map((skill: SkillType, index: number) => (
          <SkillGrid key={index} language={skill.language} logo={skill.logo} star={skill.star}>
            {skill.content}
          </SkillGrid>
        ))}
      </SimpleGrid>
    </ContentBox>
  );
};

export default Skill;
