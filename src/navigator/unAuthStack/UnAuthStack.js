import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Login/Register';

const Stack = createStackNavigator();

export default function UnAuthStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      {/* <Stack.Screen
        name="SIGNUP"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SIGNIN"
        component={SignIn}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}
