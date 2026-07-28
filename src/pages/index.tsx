import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Link from '@/components/Link';
import Message from '@/components/Message';
import Profile from '@/components/Profile';
import Skill from '@/components/Skill';
import { Box, VStack } from '@/styled-system/jsx';

const Index = () => {
  return (
    <Box w='100%' maxW='1024px' mx='auto' p={4} bg='teal'>
      <VStack p={4} gap={4} borderRadius='20px' bg='black'>
        <Header />
        <Message />
        <Profile />
        <Skill />
        <Link />
        <Contact />
      </VStack>
    </Box>
  );
};

export default Index;
