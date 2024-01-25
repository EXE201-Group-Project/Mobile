import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheetHome from '../../components/bottomsheet/BottomSheet';
import GgMap from './GgMap';
// import { GOOGLE_MAP_API_KEY } from '@env';

const Home = ({ navigation }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <View style={styles.container}>
      <GgMap navigation={navigation} isShowMenu={isShowMenu} />
      <BottomSheetHome setIsShowMenu={setIsShowMenu} navigation={navigation} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
