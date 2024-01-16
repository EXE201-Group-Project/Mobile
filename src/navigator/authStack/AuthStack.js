import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from 'react-native';

//Component
import LeftDrawer from '../../components/navigation/LeftDrawer';

import { Screen } from '../Screen';
import Read from '../../pages/CRUD/Read';
import MainPage from '../../pages/MainPage/MainPage';
import SettingPage from '../../pages/Setting/SettingPage';
import Login from '../../pages/Login/Login';
import Home from '../../pages/Home/Home';

const Drawer = createDrawerNavigator();

export default function AuthStackNavigator() {
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
        name={Screen.Read}
        component={Read}
        options={{
          drawerIcon: ({ color }) => iconDrawer('book-outline', color)
        }}
      />
      <Drawer.Screen
        name="Đăng nhập/Đăng ký"
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
