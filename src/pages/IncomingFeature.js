import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const IncomingFeature = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.navigationBtn,
          styles.shadowBoxAndroid,
          styles.shadowBoxIOS
        ]}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Icon name="menu-outline" size={26} color="black" />
      </Pressable>
      <Text>Incoming Feature</Text>
      <Text style={{ textAlign: 'center', width: '80%' }}>
        Chúng tôi đang thiết kế... Xin bạn hãy kiên nhẫn chào đón trong bản cập
        nhật kế!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
export default IncomingFeature;
