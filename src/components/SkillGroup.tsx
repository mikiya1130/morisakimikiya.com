import SkillGrid from '@/components/SkillGrid';
import Heading from '@/components/ui/Heading';
import SimpleGrid from '@/components/ui/SimpleGrid';
import { SkillType } from '@/data/skill';

type Props = {
  name: string;
  skillList: SkillType[];
  cols: 2 | 3;
};

const SkillGroup = ({ name, skillList, cols }: Props) => {
  return (
    <>
      <Heading as='h3' my={4} size='lg'>
        {name}
      </Heading>
      <SimpleGrid cols={cols}>
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
