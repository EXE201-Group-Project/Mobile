//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';

// create a component
const ArrivalTimeInfo = ({mod1, closeBottomSheet1}) => {
    return (
        <View style={styles.container}>
        <Header mod1={mod1} closeBottomSheet1={closeBottomSheet1}/>
            <Text>ArrivalTimeInfo</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default ArrivalTimeInfo;
