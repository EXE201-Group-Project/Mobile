//import liraries
import React, { useMemo, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Entypo } from '@expo/vector-icons';
import ProgressSetting from './ProgressSetting';
import Information from './Information';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import EditFooter from './EditFooter';
import DeliveryStatus from './DeliveryStatus';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// create a component
const DirectionInfo = ({ setMod }) => {
  const snapPoints = useMemo(() => ['20%', '50%', '97%'], []);
  const [status, setStatus] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("ac",currentIndex)

  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ];

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addNote = [
    {
      icon: (
        <MaterialCommunityIcons
          name="note-edit-outline"
          size={24}
          color="gray"
          style={{ marginRight: 20 }}
        />
      ),
      icons: <Icon name="chevron-right" size={20} color="gray" />,
      title: 'Add a note'
    }
  ];

  const address = [
    {
      icon: (
        <Feather
          name="map"
          size={24}
          color="gray"
          style={{ marginRight: 20 }}
        />
      ),
      icons: <Icon name="chevron-right" size={20} color="gray" />,
      title: 'Address'
    }
  ];

  return (
    // <BottomSheet
    //   index={1}
    //   snapPoints={snapPoints}
    //   // enablePanDownToClose={false}
    //   enableOverDrag={false}
    //   handleIndicatorStyle={{ backgroundColor: 'gray' }}
    // >
      <View style={{ marginHorizontal: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={styles.address}>{data[currentIndex].name}</Text>
          <TouchableOpacity onPress={() => setMod(false)}>
            <Entypo name="circle-with-cross" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.progress}>
          {status === true ? (
            <View style={styles.success}>
              <Text>Delivered</Text>
            </View>
          ) : status === false ? (
            <View style={styles.fail}>
              <Text>Failed</Text>
            </View>
          ) : (
            <View></View>
          )}

          <Entypo name="progress-full" size={26} color="black" />
          <Text> {data[currentIndex].id}/5,</Text>
          <Text> 1:00 PM</Text>
          <View style={styles.nextBack}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
            <MaterialIcons name="navigate-before" size={24} color="black" />
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>Next</Text>
              <MaterialIcons name="navigate-next" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* {(<ProgressSetting setStatus={setStatus} status={status} />)}
        {(<DeliveryStatus setStatus={setStatus} status={status} />)} */}
        {currentIndex === data.length - 1 ? (
          <View style={styles.firstButton}>
            <TouchableOpacity>
            <AntDesign name="check" size={24} color="black" style={{ alignSelf: 'center', color: '#4e8beb' }}/>
              <Text style={styles.complete}>Route completed</Text>
            </TouchableOpacity>
          </View>
      ) : (
        <>
          <ProgressSetting setStatus={setStatus} status={status} />
          <DeliveryStatus setStatus={setStatus} status={status} />
          <Information address={address} />
        </>
      )}

        <Information addNote={addNote} />
        
        <View style={styles.line}></View>
        <EditFooter data={data} currentIndex={currentIndex}/>
      </View>
    // </BottomSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  address: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  line: {
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  fail: {
    backgroundColor: 'red',
    padding: 4,
    borderRadius: 7,
    marginRight: 7
  },
  success: {
    backgroundColor: 'green',
    padding: 4,
    borderRadius: 7,
    marginRight: 7
  },
  nextBack: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Align buttons to the right
    marginTop: 10,
    marginLeft: 25, // Add margin to the right for spacing
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
    flexDirection:"row"
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  firstButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10
  },
  complete: {
    color: '#4e8beb',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign:"center"
  },
});
//make this component available to the app
export default DirectionInfo;
