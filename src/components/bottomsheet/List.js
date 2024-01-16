// // List.js
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   SafeAreaView,
// } from "react-native";

// // definition of the Item, which will be rendered in the FlatList
// const Item = ({ name, details }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{name}</Text>
//     <Text style={styles.details}>{details}</Text>
//   </View>
// );

// // the filter
// const List = ({ searchPhrase, setCLicked, data }) => {
//   const renderItem = ({ item }) => {
//     // when no input, show all
//     if (searchPhrase === "") {
//       return <Item name={item.name} details={item.details} />;
//     }
//     // filter of the name
//     if (item.name.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
//       return <Item name={item.name} details={item.details} />;
//     }
//     // filter of the description
//     if (item.details.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
//       return <Item name={item.name} details={item.details} />;
//     }
//   };

//   return (
//     <SafeAreaView style={styles.list__container}>
//       <View
//         onStartShouldSetResponder={() => {
//           setCLicked(false);
//         }}
//       >
//         <FlatList
//           data={data}
//           renderItem={renderItem}
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default List;

// const styles = StyleSheet.create({
//   list__container: {
//     margin: 10,
//     height: "85%",
//     width: "100%",
//   },
//   item: {
//     margin: 30,
//     borderBottomWidth: 2,
//     borderBottomColor: "lightgrey"
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 5,
//     fontStyle: "italic",
//   },
// });

// List.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, onClick }) => (
  <TouchableOpacity onPress={onClick} style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </TouchableOpacity>
);

const List = ({ data, searchPhrase, setCLicked, setSelectedItem }) => {

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCLicked(true);
    const key = `${item.id}_address`;
    AsyncStorage.setItem(key, item.name);
  };


  return (
    <View style={styles.list__container}>
      <BottomSheetScrollView>
        {filteredData.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            details={item.details}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </BottomSheetScrollView>
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

export default List;
