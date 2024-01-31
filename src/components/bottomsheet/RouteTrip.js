//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Screen } from '../../navigator/Screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  SimpleLineIcons
} from '@expo/vector-icons';

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
  const navigation = useNavigation();
  const places = useSelector((state) => state.place.places);

  return (
    <View>
      {
        <View>
          <View style={{ marginLeft: 15, marginVertical: 10 }}>
            <Text
              onPress={() => {
                console.log(places);
                console.log('do dài ', places.length);
              }}
            >
              {places.length} điểm dừng
            </Text>
          </View>
          <View style={{ marginLeft: 15, marginBottom: 15 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
              Chuyến đi đầu tiên của tôi
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
              <Text style={{ marginLeft: 5 }}>Khởi hành phương tiện</Text>
            </TouchableOpacity>
          </View>

          <View style={{ borderWidth: 1, borderColor: '#f6f6f6' }}></View>
        </View>
      }

      {places.length > 0 ? (
        places.map((item) => {
          return (
            <TripItem
              key={item.index}
              index={item.index + 1}
              //Mot so vi tri khong co title
              title={item.name ? item.name : item.formatted}
              subtitle={item.formatted}
              isActive={true}
            />
          );
        })
      ) : (
        <TripItem
          navigation={navigation}
          index={<SimpleLineIcons name="question" size={24} />}
          title={'Chưa có địa điểm'}
          subtitle={'Hãy thử thêm mới nhé!'}
          isActive={true}
        />
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
  }
});
//#4e8beb - active icon color
//'gray' - inactive icon color

//make this component available to the app
export default RouteTrip;
