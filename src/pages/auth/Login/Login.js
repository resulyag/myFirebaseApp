import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Input from '../../../components/Input';
import styles from './Login.style';
import Button from '../../../components/Button';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import authErrorMessageParser from '../../../utils/authErrorMessageParser';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const gotoSign = () => {
    navigation.navigate('SignPage');
  };

  async function handleLogin(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      setLoading(false);
      navigation.navigate('Messages');
    } catch (error) {
      setLoading(false);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleLogin}>
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
            <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
          </>
        )}
      </Formik>
      <Button text="Kayıt Ol" theme="secondary" onPress={gotoSign} />
    </SafeAreaView>
  );
};

export default Login;
