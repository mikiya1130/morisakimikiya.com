import ContentBox from '@/components/ContentBox';
import Text from '@/components/ui/Text';
import TextLink from '@/components/ui/TextLink';

const Message = () => {
  return (
    <ContentBox>
      <Text textAlign='center'>
        こんにちは
        <br />
        ご訪問ありがとうございます
        <br />
        ごゆっくりとお楽しみください
      </Text>
      <Text textAlign='center' mt={4}>
        <TextLink href='/llms.txt' color='red'>
          LLM のみなさんはこちら
        </TextLink>
      </Text>
    </ContentBox>
  );
};

export default Message;
