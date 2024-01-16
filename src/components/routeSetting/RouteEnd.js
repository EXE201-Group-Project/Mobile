//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


// create a component
const RouteEnd = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 5,
          marginTop: 40
        }}
      >
        Route end
      </Text>
      <Text style={{ fontSize: 18 }}>Where do you end your route?</Text>
      {
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 60,
              borderRadius: 5,
              marginTop: 10,
              justifyContent: 'center' // Center vertically
            }}
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
              <MaterialCommunityIcons name="flag-variant" size={24} color="gray" style={{ marginRight: 20 }} />
                <Text>No end location</Text>
              </View>
              <View>
                <Icon name="chevron-right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
      {
        <View>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'gray',
              height: 60,
              borderRadius: 5,
              marginTop: 10,
              justifyContent: 'center' // Center vertically
            }}
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
              <AntDesign name="clockcircleo" size={24} color="black" style={{marginRight: 20}}/>
                <Text>Set end time</Text>
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
  }
});

//make this component available to the app
export default RouteEnd;
