import { Button, ButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type CustomProps = {
  children: ReactNode;
};

type Props = ButtonProps & CustomProps;

const RedRoundButton = ({ children, ...buttonProps }: Props) => {
  return (
    <Button
      outline='none'
      border='2px solid red'
      borderRadius='20px'
      bg='white'
      color='red'
      _hover={{ boxShadow: '0 0 3px 0' }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default RedRoundButton;
