import { AspectRatio, Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import ContentBox from '@/components/ContentBox';
import { useEffect, useState } from 'react';

const Header = () => {
  const [index, setIndex] = useState(0);
  const images = ['images/bike.jpg', 'images/ocarina.jpg', 'images/tuba.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ContentBox position='relative' overflow='hidden' p={0}>
      {images.map((img, i) => (
        <Box
          key={img}
          position='absolute'
          top={0}
          left={0}
          w='100%'
          h='100%'
          bg={`center/cover url("${img}")`}
          opacity={i === index ? 1 : 0}
          transition='opacity 1s ease-in-out'
        />
      ))}
      <Box position='relative' zIndex={1} p={4}>
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
            Morisaki Mikiya
          </Heading>
        </AspectRatio>
      </Box>
    </ContentBox>
  );
};

export default Header;
