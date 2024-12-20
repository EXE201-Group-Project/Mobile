// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";

const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked, snapHighest, setSelectedItem }) => {
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
                setSearchPhrase("");
              }}
            />
          )}
      <View
        style={
            clicked || snapHighest ? styles.searchBar__clicked : styles.searchBar__unclicked
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
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {(clicked && snapHighest) && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {(clicked && snapHighest) ? (
        <Entypo
          name="cross"
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
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="black"
          style={{ padding: 20 }}
          onPress={() => {
            // Handle the action when dots icon is pressed
          }}
        />
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "93%",
    backgroundColor: "#d9dbda",
    borderRadius: 8,
    alignItems: "center",
    marginLeft: 10
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#d9dbda",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 10
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
