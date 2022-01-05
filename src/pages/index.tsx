import { Box, Container, VStack } from '@chakra-ui/react';

const Index = () => {
  return (
    <Container maxW='container.lg' p={4} bg='teal'>
      <VStack p={4} spacing={4} borderRadius={20} bg='black'>
        <Box w='full' p={4} borderRadius={20} bg='white' color='black'>
          111
          <br />
          111
          <br />
          111
          <br />
        </Box>
        <Box w='full' p={4} borderRadius={20} bg='white' color='black'>
          222
          <br />
          222
          <br />
          222
          <br />
        </Box>
        <Box w='full' p={4} borderRadius={20} bg='white' color='black'>
          333
          <br />
          333
          <br />
          333
          <br />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
