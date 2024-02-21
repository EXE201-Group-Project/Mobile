//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../../navigator/Screen';
import RouteComponent from './RouteComponent';
import { Entypo } from '@expo/vector-icons';

// create a component
const RouteTrip = () => {
  const navigation = useNavigation();
  const [fake, setFakeData] = useState();
  console.log('trip');
  // console.log(fake)
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages'
      );
      const datas = await apiResponse.json();
      const data = JSON.stringify(datas);
      const { id } = data;
      console.log('id', id);
      setFakeData(id);
    };
    getData();
  }, []);

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
    <View>
      {
        <View>
          <View style={{ marginLeft: 15, marginVertical: 10 }}>
            <Text style={{}}>0 stops</Text>
          </View>
          <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              My first route
            </Text>
          </View>
          {/* <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <TouchableOpacity
              style={styles.loadVehicle}
            >
              <Feather name="truck" size={24} color="#4e8beb" />
              <Text style={{ marginLeft: 5 }}>Load vehicle</Text>
            </TouchableOpacity>
          </View> */}

          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }

      <RouteComponent settingsDataStart={settingsDataStart} />
      <RouteComponent settingsDataEnd={settingsDataEnd} />
      <RouteComponent settingsDataBreak={settingsDataBreak} />
      {
        <View>
          <TouchableOpacity
            style={{
              height: 80,
              justifyContent: 'center' // Center vertically
            }}
            onPress={() => {
              navigation.navigate(Screen.EditStop);
            }}
          >
            <View style={styles.settings}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginRight: 20 }}>
                  <Entypo name="dot-single" size={24} color="#4e8beb" />
                </View>
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Address name
                  </Text>
                  <Text style={{ fontSize: 17 }}>Address description</Text>
                </View>
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
  }
});

//make this component available to the app
export default RouteTrip;
