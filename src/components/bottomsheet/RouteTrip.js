//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { Feather } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../navigator/Screen';

// create a component
const RouteTrip = () => {
  const navigation = useNavigation();
  const [fake, setFakeData] = useState();
  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages'
      );
      const datas = await apiResponse.json();
      const data = JSON.stringify(datas);
      const { id } = data;
      setFakeData(id);
    };
    getData();
  }, []);
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
          <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                alignSelf: 'flex-start',
                borderRadius: 10,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10
              }}
            >
              <Feather name="truck" size={24} color="#4e8beb" />
              <Text style={{ marginLeft: 5 }}>Load vehicle</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }
      {
        <View>
          <TouchableOpacity
            style={{
              height: 80,
              justifyContent: 'center' // Center vertically
            }}
            onPress={() => {
              navigation.navigate(Screen.RouteSetting);
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
                <MaterialIcons
                  name="free-breakfast"
                  size={24}
                  color="gray"
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    No break
                  </Text>
                  <Text style={{ fontSize: 17 }}>Tap to plan a break</Text>
                </View>
              </View>
              <View>
                <Icon name="chevron-right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }

      {
        <View>
          <TouchableOpacity
            style={{
              height: 80,
              justifyContent: 'center' // Center vertically
            }}
            onPress={() => {
              navigation.navigate(Screen.RouteSetting);
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
                <MaterialCommunityIcons
                  name="home-variant"
                  size={24}
                  color="#4e8beb"
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Start from current location
                  </Text>
                  <Text style={{ fontSize: 17 }}>
                    Use GPS position when optimizing
                  </Text>
                </View>
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
              height: 80,
              justifyContent: 'center' // Center vertically
            }}
            onPress={() => {
              navigation.navigate(Screen.RouteSetting);
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
                <MaterialCommunityIcons
                  name="flag-variant"
                  size={24}
                  color="#4e8beb"
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    No end location
                  </Text>
                  <Text style={{ fontSize: 17 }}>
                    Tap to set end location and time
                  </Text>
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
  }
});

//make this component available to the app
export default RouteTrip;
