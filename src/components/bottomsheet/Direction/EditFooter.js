//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Screen } from '../../../navigator/Screen';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


// create a component
const EditFooter = ({ data, currentIndex }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const datas = [
    { key: 'Edit stop', icon: 'enviroment' },
    { key: 'Duplicate stop', icon: 'logout' },
    { key: 'Remove stop', icon: 'delete' }
  ];

  const handlePress = (key) => {
    switch (key) {
      case 'Edit stop':
        // Implement logic for 'Change address'
        navigation.navigate(Screen.EditStop, {});
        break;
      case 'Duplicate stop':
        // Implement logic for 'Duplicate stop'
        break;
      case 'Remove stop':
        // Implement logic for 'Remove stop'
        setModalVisible(!isModalVisible);

        break;
      default:
        // Default case
        break;
    }
  };

  return (
    <View style={{ backgroundColor: 'white' }}>
      {currentIndex === data.length - 1 ? (
        <TouchableOpacity onPress={{}}>
          <View style={styles.bottom}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View>
                <MaterialIcons name="edit" size={34} color="black" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight:"bold"
                  }}
                >
                  Edit end location
                </Text>
              </View>
            </View>

            <Icon name="chevron-right" size={24} color="gray" />
          </View>
        </TouchableOpacity>
      ) : (
        <>
          <FlatList
            data={datas}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handlePress(item.key)}>
                <View style={styles.bottom}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                      <AntDesign
                        name={item.icon}
                        size={34}
                        color={item.key === 'Remove stop' ? '#a93946' : 'black'}
                      />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight:"bold",
                          color:
                            item.key === 'Remove stop' ? '#a93946' : 'black'
                        }}
                      >
                        {item.key}
                      </Text>
                    </View>
                  </View>

                  <Icon name="chevron-right" size={24} color="gray" />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.key}
          />
        </>
      )}

      <View style={styles.containers}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                Remove stop
              </Text>
              <Text style={{ fontSize: 20, marginBottom: 10 }}>
                This stop will be removed from your route during the next
                optimization
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'orange',
                  width: '97%',
                  height: 40,
                  borderRadius: 6,
                  marginBottom: 10
                }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    lineHeight: 40,
                    color: 'white',
                    fontSize: 20
                  }}
                >
                  Remove stop
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!isModalVisible);
                }}
              >
                <Text style={{ fontSize: 20 }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 5
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
    width: '80%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

//make this component available to the app
export default EditFooter;
