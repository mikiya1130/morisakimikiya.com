import { MdCode } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import SkillGroup from '@/components/SkillGroup';
import { language, qualification, tool } from '@/data/skill';

const Skill = () => {
  return (
    <ContentBox icon={MdCode} title='SKILL'>
      <SkillGroup name='言語・ライブラリ・フレームワーク' skillList={language} />
      <SkillGroup name='開発ツールなど' skillList={tool} />
      <SkillGroup name='資格・表彰' skillList={qualification} />
    </ContentBox>
  );
};

export default Skill;
