import { AspectRatio, Heading, useBreakpointValue } from '@chakra-ui/react';
import ContentBox from '@/components/ContentBox';

const Header = () => {
  return (
    <ContentBox bg='center/cover url("images/bike.jpg")'>
      <AspectRatio ratio={16 / 9}>
        <Heading
          as='h1'
          pb='30%'
          size={useBreakpointValue(['xl', '3xl', '4xl'])}
          textShadow='2px 2px var(--chakra-colors-teal),
                    -2px 2px var(--chakra-colors-teal),
                    2px -2px var(--chakra-colors-teal),
                    -2px -2px var(--chakra-colors-teal)'
        >
          {'Morisaki Mikiya'}
        </Heading>
      </AspectRatio>
    </ContentBox>
  );
};

export default Header;
