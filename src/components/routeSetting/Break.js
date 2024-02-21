//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../navigator/Screen';

// create a component
const Break = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        style={styles.text}
      >
        Break
      </Text>
      <Text style={{ fontSize: 18 }}>Will you have a break (e.g. lunch)?</Text>
      {
        <View>
          <TouchableOpacity
            style={styles.touchAble}
            onPress={() => navigation.navigate(Screen.AddBreak)}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 20
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="free-breakfast" size={24} color="gray" style={{ marginRight: 20 }}/>

                <Text>Add a break</Text>
              </View>
              <View>
                <Icon name="chevron-right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 40
  },
  touchAble: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 60,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center'
  }
});

//make this component available to the app
export default Break;
