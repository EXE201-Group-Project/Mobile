import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import customMarker from '../../../assets/icons/marker_96.png';

export default function GgMap({ navigation, isShowMenu }) {
  const polyline = useSelector((state) => state.place.polyline);
  const places = useSelector((state) => state.place.places);
  const menuNavStyles = isShowMenu
    ? [styles.navigationBtn, styles.shadowBoxAndroid, styles.shadowBoxIOS]
    : { display: 'none' };

  return (
    <View style={styles.container}>
      <Pressable
        style={menuNavStyles}
        onPress={() => {
          navigation.openDrawer();
        }}
      >
        <Icon name="menu-outline" size={26} />
      </Pressable>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 16.16666666,
          longitude: 107.83333333,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8
        }}
        showsCompass={false}
      >
        {places
          ? places.map((place) => {
              const {
                location: {
                  latlng: { latitude, longitude }
                }
              } = place;
              const { description, place_id } = place;
              return (
                <Marker
                  coordinate={{
                    latitude: latitude,
                    longitude: longitude
                  }}
                  title={place_id ? place_id : description}
                  description={description}
                  icon={customMarker}
                  style={{
                    width: 20,
                    height: 20
                  }}
                />
              );
            })
          : ''}

        <Polyline
          coordinates={polyline}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000'
          ]}
          strokeWidth={6}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: '100%',
    height: '100%'
  },
  navigationBtn: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    zIndex: 100,
    top: 25,
    left: 16
  },
  shadowBoxAndroid: {
    elevation: 5
  },
  shadowBoxIOS: {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});
