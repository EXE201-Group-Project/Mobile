import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../Screen';
import Login from '../../pages/Login/Login';
import Read from '../../pages/CRUD/Read';
import Home from '../../pages/Home/Home';
import AddedStop from '../../components/bottomsheet/AddedStop';
import SearchChangeAddress from '../../pages/Home/SearchChangeAddress';
import RouteSetting from '../../pages/Route/RouteSetting';
import SearchStartAddress from '../../pages/Home/SearchStartAddress';
import LeftDrawer from '../../components/navigation/LeftDrawer';
import AuthStackNavigator from '../authStack/AuthStack';


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
      <Stack.Screen
        component={SearchChangeAddress}
        name={Screen.SearchChangeAddress}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={RouteSetting}
        name={Screen.RouteSetting}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={SearchStartAddress}
        name={Screen.SearchStartAddress}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={LeftDrawer}
        name={Screen.LeftDrawer}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={AuthStackNavigator}
        name={Screen.AuthStackNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
