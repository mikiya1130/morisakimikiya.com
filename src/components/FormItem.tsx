import { Field } from '@ark-ui/react/field';
import { FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form';
import InputArea from '@/components/InputArea';
import { css } from '@/styled-system/css';
import { FormDataType, FormIdType } from '@/types/FormType';

type Props = {
  kind: 'input' | 'textarea';
  id: FormIdType;
  label: string;
  error?: FieldError;
  register: UseFormRegister<FormDataType>;
  options: RegisterOptions<FormDataType, FormIdType>;
};

const rootStyle = css({
  w: '100%',
  _focusWithin: { '& > label': { color: 'teal' } },
});

const labelStyle = css({
  display: 'block',
  fontWeight: 'medium',
  transitionProperty: 'var(--transition-property-common)',
  transitionDuration: 'normal',
  mt: 2,
});

const errorTextStyle = css({
  display: 'flex',
  alignItems: 'center',
  color: 'red',
  mt: 2,
  fontSize: 'sm',
  lineHeight: 'normal',
});

const FormItem = ({ kind, id, label, error, register, options }: Props) => {
  return (
    <Field.Root id={id} invalid={!!error} className={rootStyle}>
      <Field.Label className={labelStyle}>{label}</Field.Label>
      <InputArea kind={kind} id={id} register={register} options={options} />
      <Field.ErrorText className={errorTextStyle}>{error && error.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default FormItem;
