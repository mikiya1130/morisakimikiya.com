import { Heading, SimpleGrid } from '@chakra-ui/react';
import SkillGrid from '@/components/SkillGrid';
import { SkillType } from '@/data/skill';

type Props = {
  name: string;
  skillList: SkillType[];
  cols: number;
};

const SkillGroup = ({ name, skillList, cols }: Props) => {
  return (
    <>
      <Heading as='h3' my={4} size='lg'>
        {name}
      </Heading>
      <SimpleGrid minChildWidth={{ base: '250px', sm: `${750 / cols}px` }} spacing={4}>
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
