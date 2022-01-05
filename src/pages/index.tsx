import { Container, VStack } from '@chakra-ui/react';
import { Md10K, MdSettings } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';

const Index = () => {
  return (
    <Container maxW='container.lg' p={4} bg='teal'>
      <VStack p={4} spacing={4} borderRadius={20} bg='black'>
        <ContentBox icon={MdSettings} title='title1'>
          111
          <br />
          111
          <br />
          111
          <br />
        </ContentBox>
        <ContentBox icon={Md10K} title='タイトル2'>
          222
          <br />
          222
          <br />
          222
          <br />
        </ContentBox>
        <ContentBox title='title3'>
          333
          <br />
          333
          <br />
          333
          <br />
        </ContentBox>
      </VStack>
    </Container>
  );
};

export default Index;
