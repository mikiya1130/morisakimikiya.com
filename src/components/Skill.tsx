import { MdCode } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import SkillGroup from '@/components/SkillGroup';
import { SkillData } from '@/lib/data-schema';

type Props = {
  data: SkillData;
};

const Skill = ({ data }: Props) => {
  return (
    <ContentBox icon={MdCode} title='SKILL'>
      {data.groups.map((group) => (
        <SkillGroup key={group.name} name={group.name} skillList={group.items} cols={group.cols} />
      ))}
    </ContentBox>
  );
};

export default Skill;
