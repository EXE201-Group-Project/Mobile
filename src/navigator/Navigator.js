//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import UnAuthStackNavigator from './unAuthStack/UnAuthStack'
import AuthStackNavigator from './authStack/AuthStack'

// create a component
function Navigator() {
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    console.log(token)

    return (
        <NavigationContainer>
            {!token ? <UnAuthStackNavigator/> : <AuthStackNavigator/>}
        </NavigationContainer>
    );
}

//make this component available to the app
export default Navigator;
