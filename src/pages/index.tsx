import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Link from '@/components/Link';
import Message from '@/components/Message';
import Profile from '@/components/Profile';
import Skill from '@/components/Skill';
import { loadLinkData, loadProfileData, loadSiteData, loadSkillData } from '@/lib/data-loader';
import { writeLlmsTxt } from '@/lib/llms';
import { Box, VStack } from '@/styled-system/jsx';

export const getStaticProps = () => {
  const data = {
    site: loadSiteData(),
    profile: loadProfileData(),
    skill: loadSkillData(),
    link: loadLinkData(),
  };
  writeLlmsTxt(data);
  return { props: data };
};

const Index = ({ site, profile, skill, link }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name='description' content={site.description} />
      </Head>
      <Box w='100%' maxW='1024px' mx='auto' p={4} bg='teal'>
        <VStack p={4} gap={4} borderRadius='20px' bg='black'>
          <Header />
          <Message />
          <Profile data={profile} />
          <Skill data={skill} />
          <Link data={link} />
          <Contact />
        </VStack>
      </Box>
    </>
  );
};

export default Index;
