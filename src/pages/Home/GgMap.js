import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

export default function GgMap({ navigation, isShowMenu }) {
  const polyline = useSelector((state) => state.place.polyline);
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
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsCompass={false}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
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
