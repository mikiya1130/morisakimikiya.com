import { Container, VStack } from '@chakra-ui/react';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Link from '@/components/Link';
import Message from '@/components/Message';
import Profile from '@/components/Profile';
import Skill from '@/components/Skill';

const Index = () => {
  return (
    <Container maxW='container.lg' p={4} bg='teal'>
      <VStack p={4} spacing={4} borderRadius={20} bg='black'>
        <Header />
        <Message />
        <Profile />
        <Skill />
        <Link />
        <Contact />
      </VStack>
    </Container>
  );
};

export default Index;
