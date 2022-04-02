import { Box, Heading, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react';
import { MdLink } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import { linkList, LinkType } from '@/data/link';

const Link = () => {
  return (
    <ContentBox icon={MdLink} title='LINK'>
      <SimpleGrid minChildWidth='250px' spacing={4}>
        {linkList.map((link: LinkType, index: number) => (
          <Box
            key={index}
            p={2}
            border='1px solid'
            borderColor='black'
            borderRadius='20px'
            boxShadow='0px 1px 1px 0px'
          >
            <Heading as='h4' size='md' textAlign='center'>
              <ChakraLink href={link.link} isExternal color='red'>
                {link.title}
              </ChakraLink>
            </Heading>
            {link.content}
          </Box>
        ))}
      </SimpleGrid>
    </ContentBox>
  );
};

export default Link;
