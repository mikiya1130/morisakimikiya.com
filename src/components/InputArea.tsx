import { Field } from '@ark-ui/react/field';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { cva } from '@/styled-system/css';
import { styled } from '@/styled-system/jsx';
import { FormDataType, FormIdType } from '@/types/FormType';

const flushedBaseStyle = {
  w: '100%',
  outline: '2px solid transparent',
  outlineOffset: '2px',
  position: 'relative',
  appearance: 'none',
  transitionProperty: 'var(--transition-property-common)',
  transitionDuration: 'normal',
  borderBottom: '1px solid',
  borderColor: 'black',
  _invalid: { borderColor: 'red', boxShadow: '0px 1px 0px 0px {colors.red}' },
  _focusVisible: { borderColor: 'teal', boxShadow: '0px 1px 0px 0px {colors.teal}' },
};

const flushedInputRecipe = cva({
  base: { ...flushedBaseStyle, h: 10 },
});

const flushedTextareaRecipe = cva({
  base: {
    ...flushedBaseStyle,
    py: 2,
    minH: 20,
    lineHeight: 1.375,
    verticalAlign: 'top',
  },
});

const FlushedInput = styled(Field.Input, flushedInputRecipe);
const FlushedTextarea = styled(Field.Textarea, flushedTextareaRecipe);

type Props = {
  kind: 'input' | 'textarea';
  id: FormIdType;
  register: UseFormRegister<FormDataType>;
  options: RegisterOptions<FormDataType, FormIdType>;
};

const InputArea = ({ kind, id, register, options }: Props) => {
  return kind === 'input' ? (
    <FlushedInput {...register(id, options)} />
  ) : (
    <FlushedTextarea {...register(id, options)} />
  );
};

export default InputArea;
