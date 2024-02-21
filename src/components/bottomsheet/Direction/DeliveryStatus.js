//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// create a component
const DeliveryStatus = ({ status, setStatus }) => {
  return (
    <View>
      {status !== null && (
        <View style={styles.container}>
          <View style={styles.status}>
            {status === true ? (
              <Ionicons
                name="checkmark-circle"
                size={50}
                color="green"
                style={{ marginLeft: 15 }}
              />
            ) : status === false ? (
              <Entypo
                name="circle-with-cross"
                size={50}
                color="red"
                style={{ marginLeft: 15 }}
              />
            ) : (
                <View></View>
            )}

            <TouchableOpacity
              onPress={() => setStatus(null)}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <MaterialIcons name="undo" size={24} color="blue" />
              <Text style={styles.undo}> Undo</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 15 }}>
            {status ? (
              <Text style={styles.text}>Marked as deliveried</Text>
            ) : (
              <Text style={styles.text}>Marked as failed</Text>
            )}
            <Text>1:00 PM</Text>
          </View>
        </View>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cfcaca',
    borderRadius: 8,
    paddingVertical: 15,
    marginTop: 20
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  undo: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 17,
    marginRight: 15
  },
  iconStatus: {
    color: 'blue'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25
  }
});

//make this component available to the app
export default DeliveryStatus;
