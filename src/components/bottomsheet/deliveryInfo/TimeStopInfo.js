//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from './Header';

// create a component
const TimeStopInfo = ({mod2, closeBottomSheet2}) => {
    return (
        <View style={styles.container}>
        <Header mod2={mod2} closeBottomSheet2={closeBottomSheet2}/>
            <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                <View style={{marginLeft: 15}}>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 15, fontWeight:"bold"}}>
                            Minutes
                        </Text>
                    </View>
                    <View>
                        <TextInput placeholder='1' keyboardType="numeric" autoFocus={true} style={{borderRadius: 10, borderWidth:1, borderColor:"blue", width: 170, height: 50, paddingLeft: 10}} />
                    </View>
                </View>
                <View style={{marginRight:15}}>
                    <View style={{marginVertical: 10}}>
                        <Text style={{fontSize: 15, fontWeight:"bold"}}>
                            Seconds
                        </Text>
                    </View>
                    <View>
                        <TextInput placeholder='0' keyboardType="numeric" style={{borderRadius: 10, borderWidth:1, borderColor:"blue", width: 170, height: 50, paddingLeft: 10}} />
                    </View>
                </View>
            </View>
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
export default TimeStopInfo;
