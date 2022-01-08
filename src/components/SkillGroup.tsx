import { Heading, SimpleGrid } from '@chakra-ui/react';
import SkillGrid from '@/components/SkillGrid';
import { SkillType } from '@/data/skill';

type Props = {
  name: string;
  skillList: SkillType[];
};

const SkillGroup = ({ name, skillList }: Props) => {
  return (
    <>
      <Heading as='h3' my={4} size='lg'>
        {name}
      </Heading>
      <SimpleGrid minChildWidth='250px' spacing={4}>
        {skillList.map((skill: SkillType, index: number) => (
          <SkillGrid key={index} title={skill.title} logo={skill.logo} star={skill.star}>
            {skill.content}
          </SkillGrid>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SkillGroup;
