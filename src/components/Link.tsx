import { MdLink } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import Heading from '@/components/ui/Heading';
import SimpleGrid from '@/components/ui/SimpleGrid';
import TextLink from '@/components/ui/TextLink';
import { linkList, LinkType } from '@/data/link';
import { Box } from '@/styled-system/jsx';

const Link = () => {
  return (
    <ContentBox icon={MdLink} title='LINK'>
      <SimpleGrid>
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
              <TextLink href={link.link} target='_blank' rel='noopener' color='red'>
                {link.title}
              </TextLink>
            </Heading>
            {link.content}
          </Box>
        ))}
      </SimpleGrid>
    </ContentBox>
  );
};

export default Link;
