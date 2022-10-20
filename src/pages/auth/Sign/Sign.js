import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {Formik} from 'formik';

import auth from '@react-native-firebase/auth';

import styles from '../Sign/Sign.style';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const goBack = () => {
    navigation.goBack();
  };

  async function handleFormSubmit(formValues) {
    if (formValues.password !== formValues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      setLoading(true);
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      showMessage({
        message: 'Kullanıcı oluşturuldu',
        type: 'success',
      });
      navigation.navigate('LoginPage');
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              onType={handleChange('usermail')}
              value={values.usermail}
              placeholder="E-postanızı giriniz"
            />
            <Input
              onType={handleChange('password')}
              value={values.password}
              placeholder="Şifrenizi giriniz"
              isSecure
            />
            <Input
              onType={handleChange('repassword')}
              value={values.repassword}
              placeholder="Şifrenizi tekrar giriniz"
              isSecure
            />
            <Button text="Giriş Yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button text="Geri" theme="secondary" onPress={goBack} />
    </SafeAreaView>
  );
};

export default Sign;
