import { Input, Textarea } from '@chakra-ui/react';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { FormDataType, FormIdType } from '@/types/FormType';

type Props = {
  kind: 'input' | 'textarea';
  id: FormIdType;
  register: UseFormRegister<FormDataType>;
  options: RegisterOptions;
};

const InputArea = ({ kind, id, register, options }: Props) => {
  return kind === 'input' ? (
    <Input
      variant='flushed'
      borderColor='black'
      focusBorderColor='teal'
      {...register(id, options)}
    />
  ) : (
    <Textarea
      variant='flushed'
      borderColor='black'
      focusBorderColor='teal'
      resize='vertical'
      {...register(id, options)}
    />
  );
};

export default InputArea;
