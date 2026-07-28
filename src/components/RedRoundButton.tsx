import { ComponentProps, ReactNode } from 'react';
import { cva } from '@/styled-system/css';
import { Box, Center, styled } from '@/styled-system/jsx';

const redRoundButtonRecipe = cva({
  base: {
    display: 'inline-flex',
    appearance: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    position: 'relative',
    lineHeight: 1.2,
    fontWeight: 'semibold',
    transitionProperty: 'var(--transition-property-common)',
    transitionDuration: 'normal',
    h: 10,
    px: 4,
    outline: '2px solid transparent',
    outlineOffset: '2px',
    border: '2px solid',
    borderColor: 'red',
    borderRadius: '20px',
    bg: 'white',
    color: 'red',
    cursor: 'pointer',
    _hover: { boxShadow: '0 0 3px 0' },
    _active: { bg: 'gray.300' },
    _focusVisible: { boxShadow: 'outline' },
    _disabled: { opacity: 0.4, cursor: 'not-allowed', boxShadow: 'none' },
  },
});

const StyledButton = styled('button', redRoundButtonRecipe);

type CustomProps = {
  loading?: boolean;
  children: ReactNode;
};

type Props = ComponentProps<typeof StyledButton> & CustomProps;

const RedRoundButton = ({ children, loading, disabled, ...buttonProps }: Props) => {
  return (
    <StyledButton disabled={disabled || loading} {...buttonProps}>
      {loading && (
        <Center as='span' position='absolute' fontSize='1em' lineHeight='normal'>
          <Box
            as='span'
            display='inline-block'
            w='1em'
            h='1em'
            borderWidth='2px'
            borderStyle='solid'
            borderColor='currentColor'
            borderBottomColor='transparent'
            borderLeftColor='transparent'
            borderRadius='full'
            animation='spin 0.45s linear infinite'
          />
        </Center>
      )}
      {loading ? (
        <Box as='span' opacity={0}>
          {children}
        </Box>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default RedRoundButton;
