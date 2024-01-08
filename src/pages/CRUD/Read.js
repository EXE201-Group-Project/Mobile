//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";
import { logout } from '../../redux/slice/authSlice';

// create a component
const Read = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
      }
    return (
        <View style={styles.container}>
            <Text>Read</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>logout</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Read;
