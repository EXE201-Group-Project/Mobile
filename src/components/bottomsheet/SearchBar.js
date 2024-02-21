// SearchBar.js
import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import { Feather, Entypo, Ionicons } from '@expo/vector-icons';

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  snapHighest,
  setSelectedItem,
  setMod,
  setStared,
  bottomSheetIndex
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuPress = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionPress = (option) => {
    // Handle the selected option here
    console.log(`Selected option: ${option}`);
    // You can perform any action based on the selected option

    // Close the dropdown menu
    setShowDropdown(false);
  };

  const handleRemoveStop = () => {
    setMod(true);
    setStared(null);
    setShowDropdown(false);
  };

  const handleBackdropPress = () => {
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      {(clicked || snapHighest) && (
        <Ionicons
          name="reorder-three-outline"
          size={20}
          color="black"
          style={{ marginLeft: 10 }}
          onPress={() => {
            Keyboard.dismiss();
            setSearchPhrase('');
          }}
        />
      )}
      <View
        style={
          clicked || snapHighest
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setSelectedItem(null);
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && snapHighest && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && snapHighest ? (
        <Entypo
          name="squared-cross"
          size={20}
          color="black"
          style={{ padding: 20 }}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
            setSelectedItem(null);
          }}
        />
      ) : (
        <TouchableOpacity onPress={handleMenuPress} style={{ padding: 20 }}>
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      )}
      <Modal
        transparent={true}
        visible={showDropdown}
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableWithoutFeedback onPress={handleBackdropPress}>
          <View style={styles.modalBackdrop} />
        </TouchableWithoutFeedback>
        <View
          style={[
            bottomSheetIndex === 2 ? styles.dropdownContainer2 : styles.dropdownContainer1
          ]}
        >
          {/* dropdown menu options */}
          <TouchableOpacity onPress={() => handleOptionPress('Option 1')}>
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRemoveStop}>
            <Text>Remove route</Text>
          </TouchableOpacity>
          {/* Add more options as needed */}
        </View>
      </Modal>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%'
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '93%',
    backgroundColor: '#d9dbda',
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 10
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '85%',
    backgroundColor: '#d9dbda',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginLeft: 10
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%'
  },
  dropdownContainer2: {
    backgroundColor: '#edebeb',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    top: 110, // Adjust the top position as needed
    right: 10 // Adjust the right position as needed
  },
  dropdownContainer1: {
    backgroundColor: '#edebeb',
    padding: 10,
    borderRadius: 8,
    position: 'absolute',
    bottom: 270, // Adjust the top position as needed
    right: 10 // Adjust the right position as needed
  },
  modalBackdrop: {
    flex: 1
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  }
});
