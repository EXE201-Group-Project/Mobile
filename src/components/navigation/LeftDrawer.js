import {
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { GlobalStyle } from '../../theme/GlobalStyle';
import { useSelector } from 'react-redux';

const LeftDrawer = (props) => {
  const userInfo = useSelector((state) => state.user.googleUser);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image
          source={{
            uri: userInfo.photo
          }}
          style={styles.wallpaper}
        />
        <Text style={GlobalStyle.header}>{userInfo.name}</Text>
        <Text style={styles.subText}>{userInfo.email}</Text>
        <TouchableOpacity
          onPress={() => {}}
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
          <Ionicon name="call-outline" size={24} style={{ marginRight: 6 }} />
          <Text>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {}}
          style={[GlobalStyle.horizontal, styles.bottomNavItem]}
        >
          <Ionicon
            name="log-out-outline"
            size={24}
            style={{ marginRight: 6 }}
          />
          <Text>Log out</Text>
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
  }
});

export default LeftDrawer;
