import RichContent from '@/components/RichContent';
import SkillGrid from '@/components/SkillGrid';
import Heading from '@/components/ui/Heading';
import SimpleGrid from '@/components/ui/SimpleGrid';
import { SkillItem } from '@/lib/data-schema';

type Props = {
  name: string;
  skillList: SkillItem[];
  cols: 2 | 3;
};

const SkillGroup = ({ name, skillList, cols }: Props) => {
  return (
    <>
      <Heading as='h3' my={4} size='lg'>
        {name}
      </Heading>
      <SimpleGrid cols={cols}>
        {skillList.map((skill: SkillItem, index: number) => (
          <SkillGrid key={index} title={skill.title} logo={skill.logo} star={skill.star}>
            <RichContent src={skill.content} listWordBreak={skill.wordBreak} />
          </SkillGrid>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SkillGroup;
