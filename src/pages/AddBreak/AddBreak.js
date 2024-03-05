// import necessary components and styles
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const AddBreak = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="gray" />
        </TouchableOpacity>
        <Text style={styles.firstText}>Break setup</Text>
        <Text style={styles.secondText}>
          Get more accurate stop and route time estimates by planning your break
          within the app.
        </Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: '#c4c5c6' }}></View>
      {/* Your main content goes here */}
      <View style={styles.content}>
        <View style={styles.head}>
          <Text style={styles.text}>When do you want to take a break?</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Feather name="clock" size={24} color="black" style={styles.icon} />
          <View style={styles.container2}>
            <View style={styles.labelContainer}>
              <Text style={styles.textOutline}>Between</Text>
            </View>
            <TouchableOpacity style={styles.choose} />
          </View>
          <View style={styles.container2}>
            <View style={styles.labelContainer}>
              <Text style={styles.textOutline}>And</Text>
            </View>
            <TouchableOpacity style={styles.choose} />
          </View>
        </View>
        <View style={styles.head}>
          <Text style={styles.text}>How long does your break last?</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MaterialIcons
            name="more-time"
            size={24}
            color="black"
            style={styles.icon}
          />
          <View style={styles.container1}>
            <View style={styles.labelContainer}>
              <Text style={styles.textOutline}>Break duration</Text>
            </View>
            <TouchableOpacity onPress={toggleModal} style={styles.choose} />
          </View>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                Break duration (minutes)
              </Text>
              <TextInput keyboardType="numeric" style={styles.inputModal}>
                <Text style={{fontSize:20}}>abc</Text>
              </TextInput>
              <TouchableOpacity
                style={{
                  backgroundColor: '#4285F4',
                  width: '97%',
                  height: 60, // Adjust the height as needed
                  borderRadius: 6,
                  marginBottom: 10,
                  justifyContent: 'center' // Center the text vertically
                }}
                onPress={() => {}}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 20,
                    lineHeight: 60, // Match the height of TouchableOpacity,
                    fontWeight:"bold"
                  }}
                >
                  Set
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(!isModalVisible);
                }}
              >
                <Text style={{ fontSize: 20, color: '#4285F4' }}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      {/* Fixed bottom button */}
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Add a break</Text>
      </TouchableOpacity>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginLeft: 15,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 30
  },
  firstText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10
  },
  secondText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#91a0a9'
  },
  content: {
    flex: 1, // Take remaining space
    // Add styles for your main content here
    marginRight: 20
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
  icon: {
    alignSelf: 'center',
    marginLeft: 15,
    color: '#4285F4'
  },
  head: {
    marginLeft: 20,
    marginVertical: 20
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  container1: {
    height: 50,
    position: 'relative',
    width: '77%'
  },
  labelContainer: {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    top: -13,
    left: 25,
    padding: 5,
    zIndex: 50
  },
  choose: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'flex-end',
    height: 44,
    borderRadius: 5,
    paddingHorizontal: 25
  },
  container2: {
    height: 50,
    position: 'relative',
    width: '35%'
  },
  textOutline: {
    fontWeight: 'bold',
    color: '#535563'
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
    height: '45%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputModal: {
    borderWidth: 3,
    borderColor: '#4285F4',
    width: '97%',
    height: 70,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 23,
    paddingLeft: 10 // Add padding to the right for spacing
  }
});

export default AddBreak;
