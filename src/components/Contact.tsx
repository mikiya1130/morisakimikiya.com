import { Center } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { MdMail } from 'react-icons/md';
import ContentBox from '@/components/ContentBox';
import FormItem from '@/components/FormItem';
import RedRoundButton from '@/components/RedRoundButton';
import { FormDataType } from '@/types/FormType';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormDataType>({
    mode: 'all',
  });

  function onSubmit(values: FormDataType) {
    return new Promise(() => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        reset();
      }, 100);
    });
  }

  return (
    <ContentBox icon={MdMail} title='CONTACT'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormItem
          kind='input'
          id='name'
          label='お名前'
          error={errors.name}
          register={register}
          options={{
            required: '※入力してください。',
            maxLength: { value: 30, message: '※30文字以下で入力してください。' },
          }}
        />
        <FormItem
          kind='input'
          id='email'
          label='Email'
          error={errors.email}
          register={register}
          options={{
            required: '※入力してください。',
            maxLength: { value: 254, message: '※254文字以下で入力してください。' },
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: '※メールアドレスの形式を満たしていません。',
            },
          }}
        />
        <FormItem
          kind='textarea'
          id='text'
          label='お問い合わせ内容'
          error={errors.text}
          register={register}
          options={{
            required: '※入力してください。',
            maxLength: { value: 1000, message: '※1000文字以下で入力してください。' },
          }}
        />
        <Center>
          <RedRoundButton mt={4} type='submit' isDisabled={!isValid} isLoading={isSubmitting}>
            送信
          </RedRoundButton>
        </Center>
      </form>
    </ContentBox>
  );
};

export default Contact;
