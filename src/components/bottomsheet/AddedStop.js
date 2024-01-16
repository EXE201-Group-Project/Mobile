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
  TouchableHighlight
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import InputSpinner from 'react-native-input-spinner';
import SwitchSelector from 'react-native-switch-selector';
import {
  BottomSheetScrollView,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';
import PackFinderBottom from './PackageFinderBottom';
import ArrivalTimeBottom from './ArrivalTimeBottom';
import TimeStopBottom from './TimeStopBottom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../navigator/Screen';

// create a component
const AddedStop = ({selectedItem, setSelectedItem}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { id, name, details } = selectedItem;
  const [ID, setID] = id;
  // console.log("ID", ID)
  const [number, setNumber] = useState(1);
  const [packages, setPackage] = useState('');
  const [packages1, setPackage1] = useState('');
  const [changed, setChange] = useState(0);
  // console.log("Changed", changed)
  const [remove, setRemove] = useState(0);
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
          setSelectedItem: setSelectedItem,
          setID: setID,
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

  // useEffect(() => {
  //   // Load saved value from AsyncStorage when the component mounts
  //   retrieveSelectedValue();
  // }, []);

  // useEffect(() => {
  //   // Run retrieveSelectedValue whenever the selectedValue changes
  //   retrieveSelectedValue();
  // }, [packages]);
  

  // const retrieveSelectedValue = async () => {
  //   try {
  //     // Retrieve the selected value from AsyncStorage
  //     const value = await AsyncStorage.getItem('selectedValuess');
  //     if (value !== null) {
  //       // Set the retrieved value to the state
  //       setPackage(value);
  //       console.log('Retrieved selected value:', value);
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving selected value:', error);
  //   }
  // };

  // useEffect(() => {
  //   const retrieveSelectedValue = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('selectedValuess');
  //       if (value !== null) {
  //         setPackage(value);
  //         console.log('Retrieved selected value:', value);
  //       }
  //     } catch (error) {
  //       console.error('Error retrieving selected value:', error);
  //     }
  //   };

  //   retrieveSelectedValue();
  // }, [change]);

  // useEffect(() => {
  //   const retrieveSelectedValue = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('selectedValuess');
  //       if (value !== null) {
  //         setPackage(value);
  //         console.log('Retrieved selected value:', value);
  //       }
  //     } catch (error) {
  //       console.error('Error retrieving selected value:', error);
  //     }
  //   };

  //   retrieveSelectedValue();
  // }, [packages]);

  useEffect(() => {
    const retrieveSelectedValue = async () => {
      try {
        const key = `${ID}_packages`;
        const value = await AsyncStorage.getItem(key);

          setPackage(value);
          // console.log('Retrieved selected value:', value);

      } catch (error) {
        console.error('Error retrieving selected value:', error);
      }
    };
  
    retrieveSelectedValue();
  }, [changed, ID]);

  useEffect(() => {
    const retrieveSelectedValue1 = async () => {
      try {
        const key = `${ID}_packages1`;
        const value = await AsyncStorage.getItem(key);

          setPackage1(value);
          // console.log('Retrieved selected value:', value);

      } catch (error) {
        console.error('Error retrieving selected value:', error);
      }
    };
  
    retrieveSelectedValue1();
  }, [changed, ID]);

  useEffect(() => {
    setPackage(null);
    setPackage1(null);
  },[remove])

  

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetScrollView>
          <View
            style={{
              backgroundColor: '#d4f4dc',
              padding: 5,
              width: '20%',
              marginTop: 15,
              marginLeft: 15,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              borderRadius: 7
            }}
          >
            <View>
              <AntDesign name="checkcircle" size={20} color="#196c2e" />
            </View>
            <View>
              <Text style={{ color: '#196c2e' }}>Added</Text>
            </View>
          </View>

          <View style={{ marginLeft: 15, marginTop: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
              {name}
            </Text>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 20 }}>{details}</Text>
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
                <Text style={{ fontSize: 20 }}>{packages}{packages1}</Text>
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
                          color={item.key === 'Remove stop' ? '#a93946' : 'black'}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: item.key === 'Remove stop' ? '#a93946' : 'black'
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
          <PackFinderBottom bottomSheetModalRef={bottomSheetModalRef} setChange={setChange} setRemove={setRemove} packages={packages} packages1={packages1} id={id}/>
          <ArrivalTimeBottom bottomSheetModalRef1={bottomSheetModalRef1}/>
          <TimeStopBottom bottomSheetModalRef2={bottomSheetModalRef2}/>
          <View style={{ marginTop: 200 }}></View>
        </BottomSheetScrollView>
      </View>
      
      <View style={styles.containers}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {setModalVisible(!isModalVisible)}}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>This is your popup content</Text>
            <TouchableHighlight onPress={() => {setSelectedItem(null)}}>
              <Text>Remove stop</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => {setModalVisible(!isModalVisible)}}>
              <Text>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
    </BottomSheetModalProvider>
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
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});

//make this component available to the app
export default AddedStop;
