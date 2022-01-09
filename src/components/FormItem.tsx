import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import InputArea from '@/components/InputArea';
import { FormDataType, FormIdType } from '@/types/FormType';

type Props = {
  kind: 'input' | 'textarea';
  id: FormIdType;
  label: string;
  error?: FieldError;
  register: UseFormRegister<FormDataType>;
  options: RegisterOptions;
};

const FormItem = ({ kind, id, label, error, register, options }: Props) => {
  return (
    <FormControl id={id} isInvalid={!!error}>
      <FormLabel mt={2} mb={0} htmlFor={id} _focus={{ color: 'teal' }}>
        {label}
      </FormLabel>
      <InputArea kind={kind} id={id} register={register} options={options} />
      <FormErrorMessage color='red'>{error && error.message}</FormErrorMessage>
    </FormControl>
  );
};

export default FormItem;
