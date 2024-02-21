//import liraries
import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../../navigator/Screen';
import RouteComponent from '../routeTrip/RouteComponent';
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

// create a component
const RouteOnline = ({ setMod, started, setStared }) => {
  const [status, setStatus] = useState(false);

  const settingsDataBreak = [
    {
      icon: (
        <MaterialIcons
          name="free-breakfast"
          size={24}
          color="gray"
          style={{ marginRight: 20 }}
        />
      ),
      title: 'No break',
      subtitle: 'Tap to plan a break'
    }
  ];

  const settingsDataStart = [
    {
      icon: (
        <MaterialCommunityIcons
          name="home-variant"
          size={24}
          color="#4e8beb"
          style={{ marginRight: 20 }}
        />
      ),
      title: 'Start from current location',
      subtitle: 'Use GPS position when optimizing'
    }
  ];

  const settingsDataEnd = [
    {
      icon: (
        <MaterialCommunityIcons
          name="flag-variant"
          size={24}
          color="#4e8beb"
          style={{ marginRight: 20 }}
        />
      ),
      title: 'No end location',
      subtitle: 'Tap to set end location and time'
    }
  ];

  return (
    // <BottomSheet
    //   index={1}
    //   snapPoints={snapPoints}
    //   // enablePanDownToClose={false}
    //   enableOverDrag={false}
    //   handleIndicatorStyle={{ backgroundColor: 'gray' }}
    // >
    <View>
      {
        <View>
          <View style={styles.information}>
            {started !== null && <Text>Finish 01:00 AM - </Text>}
            <Text style={{}}>1 stops - 12.5 km</Text>
          </View>
          <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              My first route
            </Text>
          </View>

          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }
      <RouteComponent settingsDataBreak={settingsDataBreak} />
      <RouteComponent started={started} settingsDataBreak={settingsDataStart} />
      {
        <View>
          <TouchableOpacity
            style={{
              height: 80,
              justifyContent: 'center' // Center vertically
            }}
            // onPress={() => {
            //   navigation.navigate(Screen.EditStop);
            // }}
            onPress={() => setMod(null)}
          >
            <View style={styles.settings}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 30, marginLeft: 7 }}>
                  <Text style={{ color: '#4e8beb' }}>1</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Address name
                  </Text>
                  <Text style={{ fontSize: 17 }}>Address description</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text>1:00 PM</Text>
                <Ionicons
                  name="checkmark-circle"
                  size={20}
                  color="green"
                  style={{ marginLeft: 15 }}
                />
                <Entypo
                  name="circle-with-cross"
                  size={20}
                  color="red"
                  style={{ marginLeft: 15 }}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
      <RouteComponent settingsDataEnd={settingsDataEnd} />
      {status === true && (
        
        <View>
        <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
          <View style={styles.complete}>
          <Ionicons
                name="checkmark-circle"
                size={25}
                color="green"
                style={{ marginLeft: 15 }}
              />
              <Text style={styles.textComplete}>Route completed!</Text>
          </View>
          <View style={styles.complete}>
            <Text>
              1 stops
            </Text>
            <Text> - </Text>
            <Text>
              1 missed
            </Text>
          </View>
          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      )}
      {started === null && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMod(null), setStared((preState) => preState + 1);
          }}
        >
          <Text style={styles.text}>start</Text>
        </TouchableOpacity>
      )}
      {started !== null && status === false && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setStatus(true);
          }}
        >
          <Text style={styles.text}>complete</Text>
        </TouchableOpacity>
      )}

      {status === true && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setMod(true), setStared(null), setStatus();
          }}
        >
          <Text style={styles.text}>Create new route</Text>
        </TouchableOpacity>
      )}
    </View>
    // </BottomSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  loadVehicle: {
    borderWidth: 1,
    borderColor: 'gray',
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#4e8beb',
    marginHorizontal: 15,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 7
  },
  text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold'
  },
  information: {
    marginLeft: 15,
    marginVertical: 10,
    flexDirection: 'row'
  },
  textComplete:{
    fontWeight:"bold",
    fontSize:20
  },
  complete:{ flexDirection:"row", alignItems: 'center', justifyContent:"center", paddingVertical: 5}
});

//make this component available to the app
export default RouteOnline;
