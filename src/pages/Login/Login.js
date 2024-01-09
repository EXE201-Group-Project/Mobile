import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Platform
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login, logout } from '../../redux/slice/authSlice';
import { Screen } from '../../navigator/Screen';

function Header() {
  return (
    <View style={{ padding: 20 }}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="gray" />
        </TouchableOpacity>
        <Text
          style={{
            color: '#22ba3a',
            textAlign: 'center',
            fontWeight: 700,
            fontSize: 35,
            lineHeight: 35,
            paddingTop: 100
          }}
        >
          Login here
        </Text>
        <Text
          style={{
            marginTop: 3,
            color: 'black',
            fontWeight: 400,
            fontSize: 20,
            lineHeight: 24,
            paddingLeft: 10,
            marginTop: 20,
            marginHorizontal: 30,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >
          Welcome back you've been missed!
        </Text>
      </View>
    </View>
  );
}

function Body() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.user.error);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [loginAttemptCounter, setLoginAttemptCounter] = useState(0);

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
        style={[styles.input]}
        value={email}
        onChangeText={handleEmailChange}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={handlePasswordChange} // Use handlePasswordChange as the event handler
      />
      <TouchableOpacity
        onPress={{}}
        style={{ alignItems: 'flex-end', marginTop: 20, marginLeft: 220 }}
      >
        <Text style={{ color: '#22ba3a', fontWeight: 'bold' }}>
          Forgot your password?
        </Text>
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
        backgroundColor: '#f1edea',
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
      >
        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={handleLogout}
        >
          <Text style={styles.createAccountButtonText}>Back to welcome</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Login() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f1edea' }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Header />
          <Body />
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Footer />
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingHorizontal: 20
  },
  loginButton: {
    marginTop: 40,
    backgroundColor: '#22ba3a',
    paddingVertical: 15,
    borderRadius: 8,
    width: 350,
    alignItems: 'center'
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
  }
});

export default Login;
