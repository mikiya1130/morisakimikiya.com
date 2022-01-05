import { Container, VStack } from '@chakra-ui/react';
import ContentBox from '@/components/ContentBox';

const Index = () => {
  return (
    <Container maxW='container.lg' p={4} bg='teal'>
      <VStack p={4} spacing={4} borderRadius={20} bg='black'>
        <ContentBox>
          111
          <br />
          111
          <br />
          111
          <br />
        </ContentBox>
        <ContentBox>
          222
          <br />
          222
          <br />
          222
          <br />
        </ContentBox>
        <ContentBox>
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
