import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../Screen';
import Login from '../../pages/Login/Login';
import Read from '../../pages/CRUD/Read';
import Home from '../../pages/Home/Home';
import AddedStop from '../../components/bottomSheet/AddedStop';

const Stack = createStackNavigator();

export default function UnAuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={Screen.Home}>
      <Stack.Screen
        component={Login}
        name={Screen.Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={Home}
        name={Screen.Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={AddedStop}
        name={Screen.AddedStop}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
