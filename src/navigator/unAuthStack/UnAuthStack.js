import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from '../Screen';
import Login from '../../pages/Login/Login';
import Read from '../../pages/CRUD/Read';
import Home from '../../pages/Home/Home';
import AddedStop from '../../components/bottomSheet/AddedStop';
import SearchChangeAddress from '../../pages/Home/SearchChangeAddress';
import RouteSetting from '../../pages/Route/RouteSetting';
import SearchStartEndAddress from '../../pages/Home/SearchStartEndAddress';
import LeftDrawer from '../../components/navigation/LeftDrawer';
import AuthStackNavigator from '../authStack/AuthStack';
import EditStop from '../../pages/EditStop/EditStop';
import EditNote from '../../pages/EditNote/EditNote';
import AddBreak from '../../pages/AddBreak/AddBreak';

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
        component={SearchStartEndAddress}
        name={Screen.SearchStartEndAddress}
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
      <Stack.Screen
        component={EditStop}
        name={Screen.EditStop}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={EditNote}
        name={Screen.EditNote}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        component={AddBreak}
        name={Screen.AddBreak}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
