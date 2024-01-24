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
  return <Login />;
}
