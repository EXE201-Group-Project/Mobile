
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Screen } from "../../navigator/Screen";
import AsyncStorage from "@react-native-async-storage/async-storage";


// definition of the Item, which will be rendered in the FlatListStartAddress
const Item = ({ name, details, onClick }) => (
  <TouchableOpacity onPress={onClick} style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </TouchableOpacity>
);

const ListStartAddress = ({ data, searchPhrase}) => {

  const navigation = useNavigation();

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const handleItemClick = (item) => {
    // console.log(item.id);
    // setSelectedItem(item);
    // setID=(item.id);
    // const key = `${item.id}_address`;
    // AsyncStorage.setItem(key, item.name);
    navigation.navigate(Screen.RouteSetting, {
        name: item.name,
    });
  };

  return (
    <View style={styles.list__container}>
        {filteredData.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            details={item.details}
            onClick={() => handleItemClick(item)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list__container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});

export default ListStartAddress;
