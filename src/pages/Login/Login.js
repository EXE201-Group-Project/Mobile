import * as React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Pressable,
  Alert
} from 'react-native';
import { TextInput, Avatar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { loginAccount, loginGoogle, logout } from '../../redux/slice/authSlice';
import { useToast } from 'react-native-toast-notifications';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { loginAccAxios, loginGGAxios } from '../../hook/axios';
import { showToast } from '../../components/ToastMsg';
import LoadingBlur from '../../components/LoadingBlur';

function Body({ setLoading }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = async (username, password) => {
    setLoading(true);
    await loginAccAxios({
      UserName: username,
      Password: password
    })
      .then((rs) => {
        if (rs.status == 200) {
          // console.log('login success fully ', rs.data);
          dispatch(loginAccount(rs.data));
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log('err at login ', e);
        showToast(toast, 'Wrong email or password!', 'warning');
      });
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        style={[styles.input, { marginTop: 10 }]}
        value={email}
        onChangeText={handleEmailChange}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity
        onPress={() => {
          Alert.alert(
            'Quên mật khẩu',
            'Xin hãy gửi thông tin của bạn qua mail: wearedareteam@gmail.com để được giải quyết.'
          );
        }}
        style={{ alignItems: 'flex-end', marginTop: 10, marginLeft: 220 }}
      >
        <Text style={{ color: '#999999' }}>Quên mật khẩu?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => handleLogin(email, password)}
      >
        <Text style={styles.loginButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

function Login({ navigation }) {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '606709554304-k6bkcm89tdbhv5te7t2nuhvhovqb6n78.apps.googleusercontent.com'
    });
  }, []);

  //Fetch data tu google -> sau khi chon acc => call server luu thong tin
  //=> sau khi thong tin san sang => luu vao state
  const signinGoogle = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      // console.log('userToken here ', user);
      if (user) {
        await loginGGAxios({
          IdToken: user.idToken
        })
          .then((response) => {
            // console.log(response);
            if (response.status == 200) {
              // console.log('login with gooogle success ', response);
              dispatch(loginAccount(response.data));
              setLoading(false);
            }
          })
          .catch((err) => {
            showToast(toast, String(err), 'warning');
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
      // console.log('-------------- User Info --------------');
      // console.log(user);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };

  const logout = () => {
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ padding: 20, alignItems: 'center' }}>
            <Image
              source={require('../../../assets/imgs/drMapLogo.jpg')}
              style={{
                width: 150,
                height: 150,
                justifyContent: 'center'
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 24,
                marginTop: 10,
                textAlign: 'center',
                fontWeight: 'bold'
              }}
            >
              Tối ưu hóa đường đi {'\n'} dành cho mọi phương tiện
            </Text>
          </View>

          <Body setLoading={setLoading} />
          <View style={styles.footerSection}>
            <View
              style={{
                flex: 3,
                width: '80%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 15
              }}
            >
              <Text style={styles.middleline}></Text>
              <Text
                style={{
                  flex: 1,
                  textAlign: 'center',
                  marginHorizontal: 5
                }}
              >
                Hoặc đăng nhập với
              </Text>
              <Text style={styles.middleline}></Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20
            }}
          >
            <Pressable onPress={() => signinGoogle()}>
              <Avatar.Image
                size={34}
                style={[styles.otherLoginBtn, { marginRight: 30 }]}
                source={require('../../../assets/icons/google_logo.png')}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                Alert.alert(
                  'Upcoming feature..',
                  'We currently developing this feature, sorry for this inconvenience',
                  [
                    {
                      text: 'Come back'
                    }
                  ]
                );
              }}
            >
              <Avatar.Image
                size={34}
                style={styles.otherLoginBtn}
                source={require('../../../assets/icons/facebook_logo.png')}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 25,
              marginBottom: 10
            }}
          >
            <Text>Chưa có tài khoản? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
              <Text
                style={{ color: '#43A9EB', textDecorationLine: 'underline' }}
              >
                Đăng ký!
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {loading ? <LoadingBlur /> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
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
    width: 350,
    alignItems: 'center'
  },
  loginGoogleBtn: {
    backgroundColor: ''
  },
  loginButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  createAccountButton: {
    marginTop: 40,
    color: 'white'
  },
  createAccountButtonText: {
    color: '#737373',
    fontWeight: 'bold'
  },
  continueWithText: {
    color: '#22ba3a',
    fontWeight: 'bold',
    marginTop: 80
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 30
  },
  socialButton: {
    backgroundColor: '#b4b4b5',
    textAlign: 'center',
    paddingHorizontal: 30,
    borderRadius: 10,
    paddingVertical: 20,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialButtonImage: {
    // Add image styles here
  },
  warningText: {
    color: 'red',
    marginTop: 5,
    width: '80%'
  },
  footerSection: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middleline: {
    flex: 1,
    height: 0,
    borderTopWidth: 1,
    borderColor: '#d6d6c2',
    backgroundColor: 'red'
  },
  otherLoginBtn: {
    width: 58,
    height: 58,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    elevation: 3
  }
});

export default Login;
