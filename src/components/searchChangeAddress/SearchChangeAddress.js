// SearchChangeAddress.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../navigator/Screen";

const SearchChangeAddress = ({ searchPhrase, setSearchPhrase }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={
            styles.searchBar__clicked 
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
          }}
        />
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />

      </View>
        <Entypo
          name="squared-cross"
          size={20}
          color="black"
          style={{ padding: 20 }}
          onPress={() => {
            Keyboard.dismiss();
            navigation.navigate(Screen.Home)
          }}
        />

    </View>
  );
};
export default SearchChangeAddress;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "91%",
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
