//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// create a component
const EditNote = () => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.textHeader}>EditNote</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.doneButton}>
            <Text style={styles.textDone}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addNote}>
        <TextInput
          placeholder="Enter text here"
          multiline={true}
          numberOfLines={50} // Adjust the initial number of lines as needed
          style={{ height:200, textAlignVertical: 'top', fontSize:20}}
          onChangeText={(value) => setText(value)}
        />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center'
  },
  header: {
    marginVertical: 15,
    flexDirection: 'row'
  },
  doneButton: {
    position: 'absolute',
    right: -160
  },
  addNote: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'flex-start', // Align TextInput to the top
  },
  textDone: {
    fontWeight:"bold",
    color:"blue",
    fontSize: 20
  },
  textHeader: {
    fontWeight:"bold",
    fontSize: 20
  }
});

//make this component available to the app
export default EditNote;
