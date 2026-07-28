import { Fragment, ReactNode } from 'react';
import { IconType } from 'react-icons';
import Star from '@/components/Star';
import Heading from '@/components/ui/Heading';
import Icon from '@/components/ui/Icon';
import Image from '@/components/ui/Image';
import { Grid, GridItem, Wrap } from '@/styled-system/jsx';

type Props = {
  title: string | string[];
  logo: string | string[] | IconType | IconType[];
  star: number;
  children: ReactNode;
};

const SkillGrid = ({ title, logo, star, children }: Props) => {
  const titleList = Array.isArray(title) ? title : [title];
  const logoList = Array.isArray(logo) ? logo : [logo];

  return (
    <Grid
      p={2}
      border='1px solid'
      borderColor='black'
      borderRadius='20px'
      boxShadow='0px 1px 1px 0px'
      placeItems='center'
      gap={4}
      gridTemplateAreas="'logo     title'
                     'logo     star'
                     'content content'"
      gridTemplateColumns='70px 1fr'
      gridTemplateRows='max-content max-content 1fr'
    >
      <GridItem gridArea='title'>
        <Heading as='h4' size='md'>
          {titleList.map((title: string, index: number) => (
            <Fragment key={index}>
              {index !== 0 && ' / '}
              {title}
            </Fragment>
          ))}
        </Heading>
      </GridItem>
      <GridItem gridArea='logo'>
        <Wrap justify='center'>
          {logoList.map((logo: string | IconType, index: number) =>
            typeof logo === 'string' ? (
              <Image key={index} src={`logos/${logo}.svg`} alt={logo} boxSize='50px' />
            ) : (
              <Icon key={index} as={logo} size='logo' />
            ),
          )}
        </Wrap>
      </GridItem>
      <GridItem gridArea='star'>
        <Star value={star} size={25} />
      </GridItem>
      <GridItem gridArea='content' alignSelf='start'>
        {children}
      </GridItem>
    </Grid>
  );
};

export default SkillGrid;
