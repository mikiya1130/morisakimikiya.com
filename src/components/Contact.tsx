import { Center, Text } from '@chakra-ui/react';
import { useState } from 'react';
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
  const [result, setResult] = useState<string>('');

  const onSubmit = async (data: FormDataType) => {
    fetch('send_mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response: Response) => response.json())
      .then((data) => {
        if (data.status === 'ok') {
          setResult('送信が完了しました。お問い合わせありがとうございました。');
          reset();
        } else {
          throw 'error';
        }
      })
      .catch(() => setResult('送信に失敗しました。'));
  };

  return (
    <ContentBox icon={MdMail} title='CONTACT'>
      <Text>{result}</Text>
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
