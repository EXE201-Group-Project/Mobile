import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Component
import LeftDrawer from '../../components/navigation/LeftDrawer';

import { Screen } from '../Screen';
import Read from '../../pages/CRUD/Read';
import SettingPage from '../../pages/Setting/SettingPage';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';
import AddedStop from '../../components/bottomsheet/AddedStop';
import SearchChangeAddress from '../../components/searchChangeAddress/SearchChangeAddress';
import RouteSetting from '../../pages/Route/RouteSetting';
import SearchStartAddress from '../../pages/Home/SearchStartAddress';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <LeftDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: styles.navigateItem
      }}
    >
      <Drawer.Screen
        name="Trang chủ"
        component={Home}
        options={{
          drawerIcon: ({ color }) => iconDrawer('home-outline', color)
        }}
      />
      <Drawer.Screen
        // name={Screen.Read}
        name="Hướng dẫn sử dụng"
        component={Read}
        options={{
          drawerIcon: ({ color }) => iconDrawer('book-outline', color)
        }}
      />
      <Drawer.Screen
        // name="Đăng nhập/Đăng ký"
        name="Tài khoản"
        component={Login}
        options={{
          drawerIcon: ({ color }) => iconDrawer('person-outline', color)
        }}
      />
      <Drawer.Screen
        name="Cài đặt"
        component={SettingPage}
        options={{
          drawerIcon: ({ color }) => iconDrawer('settings-outline', color)
        }}
      />
    </Drawer.Navigator>
  );
}

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={Root}
        options={{ headerShown: false }}
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
        component={AuthStackNavigator}
        name={Screen.AuthStackNavigator}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigateItem: {
    marginLeft: -20
  }
});

const iconDrawer = (iconName, iconColor) => {
  return <Icon name={iconName} size={22} color={iconColor} />;
};
