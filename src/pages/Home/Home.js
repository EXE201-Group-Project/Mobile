import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  Modal,
  ActivityIndicator
} from 'react-native';
import BottomSheetHome from '../../components/bottomsheet/BottomSheet';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import { GOOGLE_MAP_API_KEY } from '@env';
import DirectionInfo from '../../components/bottomsheet/Direction/DirectionInfo';
import RouteOnline from '../../components/bottomsheet/Direction/RouteOnline';

const Home = ({ navigation }) => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showOptimize, setShowOptimize] = useState();
  const [mod, setMod] = useState(true);
  const [started, setStared] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleOptimizePress = () => {
    setLoading(true);

    // Simulate a 3-second loading time
    setTimeout(() => {
      setLoading(false);
      setMod(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {showDrawer && (
          <Pressable
            style={[
              styles.navigationBtn,
              styles.shadowBoxAndroid,
              styles.shadowBoxIOS
            ]}
            onPress={() => {
              navigation.openDrawer();
              console.log(GOOGLE_MAP_API_KEY);
            }}
          >
            <Icon name="menu-outline" size={26} />
          </Pressable>
        )}
        <MapView
          style={{ width: '100%', height: '100%' }}
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
            coordinates={[
              { latitude: 37.8025259, longitude: -122.4351431 },
              { latitude: 37.7896386, longitude: -122.421646 },
              { latitude: 37.7665248, longitude: -122.4161628 },
              { latitude: 37.7734153, longitude: -122.4577787 },
              { latitude: 37.7948605, longitude: -122.4596065 },
              { latitude: 37.8025259, longitude: -122.4351431 }
            ]}
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

      <BottomSheetHome
        setShowOptimize={setShowOptimize}
        setShowDrawer={setShowDrawer}
        setMod={setMod}
        started={started}
        setStared={setStared}
        mod={mod}
      />

      {showOptimize && mod === true && (
        <View
          style={{ backgroundColor: 'white', width: '100%', paddingBottom: 40 }}
        >
          <TouchableOpacity
            style={styles.bottomButton}
            // onPress={() => {
            //   // Handle button press
            //   setMod(false);
            // }}
            onPress={handleOptimizePress}
          >
            <Text style={styles.bottomButtonText}>Optimize route</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        visible={loading}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#4285F4" />
            <Text>Loading...</Text>
          </View>
        </View>
      </Modal>

      {/* {mod === null &&(
          <DirectionInfo setMod={setMod}/>
        )} */}

      {/* {mod === false && (
          <RouteOnline setMod={setMod} started={started} setStared={setStared}/>
        )} */}
    </View>
  );
};

// define your styles
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
  },
  bottomButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '95%'
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center'
  }
});

export default Home;
