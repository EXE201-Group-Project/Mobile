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
  Button,
  ActivityIndicator,
  Image,
  Pressable,
  Alert
} from 'react-native';
import { TextInput, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginGoogle, logout } from '../../redux/slice/authSlice';
import { Screen } from '../../navigator/Screen';

import {
  GoogleSignin,
  GoogleSigninButton
} from '@react-native-google-signin/google-signin';

function Body() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(0);
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  useEffect(() => {
    // Check for errors when the error variable changes
    if (error) {
      alert(error);
    }
  }, [error, loginAttemptCounter]);

  const handleLogin = async () => {
    await dispatch(login({ email, password }));
    setLoginAttemptCounter((prevCounter) => prevCounter + 1);

    if (!error) {
      navigate(Screen.Read);
    }
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
        onPress={() => {}}
        style={{ alignItems: 'flex-end', marginTop: 10, marginLeft: 220 }}
      >
        <Text style={{ color: '#999999' }}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

function Footer() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    alert('logout');
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <View
        style={{
          backgroundColor: '#f1edea',
          marginBottom: 0,
          width: '100%',
          paddingBottom: 50,
          alignItems: 'center'
        }}
      ></View>
    </View>
  );
}

function Login() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '606709554304-k6bkcm89tdbhv5te7t2nuhvhovqb6n78.apps.googleusercontent.com'
    });
  }, []);

  const signinGoogle = async () => {
    try {
      setLoading(true);
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      setLoading(false);
      setUserInfo(user);
      dispatch(loginGoogle(user));
      console.log('-------------- User Info --------------');
      console.log(user);
    } catch (e) {
      setError(e);
    }
  };

  const logout = () => {
    setUserInfo();
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
              source={require('../../../assets/drMap_logo.png')}
              style={{
                width: 150,
                height: 150,
                justifyContent: 'center'
              }}
            />
            {/* <Text
                style={{
                  //Main color: 00CCFF
                  color: '#22ba3a',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontSize: 35,
                  lineHeight: 35,
                  paddingTop: 100
                }}
              >
                Doctor Map
              </Text> */}
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
              Optimize routes app {'\n'} for delivery
            </Text>
          </View>

          <Body />
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
                Or Sign In With
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
            <Text>Don't Have An Account? </Text>
            <Pressable>
              <Text
                style={{ color: '#43A9EB', textDecorationLine: 'underline' }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
