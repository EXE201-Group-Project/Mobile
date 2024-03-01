//import liraries
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable
} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons
} from '@expo/vector-icons';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import {
  clearPlaces,
  clearPolylines,
  updatePolyline
} from '../../redux/slice/placeSlice';
import decodePolyline from '../../pages/Home/DecodePolyline';

const TripItem = ({ navigation, index, title, subtitle, isActive }) => {
  const iconColor = isActive ? '#4e8beb' : 'gray';

  return (
    <View>
      <TouchableOpacity
        style={{
          minHeight: 80,
          justifyContent: 'center',
          paddingVertical: 10
        }}
        // Adjust more about detail trip info
        // onPress={() => {
        //   navigation.navigate(Screen.RouteSetting);
        // }}
      >
        <View style={styles.tripItemContainer}>
          <View style={[styles.horizontalCenter, { flex: 0.9 }]}>
            <Text style={[styles.indexItem, { color: iconColor }]}>
              {index}
            </Text>
            <View>
              <Text style={styles.itemTitle}>{title}</Text>
              <Text style={styles.itemSubtitle}>{subtitle}</Text>
            </View>
          </View>
          <View>
            <Icon name="chevron-right" size={20} color="gray" />
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
    </View>
  );
};

// create a component
const RouteTrip = () => {
  //Select type of vehicle | xe 2 banh - true | xe 4 banh - false
  const [isTwoWheels, setIsTwoWheels] = useState(true);
  const places = useSelector((state) => state.place.places);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const theme = [
    //selected
    {
      bgColor: '#4E8BEB',
      iconColor: '#ffffff',
      textColor: '#ffffff'
    },
    //unSelect
    {
      bgColor: '#ffffff',
      iconColor: '#4E8BEB',
      textColor: '#000000'
    }
  ];

  const twoWheelsTheme = isTwoWheels ? theme[0] : theme[1];
  const carTheme = !isTwoWheels ? theme[0] : theme[1];

  const fetchRoutes = async () => {
    const polylines = [];
    const formatPlaces = places.map(({ index, ...rest }) => rest);

    try {
      const res = await fetch(
        'http://35.187.149.47/api/Route?travelMode=TWO_WHEELER&routingPreference=TRAFFIC_AWARE&avoidHighways=true&avoidTolls=true&avoidFerries=true',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formatPlaces)
        }
      );
      const result = await res.json();
      if (result) {
        result.map((item) => {
          const encoded = item.routes.routes[0].polyline.encodedPolyline;
          const decoded = decodePolyline(encoded);
          console.log('Decode hereeeeee ', decoded);
          polylines.push(decoded);
        });
        dispatch(updatePolyline({ polyline: polylines }));
      }
      console.log('hehe', JSON.stringify(result));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 10 }}>
      {
        <View style={{ flex: 2 }}>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text
              onPress={() => {
                console.log(places);
                console.log('do dài ', places.length);
              }}
            >
              {places.length} điểm dừng
            </Text>
            {places.length > 0 ? (
              <Pressable
                onPress={() => {
                  dispatch(clearPlaces());
                  dispatch(clearPolylines());
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#808080',
                    textDecorationLine: 'underline'
                  }}
                >
                  Xóa chuyến
                </Text>
              </Pressable>
            ) : (
              ''
            )}
          </View>

          <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Chuyến đi đầu tiên của tôi
            </Text>
          </View>
          <View
            style={{ marginLeft: 15, marginBottom: 15, flexDirection: 'row' }}
          >
            <TouchableOpacity
              style={[
                styles.vehicleOpt,
                { backgroundColor: twoWheelsTheme.bgColor, marginRight: 12 }
              ]}
              onPress={() => setIsTwoWheels(true)}
            >
              <MaterialCommunityIcons
                name="motorbike"
                size={24}
                color={twoWheelsTheme.iconColor}
              />
              <Text style={{ marginLeft: 5, color: twoWheelsTheme.textColor }}>
                Xe máy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.vehicleOpt, { backgroundColor: carTheme.bgColor }]}
              onPress={() => setIsTwoWheels(false)}
            >
              <Feather name="truck" size={24} color={carTheme.iconColor} />
              <Text style={{ marginLeft: 5, color: carTheme.textColor }}>
                Xe ô tô
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }

      {places.length > 0 ? (
        <View style={{ flex: 8 }}>
          <View style={{ flex: 2 }}>
            <BottomSheetScrollView>
              {places.map((item) => {
                return (
                  <TripItem
                    key={item.index}
                    index={item.index + 1}
                    //Mot so vi tri khong co title
                    title={item.place_id ? item.place_id : item.description}
                    subtitle={item.description}
                    isActive={true}
                  />
                );
              })}
            </BottomSheetScrollView>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingTop: 10
            }}
          >
            <Button
              icon="cached"
              mode="contained"
              buttonColor={'#43A9EB'}
              onPress={() => {
                fetchRoutes();
              }}
              style={{ borderRadius: 5, width: '80%' }}
            >
              Tối ưu hóa đường đi
            </Button>
          </View>
        </View>
      ) : (
        <View style={{ flex: 8 }}>
          <TripItem
            navigation={navigation}
            index={<SimpleLineIcons name="question" size={24} />}
            title={'Chưa có địa điểm'}
            subtitle={'Hãy thử thêm mới nhé!'}
            isActive={true}
          />
        </View>
      )}

      {/* ----------- TINH NANG AN ------------------------- */}
      {/* 
      <TripItem
        navigation={navigation}
        title={'No break'}
        subtitle={'Tap to plan a break'}
        isActive={false}
      />
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
              <View style={styles.horizontalCenter}>
                <MaterialCommunityIcons
                  name="home-variant"
                  size={24}
                  color="#4e8beb"
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={styles.itemTitle}>
                    Start from current location
                  </Text>
                  <Text style={styles.itemSubtitle}>
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
              <View style={styles.horizontalCenter}>
                <MaterialCommunityIcons
                  name="flag-variant"
                  size={24}
                  color="#4e8beb"
                  style={{ marginRight: 20 }}
                />
                <View>
                  <Text style={styles.itemTitle}>No end location</Text>
                  <Text style={styles.itemSubtitle}>
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
      } */}
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
  horizontalCenter: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tripItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 20
  },
  itemSubtitle: {
    fontSize: 17
  },
  indexItem: {
    marginRight: 20,
    fontSize: 19,
    fontWeight: 700
  },
  vehicleOpt: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10
  }
});
//#4e8beb - active icon color
//'gray' - inactive icon color

//make this component available to the app
export default RouteTrip;
