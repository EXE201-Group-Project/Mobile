import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import BottomSheetHome from '../../components/bottomsheet/BottomSheet';
import GgMap from './GgMap';
import Icon from 'react-native-vector-icons/Ionicons';

// import { GOOGLE_MAP_API_KEY } from '@env';

const Home = ({ navigation }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const menuNavStyles = isShowMenu
    ? [styles.navigationBtn, styles.shadowBoxAndroid, styles.shadowBoxIOS]
    : { display: 'none' };

  return (
    <View style={styles.container}>
      <Pressable
        style={
          isShowMenu
            ? [
                styles.navigationBtn,
                styles.shadowBoxAndroid,
                styles.shadowBoxIOS
              ]
            : { display: 'none' }
        }
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Icon name="menu-outline" size={26} />
      </Pressable>
      <GgMap navigation={navigation} isShowMenu={isShowMenu} />
      <BottomSheetHome setIsShowMenu={setIsShowMenu} navigation={navigation} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBtn: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 100,
    top: 25,
    left: 16
  },
  shadowBoxAndroid: {
    elevation: 5
  },
  shadowBoxIOS: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});

export default Home;
