//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions  } from 'react-native';
import Header from './Header';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';

// import DateTimePicker from '@react-native-community/datetimepicker';
const { width } = Dimensions.get('window');


// create a component
const UpdateArrivalTimeInfo = ({ mod1, closeBottomSheet1 }) => {

  
  return (
    <View style={styles.container}>
      <Header mod1={mod1} closeBottomSheet1={closeBottomSheet1} />
      <Text>UpdateArrivalTimeInfo</Text>
      {/* <DateTimePicker
        value={date}
        mode={'time'}
        is24Hour={true}
        onChange={onChange}
      /> */}

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    paddingHorizontal: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: width - 30, // Set width to the screen width minus any margins/paddings
  },
});

//make this component available to the app
export default UpdateArrivalTimeInfo;
