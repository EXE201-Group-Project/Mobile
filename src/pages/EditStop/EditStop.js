//import liraries
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';
import SwitchSelector from 'react-native-switch-selector';
import PackFinderBottom from '../../components/bottomsheet/PackageFinderBottom';
import ArrivalTimeBottom from '../../components/bottomsheet/ArrivalTimeBottom';
import TimeStopBottom from '../../components/bottomsheet/TimeStopBottom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../navigator/Screen';
import {
  BottomSheetScrollView,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import Icon from 'react-native-vector-icons/FontAwesome';

// create a component
const EditStop = ({ selectedItem, setSelectedItem }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const [number, setNumber] = useState(1);
  const [edit, setEdit] = useState(true);
  const bottomSheetModalRef = useRef(null);
  const bottomSheetModalRef1 = useRef(null);
  const bottomSheetModalRef2 = useRef(null);

  function handlePresentPackageFinder() {
    bottomSheetModalRef.current?.present();
  }

  function handlePresentArrivalTime() {
    bottomSheetModalRef1.current?.present();
  }

  function handlePresentTimeStop() {
    bottomSheetModalRef2.current?.present();
  }

  const option1 = [
    { label: 'First', value: 'first' },
    { label: 'Auto', value: 'auto' },
    { label: 'Last', value: 'last' }
  ];

  const option2 = [
    { id: 1, label: 'Delivery', value: 'delivery' },
    { id: 2, label: 'Pickup', value: 'pickup' }
  ];

  const [selectedValue, setSelectedValue] = useState(option2[0].value);

  const datas = [
    { key: 'Change address', icon: 'enviroment' },
    { key: 'Duplicate stop', icon: 'logout' },
    { key: 'Remove stop', icon: 'delete' }
  ];

  const handlePress = (key) => {
    switch (key) {
      case 'Change address':
        // Implement logic for 'Change address'
        navigation.navigate(Screen.SearchChangeAddress, {
          setSelectedItem: setSelectedItem
        });
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
    <View>
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              padding: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>
                Done
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginLeft: 15, marginTop: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>abcc</Text>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20 }}>abc</Text>
          </View>
          <View
            style={{
              borderRadius: 5,
              borderColor: '#f5f5f5',
              borderTopWidth: 2,
              borderBottomWidth: 2,
              height: 50,
              marginTop: 10,
              justifyContent: 'center'
            }}
          >
            <TextInput
              style={{ fontSize: 20, marginLeft: 15 }}
              placeholder="Add notes (recipient, instructions, etc...)"
            />
          </View>
          <TouchableOpacity onPress={handlePresentPackageFinder}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15
                }}
              >
                <View>
                  <Feather name="package" size={34} color="black" />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Package finder</Text>
                </View>
              </View>
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 20 }}>abc</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15
              }}
            >
              <View>
                <MaterialCommunityIcons
                  name="package-variant-closed"
                  size={34}
                  color="black"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Packages</Text>
              </View>
            </View>
            <View
              style={{
                marginRight: 10,
                borderWidth: 1,
                borderColor: 'gray',
                borderRadius: 5,
                overflow: 'hidden'
              }}
            >
              <InputSpinner
                buttonStyle={{ backgroundColor: 'white' }}
                // showBorder = {true}
                rounded={false}
                textColor="blue"
                buttonTextColor={'gray'}
                max={10}
                min={1}
                step={1}
                // colorMax={"gray"}
                // colorMin={"gray"}
                width={120}
                height={40}
                value={number}
                onChange={(num) => {
                  setNumber(num);
                  console.log(num);
                }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15
              }}
            >
              <View>
                <Octicons name="list-ordered" size={34} color="black" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Order</Text>
              </View>
            </View>
            <View
              style={{
                marginRight: 10,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
                borderWidth={4}
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option1}
                initial={0}
                onPress={(value) =>
                  console.log(`Call onPress with value: ${value}`)
                }
                style={{ width: 160, height: 40 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 15
              }}
            >
              <View>
                <Octicons name="list-ordered" size={34} color="black" />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>Type</Text>
              </View>
            </View>
            <View
              style={{
                marginRight: 10,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
                borderWidth={4}
                textColor={'gray'}
                borderColor={'gray'}
                // selectedColor={option2[0].value === 'pickup' ? 'black' : 'blue'}
                // buttonColor={option2[0].value === 'pickup' ? 'violet' : 'yellow'}
                borderRadius={10}
                options={option2}
                initial={0}
                onPress={(value) => {
                  console.log(`Call onPress with value: ${value}`);
                  setSelectedValue(value);
                }}
                style={{ width: 160, height: 40 }}
                selectedColor={selectedValue === 'pickup' ? '#9741d5' : 'blue'}
                buttonColor={selectedValue === 'pickup' ? '#f8f1ff' : '#ecf4ff'}
              />
            </View>
          </View>
          <TouchableOpacity onPress={handlePresentArrivalTime}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15
                }}
              >
                <View>
                  <AntDesign name="antdesign" size={34} color="black" />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Arrival time</Text>
                </View>
              </View>
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 20 }}>abc</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePresentTimeStop}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: 15
                }}
              >
                <View>
                  <AntDesign name="clockcircleo" size={34} color="black" />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 20 }}>Time at stop</Text>
                </View>
              </View>
              <View style={{ marginRight: 10 }}>
                <Text style={{ fontSize: 20 }}>abc</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ backgroundColor: 'white', marginTop: 30 }}>
            <FlatList
              data={datas}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handlePress(item.key)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 10,
                      paddingHorizontal: 15,
                      paddingVertical: 5
                    }}
                  >
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <View>
                        <AntDesign
                          name={item.icon}
                          size={34}
                          color={
                            item.key === 'Remove stop' ? '#a93946' : 'black'
                          }
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            color:
                              item.key === 'Remove stop' ? '#a93946' : 'black'
                          }}
                        >
                          {item.key}
                        </Text>
                      </View>
                    </View>

                    <AntDesign name="right" size={24} color={'black'} />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key}
            />
          </View>

          {/* <View style={{ marginTop: 2 }}></View> */}
        </ScrollView>
      </View>
      <BottomSheetModalProvider>
        <PackFinderBottom
          bottomSheetModalRef={bottomSheetModalRef}
          edit={edit}
        />
        <ArrivalTimeBottom
          bottomSheetModalRef1={bottomSheetModalRef1}
          edit={edit}
        />
        <TimeStopBottom
          bottomSheetModalRef2={bottomSheetModalRef2}
          edit={edit}
        />
      </BottomSheetModalProvider>

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
                onPress={() => {
                  setSelectedItem(null);
                }}
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
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
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
export default EditStop;
