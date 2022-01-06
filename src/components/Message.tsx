import { Text } from '@chakra-ui/react';
import ContentBox from '@/components/customize/ContentBox';

const Message = () => {
  return (
    <ContentBox>
      <Text align='center'>
        こんにちは
        <br />
        ご訪問ありがとうございます
        <br />
        ごゆっくりとお楽しみください
      </Text>
    </ContentBox>
  );
};

export default Message;
