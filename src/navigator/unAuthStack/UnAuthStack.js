import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../Screen';
import Login from '../../pages/Login/Login';
import Read from '../../pages/CRUD/Read';
const Stack = createStackNavigator();

export default function UnAuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={Screen.Login}>
      <Stack.Screen
        component={Login}
        name={Screen.Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
