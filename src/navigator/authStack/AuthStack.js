import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../Screen';
import Read from '../../pages/CRUD/Read';
const Stack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.Read}
        component={Read}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
