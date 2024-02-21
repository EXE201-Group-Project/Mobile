// import necessary components and styles
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AddBreak = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="gray" />
        </TouchableOpacity>
        <Text style={styles.firstText}>Break setup</Text>
        <Text style={styles.secondText}>
          Get more accurate stop and route time estimates by planning your break within the app.
        </Text>
      </View>
      <View style={{ borderWidth: 0.5, borderColor: 'gray' }}></View>
      {/* Your main content goes here */}
      <View style={styles.content}>
        <Text>AddBreak</Text>
      </View>

      {/* Fixed bottom button */}
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.bottomButtonText}>Add a break</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginLeft: 15,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 30,
  },
  firstText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 10,
  },
  secondText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'gray',
  },
  content: {
    flex: 1, // Take remaining space
    // Add styles for your main content here
  },
  bottomButton: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '95%',
  },
  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddBreak;
