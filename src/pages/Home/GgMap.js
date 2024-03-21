import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useSelector } from 'react-redux';
import customMarker from '../../../assets/icons/marker_96.png';

export default function GgMap({ navigation, isShowMenu }) {
  const mapRef = useRef(null);
  const polyline = useSelector((state) => state.place.polyline);
  const places = useSelector((state) => state.place.places);
  // const menuNavStyles = isShowMenu
  //   ? [styles.navigationBtn, styles.shadowBoxAndroid, styles.shadowBoxIOS]
  //   : { display: 'none' };

  const polyColors = [
    '#007bff', //Blue
    '#28a745', //Green
    '#fd7e14', //Orange
    '#dc3545', //Red
    '#00bcd4', //Cyan
    '#ffc107', //Amber
    '#6f42c1', //Purple
    '#e83e8c', //Pink
    '#ffc107', //Yellow
    '#20c997', //Teal
    '#6610f2', //Indigo
    '#17a2b8', //Light Blue
    '#4caf50', //Light Green
    '#ff5722', //Deep Orange
    '#673ab7', //Deep Purple
    '#cddc39', //Lime
    '#795548', //Brown
    '#adb5bd', //Grey
    '#f8f9fa', //Light Grey
    '#343a40' //Black
  ];

  useEffect(() => {
    if (!places || places.length === 0 || !mapRef.current) return;

    // Calculate bounds
    let minLat = Infinity,
      maxLat = -Infinity;
    let minLng = Infinity,
      maxLng = -Infinity;

    places.forEach((place) => {
      const {
        location: {
          latlng: { latitude, longitude }
        }
      } = place;

      minLat = Math.min(minLat, latitude);
      maxLat = Math.max(maxLat, latitude);
      minLng = Math.min(minLng, longitude);
      maxLng = Math.max(maxLng, longitude);
    });

    // Calculate center and delta
    const latDelta = maxLat - minLat;
    const lngDelta = maxLng - minLng;
    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
    const region = {
      latitude: centerLat,
      longitude: centerLng,
      latitudeDelta: latDelta * 1.5, // Adjust the multiplier for desired zoom level
      longitudeDelta: lngDelta * 1.5 // Adjust the multiplier for desired zoom level
    };

    // Set map region
    mapRef.current.animateToRegion(region, 1000); // 1000ms duration for animation
  }, [places]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: 16.16666666,
          longitude: 107.83333333,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8
        }}
        showsCompass={false}
      >
        {places
          ? places.map((place, index) => {
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
                >
                  <View>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontSize: 13,
                        paddingTop: 7,
                        paddingLeft: 3,
                        width: 45
                        // backgroundColor: 'red'
                      }}
                    >
                      {index + 1}
                    </Text>
                  </View>
                </Marker>
              );
            })
          : ''}
        {polyline.length > 0
          ? polyline.map((trip, index) => (
              <Polyline
                coordinates={trip}
                strokeColor={polyColors[index]} // fallback for when `strokeColors` is not supported by the map-provider
                strokeWidth={6}
              />
            ))
          : ''}
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
