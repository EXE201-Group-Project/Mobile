import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GlobalStyle } from '../../theme/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { logout } from '../../redux/slice/authSlice';
import { useEffect, useState } from 'react';
import { clearPlaces, clearPolylines } from '../../redux/slice/placeSlice';

const LeftDrawer = (props) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const [userAvatar, setUserAvatar] = useState(
    require('../../../assets/imgs/userPic.jpg')
  );

  const logoutGG = () => {
    dispatch(logout());
    dispatch(clearPlaces());
    dispatch(clearPolylines());
    GoogleSignin.revokeAccess();
    GoogleSignin.signOut();
  };

  useEffect(() => {
    const photo = userInfo.photo
      ? { uri: userInfo.photo }
      : require('../../../assets/imgs/userPic.jpg');
    setUserAvatar(photo);
  }, [userInfo]);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={userAvatar} style={styles.wallpaper} />
        <Text style={GlobalStyle.header}>
          {userInfo.user ? userInfo.user : 'null'}
        </Text>
        <Text style={styles.subText}>
          {userInfo.email ? userInfo.email : 'null'}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log(userInfo);
          }}
          style={[GlobalStyle.horizontal, styles.alignVerCenter]}
        >
          <Text
            style={[GlobalStyle.subHeader, styles.subText, { marginRight: 6 }]}
          >
            Gói Premium
          </Text>
          <FontAwesome name="angle-right" size={24} style={styles.subText} />
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={() => {}}
          style={[GlobalStyle.horizontal, styles.bottomNavItem]}
        >
          <Ionicon
            color={'#595959'}
            name="call-outline"
            size={24}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.bottomNavText}>Liên lạc với chúng tôi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={logoutGG}
          style={[GlobalStyle.horizontal, styles.bottomNavItem]}
        >
          <Ionicon
            color={'#595959'}
            name="log-out-outline"
            size={24}
            style={{ marginRight: 6 }}
          />
          <Text style={styles.bottomNavText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fontStyle: {
    fontFamily: 'Lato'
  },
  userInfo: {
    padding: 20,
    backgroundColor: '#D8EBFA',
    marginBottom: 8
  },
  wallpaper: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  alignVerCenter: {
    alignItems: 'center'
  },
  subText: {
    color: '#5A5A5A'
  },
  bottomNav: {
    padding: 20,
    borderTopWidth: 1
  },
  bottomNavItem: {
    paddingVertical: 12
  },
  bottomNavText: {
    color: '#0d0d0d',
    fontWeight: '500'
  }
});

export default LeftDrawer;
