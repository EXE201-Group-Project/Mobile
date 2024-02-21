//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// create a component
const ProgressSetting = ({ setStatus, status }) => {
  console.log(status);

  return (
    <View>
      {status === null &&(
        <View style={styles.container}>
          <View style={styles.firstButton}>
            <TouchableOpacity>
              <FontAwesome
                name="location-arrow"
                size={24}
                color="black"
                style={{ alignSelf: 'center', color: 'white' }}
              />
              <Text style={styles.navigate}>Navigate</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.secondButton}>
            <TouchableOpacity
              onPress={() => setStatus(false)}
              style={{ marginRight: 30 }}
            >
              <MaterialCommunityIcons
                name="cancel"
                size={24}
                color="black"
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.progress}>Failed</Text>
            </TouchableOpacity>
            <View style={{ borderWidth: 0.5, borderColor: 'gray' }}></View>
            <TouchableOpacity
              onPress={() => setStatus(true)}
              style={{ marginLeft: 30 }}
            >
              <MaterialIcons
                name="done"
                size={24}
                color="black"
                style={{ alignSelf: 'center' }}
              />
              <Text style={styles.progress}>Delivered</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  firstButton: {
    backgroundColor: '#4e8beb',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10
  },
  secondButton: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginLeft: 20
  },
  navigate: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  progress: {
    fontWeight: 'bold',
    fontSize: 15
  }
});

//make this component available to the app
export default ProgressSetting;
