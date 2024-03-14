import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import InputText from '../../components/login/InputText';
import Title from '../../components/Title';
import InputSecureText from '../../components/login/InputSecureText';
import { useToast } from 'react-native-toast-notifications';
import { registerAccAxios } from '../../hook/axios';

// const template = {
//   UserName,
//   Password,
//   DisplayName,
//   PhoneNumber,
//   LockoutEnabled, true
//   Avatar,
// };
function containsNumber(str) {
  const regex = /[0-9]/;
  return regex.test(str);
}
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [avatar, setAvatar] = useState('');
  const toast = useToast();

  const showToast = (message, type) => {
    try {
      const fmtType = type ? type : 'normal';
      toast.show(message, {
        type: fmtType,
        placement: 'top',
        duration: 4000,
        offset: 30,
        animationType: 'slide-in'
      });
    } catch (error) {
      console.log('err at show toast', error);
    }
  };
  const handleRegister = async () => {
    if (password.length <= 5 || !containsNumber(password)) {
      showToast(
        'Mật khẩu cần có ít nhất 5 ký tự, và chứa ít nhất 1 chữ số',
        'warning'
      );
    } else if (password !== rePassword) {
      showToast('Mật khẩu và nhập lại mật khẩu không trùng khớp!', 'warning');
    } else if (email && password && name && phoneNumber) {
      if (isValidEmail(email)) {
        const template = {
          UserName: email,
          Password: password,
          DisplayName: name,
          PhoneNumber: phoneNumber,
          Email: email
        };
        await registerAccAxios(template)
          .then((result) => {
            if (result.status == 201) {
              showToast('Tạo tài khoản thành công', 'success');
              setTimeout(() => {
                navigation.navigate('Login');
              }, 700);
            }
          })
          .catch((error) => {
            if (error.response.status === 400) {
              const { errors } = error.response.data;
              showToast(errors, 'danger');
            } else {
              console.error('Error:', error.message);
            }
          });
      } else {
        showToast('Sai định dạng gmail, xin hãy nhập lại', 'warning');
      }
    } else {
      showToast('Xin hãy nhập đầy đủ thông tin.', 'warning');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Title navigation={navigation} title={'Tạo tài khoản'} />
      </View>
      <View style={{ width: '100%' }}>
        <InputText
          label={'Email'}
          setText={setEmail}
          iconName={'email-outline'}
          inputType={'email-address'}
          placeholder={'Email của bạn'}
        />
        <InputSecureText label={'Mật khẩu'} setSecureText={setPassword} />
        <InputSecureText
          label={'Nhập lại mật khẩu'}
          setSecureText={setRePassword}
        />
        <InputText
          label={'Họ tên của bạn'}
          setText={setName}
          iconName={'account'}
        />
        <InputText
          label={'Số điện thoại'}
          setText={setPhoneNumber}
          iconName={'phone'}
          inputType={'numeric'}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            handleRegister();
          }}
        >
          <Text style={styles.loginButtonText}>Tạo tài khoản</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 25
  },
  input: {
    marginTop: 25,
    width: 350,
    backgroundColor: '#f1f4ff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20
  },
  loginButton: {
    marginTop: 25,
    backgroundColor: '#43A9EB',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Register;
