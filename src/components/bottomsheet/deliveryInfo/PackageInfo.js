//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './Header';


// create a component
const PackageInfo = ({setChange, packages, setRemove, packages1, id, mod, closeBottomSheet}) => {

    const [selectedValue, setSelectedValue] = useState(packages);
    const [selectedValue1, setSelectedValue1] = useState(packages1);
    const [key, setKey] = useState(0); // Add a key state
    
    // const [key1, setKey1]= useState(0);
    console.log("----------------------------------------------------")
    

    // console.log("key", key)

    const option = [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' }
      ];
      const option1 = [
        { label: 'Box', value: 'box' },
        { label: 'Bag', value: 'bag' },
        { label: 'Letter', value: 'letter' }
      ];
      const option2 = [
        { label: 'Front', value: 'front' },
        { label: 'Middle', value: 'middle' },
        { label: 'Back', value: 'back' }
      ];
      const option3 = [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' }
      ];
      const option4 = [
        { label: 'Floor', value: 'floor' },
        { label: 'Shelf', value: 'shelf' }
      ];

      const saveSelectedValue = async (value) => {
        try {
          // Save the selected value in AsyncStorage
          // await AsyncStorage.setItem('selectedValuess', value);
          const key = `${id}_packages`;
          await AsyncStorage.setItem(key, value);

          // console.log('Selected value saved successfully!');
        } catch (error) {
          console.error('Error saving selected value:', error);
        }
      };

      

      // const retrieveSelectedValue = async () => {
      //   try {
      //     // Retrieve the selected value from AsyncStorage
      //     const value = await AsyncStorage.getItem('selectedValuess');
      //     if (value !== null) {
      //       // Set the retrieved value to the state
      //       setSelectedValue(value);
      //       // console.log('Retrieved selected value:', value);
      //       switch (value) {
      //           case 'small':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           case 'medium':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           case 'large':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           default:
      //               setChange((prevKey) => prevKey + 1);
      //         }
      //       //   console.log(setChange)
      //     }
      //   } catch (error) {
      //     // console.error('Error retrieving selected value:', error);
      //   }
      // };

      const handleSwitchSelectorChange = (value) => {
        // Update the state and save the selected value when it changes
        setSelectedValue(value);
        saveSelectedValue(value);
        // console.log(`SwitchSelector value changed to: ${value}`);
        switch (value) {
          case 'small':
              setChange((prevKey) => prevKey + 1);
            break;
          case 'medium':
              setChange((prevKey) => prevKey + 1);
            break;
          case 'large':
              setChange((prevKey) => prevKey + 1);
            break;
          default:
              setChange((prevKey) => prevKey + 1);
        }
      };

      //-----------------------------------------------------------
      // useEffect(() => {
      //   // Load saved value from AsyncStorage when the component mounts
      //   retrieveSelectedValue1();
      // }, []);

      // useEffect(() => {
      //   // Run retrieveSelectedValue whenever the selectedValue changes
      //   retrieveSelectedValue1();
      // }, [selectedValue1]);
      

      const saveSelectedValue1 = async (value) => {
        try {
          // Save the selected value in AsyncStorage
          // await AsyncStorage.setItem('selectedValuess1', value);
          const key = `${id}_packages1`;
          await AsyncStorage.setItem(key, value);

          // console.log('Selected value saved successfully!');
        } catch (error) {
          console.error('Error saving selected value:', error);
        }
      };

      // const retrieveSelectedValue1 = async () => {
      //   try {
      //     // Retrieve the selected value from AsyncStorage
      //     const value = await AsyncStorage.getItem('selectedValuess1');
      //     if (value !== null) {
      //       // Set the retrieved value to the state
      //       setSelectedValue1(value);
      //       // console.log('Retrieved selected value:', value);
      //       switch (value) {
      //           case 'box':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           case 'bag':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           case 'letter':
      //               setChange((prevKey) => prevKey + 1);
      //             break;
      //           default:
      //               setChange((prevKey) => prevKey + 1);
      //         }
      //       //   console.log(setChange)
      //     }
      //   } catch (error) {
      //     // console.error('Error retrieving selected value:', error);
      //   }
      // };

      const handleSwitchSelectorChange1 = (value) => {
        // Update the state and save the selected value when it changes
        setSelectedValue1(value);
        saveSelectedValue1(value);
        // console.log(`SwitchSelector value changed to: ${value}`);
        switch (value) {
          case 'box':
              setChange((prevKey) => prevKey + 1);
            break;
          case 'bag':
              setChange((prevKey) => prevKey + 1);
            break;
          case 'letter':
              setChange((prevKey) => prevKey + 1);
            break;
          default:
              setChange((prevKey) => prevKey + 1);
        }
      };
      //----------------------------------------------------------

      const handleUndoSelection = async () => {
        try {
          // Remove the selected value from AsyncStorage
          const key = `${id}_packages`;
          const key1 = `${id}_packages1`;
          await AsyncStorage.removeItem(key);
          await AsyncStorage.removeItem(key1);
          setSelectedValue(null);
          setSelectedValue1(null);
          setKey((prevKey) => prevKey + 1);
          // setKey1((prevKey) => prevKey + 1)
          setRemove((prevKey) => prevKey + 1);
          // setRemove1((prevKey) => prevKey +1)
          console.log('Selection undone');
        } catch (error) {
          console.error('Error removing selected value:', error);
        }
      };
      

    return (

        <View style={styles.container}>
        <Header handleUndoSelection={handleUndoSelection} mod={mod} closeBottomSheet={closeBottomSheet}/>
            <View style={{marginVertical: 10, marginLeft: 15}}>
                <Text style={{fontSize: 15, fontWeight:"bold"}}>Pakage description</Text>
            </View>
            <View>
            <View
              style={{
                marginHorizontal: 15,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
              key={key}
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option}
                // initial={0}
                initial={option.findIndex((item) => item.value === selectedValue)}
                onPress={handleSwitchSelectorChange}
                style={{ height: 40 }}
                
              />
              {/* {console.log("test")} */}
              {/* {console.log(option.findIndex((item) => item.value === selectedValue))} */}
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
              key={key}
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option1}
                // initial={0}
                initial={option1.findIndex((item) => item.value === selectedValue1)}
                onPress={handleSwitchSelectorChange1}
                style={{ height: 40 }}
              />
              {/* {console.log("test")} */}
              {/* {console.log(option.findIndex((item) => item.value === selectedValue))} */}
            </View>
            <View style={{marginVertical: 10, marginLeft: 15}}>
              <Text style={{fontSize: 15, fontWeight:"bold"}}>Place in vehicle</Text>
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
              key={key}
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option2}
                // initial={0}
                initial={1}
                // onPress={handleSwitchSelectorChange1}
                style={{ height: 40 }}
              />
              {/* {console.log("test")} */}
              {/* {console.log(option.findIndex((item) => item.value === selectedValue))} */}
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
              key={key}
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option3}
                // initial={0}
                initial={1}
                // onPress={handleSwitchSelectorChange1}
                style={{ height: 40 }}
              />
              {/* {console.log("test")} */}
              {/* {console.log(option.findIndex((item) => item.value === selectedValue))} */}
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 15,
                borderRadius: 8,
                borderWidth: 2,
                borderColor: 'gray'
              }}
            >
              <SwitchSelector
              key={key}
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option4}
                // initial={0}
                initial={0}
                // onPress={handleSwitchSelectorChange1}
                style={{ height: 40 }}
              />
              {/* {console.log("test")} */}
              {/* {console.log(option.findIndex((item) => item.value === selectedValue))} */}
            </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'white',
    },
});

//make this component available to the app
export default PackageInfo;
