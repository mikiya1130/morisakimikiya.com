import { MdLink } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import RichContent from '@/components/RichContent';
import Heading from '@/components/ui/Heading';
import SimpleGrid from '@/components/ui/SimpleGrid';
import TextLink from '@/components/ui/TextLink';
import { LinkData, LinkItem } from '@/lib/data-schema';
import { Box } from '@/styled-system/jsx';

type Props = {
  data: LinkData;
};

const Link = ({ data }: Props) => {
  return (
    <ContentBox icon={MdLink} title='LINK'>
      <SimpleGrid>
        {data.items.map((item: LinkItem, index: number) => (
          <Box
            key={index}
            p={2}
            border='1px solid'
            borderColor='black'
            borderRadius='20px'
            boxShadow='0px 1px 1px 0px'
          >
            <Heading as='h4' size='md' textAlign='center'>
              <TextLink href={item.link} target='_blank' rel='noopener' color='red'>
                {item.title}
              </TextLink>
            </Heading>
            <RichContent src={item.content} />
          </Box>
        ))}
      </SimpleGrid>
    </ContentBox>
  );
};

export default Link;
