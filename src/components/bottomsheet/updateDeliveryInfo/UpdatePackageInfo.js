//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Header from './Header';


// create a component
const UpdatePackageInfo = ({ mod, closeBottomSheet}) => {

  console.log(mod)

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

    return (

        <View style={styles.container}>
        <Header mod={mod} closeBottomSheet={closeBottomSheet}/>
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
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option}
                // initial={0}
                initial={1}
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
                borderWidth={4}
                bold
                textColor={'gray'}
                borderColor={'gray'}
                selectedColor={'#357de6'}
                buttonColor={'#ecf4fe'}
                borderRadius={10}
                options={option1}
                // initial={0}
                initial={1}
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
export default UpdatePackageInfo;
