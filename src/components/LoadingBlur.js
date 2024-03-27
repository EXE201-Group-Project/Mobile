import { View, StyleSheet } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const LoadingBlur = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../../assets/animations/loading_circle.json')}
        style={{
          width: '60%',
          height: '60%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        autoPlay
        loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1
  }
});

export default LoadingBlur;
