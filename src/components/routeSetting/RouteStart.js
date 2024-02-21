//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../navigator/Screen';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// create a component
const RouteStart = ({ name, setCount }) => {
  const [names, setName] = useState('');
  console.log('name', name);

  useEffect(() => {
    // Set the initial state when the component mounts
    setName(name);
  }, [name, setCount]); // Run this effect when the 'name' prop changes

  const navigation = useNavigation();
  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>
        Route start
      </Text>
      <Text style={{ fontSize: 18 }}>When and where do you start driving?</Text>
      {
        <View>
          <TouchableOpacity
            style={styles.touchAble}
            onPress={() => navigation.navigate(Screen.SearchStartEndAddress)}
          >
            <View
              style={styles.touchContent}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {names ? (
                  <FontAwesome
                    name="home"
                    size={24}
                    color="#4682f9"
                    style={{ marginRight: 20 }}
                  />
                ) : (
                  <MaterialIcons
                    name="my-location"
                    size={24}
                    color="#4682f9"
                    style={{ marginRight: 20 }}
                  />
                )}
                {names ? (
                  <Text>{names}</Text>
                ) : (
                  <Text>Use current location</Text>
                )}
              </View>
              <View>
                {names ? (
                  <TouchableOpacity onPress={() => setName('')}>
                    <Entypo name="cross" size={20} color="gray" />
                  </TouchableOpacity>
                ) : (
                  <Icon name="chevron-right" size={20} color="gray" />
                )}
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
      <View>
        <TouchableOpacity
          style={styles.touchAble}
        >
          <View
            style={styles.touchContent}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={24}
                color="#4682f9"
                style={{ marginRight: 20 }}
              />
              <Text>Start right now</Text>
            </View>
            <View>
              <Icon name="chevron-right" size={20} color="gray" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
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
  touchAble: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 60,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center'
  },
  touchContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  }
});

//make this component available to the app
export default RouteStart;
