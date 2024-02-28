//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { GlobalStyle } from '../../theme/GlobalStyle';
import { Screen } from '../../navigator/Screen';
import { useNavigation } from '@react-navigation/native';

// create a component
const RouteEnd = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const searchEndAddress = () => {
    navigation.navigate(Screen.SearchStartEndAddress);
    setModalVisible(false);
  };

  const ModalButton = ({ icon, title, subtitle, onPress }) => (
    <TouchableOpacity
      style={{
        height: 80,
        justifyContent: 'center' // Center vertically
      }}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {icon}
          <View>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{title}</Text>
            <Text style={{ fontSize: 17 }}>{subtitle}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.routeEnd}>Route end</Text>
      <Text style={{ fontSize: 18 }}>Where do you end your route?</Text>
      {
        <View>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <View style={styles.buttonContainer}>
              <View style={[GlobalStyle.horizontal, GlobalStyle.AlignItem]}>
                <MaterialCommunityIcons
                  name="flag-variant"
                  size={24}
                  color="gray"
                  style={{ marginRight: 20 }}
                />
                <Text>No end location</Text>
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
          <TouchableOpacity style={styles.button}>
            <View style={styles.endTime}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesign
                  name="clockcircleo"
                  size={24}
                  color="black"
                  style={{ marginRight: 20 }}
                />
                <Text>Set end time</Text>
              </View>
              <View>
                <Icon name="chevron-right" size={20} color="gray" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
      <View style={styles.containers}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View style={styles.modalContent}>
                  {/* Your modal content goes here */}
                  <ModalButton
                    icon={
                      <Fontisto
                        name="arrow-return-left"
                        size={24}
                        color="#4e8beb"
                        style={{ marginRight: 20 }}
                      />
                    }
                    title="Return to start"
                    subtitle="RoundTrip (recommended)"
                    onPress={{}}
                  />
                  <ModalButton
                    icon={
                      <FontAwesome5
                        name="map-marker-alt"
                        size={24}
                        color="#4e8beb"
                        style={{ marginRight: 20 }}
                      />
                    }
                    title="End at other address"
                    subtitle="Enter any address"
                    onPress={searchEndAddress}
                  />
                  <ModalButton
                    icon={
                      <MaterialIcons
                        name="cancel"
                        size={24}
                        color="#4e8beb"
                        style={{ marginRight: 20 }}
                      />
                    }
                    title="Don't use end location"
                    subtitle="Not recommended for couriers"
                    onPress={() => navigation.navigate(Screen.RouteSetting)}
                  />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  containers: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
    elevation: 5,
    width: '90%',
    height: '40%',
    justifyContent: 'center'
  },
  routeEnd: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 40
  },
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 60,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center' // Center vertically
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  },
  endTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20
  }
});

//make this component available to the app
export default RouteEnd;
