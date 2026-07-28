import { useEffect, useState } from 'react';
import ContentBox from '@/components/ContentBox';
import AspectRatio from '@/components/ui/AspectRatio';
import Heading from '@/components/ui/Heading';
import { Box } from '@/styled-system/jsx';

const images = ['images/tuba.jpg', 'images/ocarina.jpg', 'images/bike.jpg'];

const Header = () => {
  const [index, setIndex] = useState(0);

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
          bgPosition='center'
          bgSize='cover'
          transitionProperty='opacity'
          transitionDuration='1s'
          transitionTimingFunction='ease-in-out'
          style={{ backgroundImage: `url("${img}")`, opacity: i === index ? 1 : 0 }}
        />
      ))}
      <Box position='relative' zIndex={1} p={4}>
        <AspectRatio>
          <Heading
            as='h1'
            pb='30%'
            fontSize={{ base: '3xl', sm: '5xl', md: '7xl' }}
            lineHeight={{ base: 1.33, sm: 1, md: 1 }}
            textShadow='2px 2px var(--colors-teal), -2px 2px var(--colors-teal), 2px -2px var(--colors-teal), -2px -2px var(--colors-teal)'
          >
            Morisaki Mikiya
          </Heading>
        </AspectRatio>
      </Box>
    </ContentBox>
  );
};

export default Header;
