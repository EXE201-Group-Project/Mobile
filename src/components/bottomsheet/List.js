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
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, onClick }) => (
  <TouchableOpacity
    onPress={onClick}
    style={[styles.item, styles.alignHorizontal]}
  >
    <Icon style={styles.icon} name="add-circle-outline" size={24} />
    <View style={{ flex: 8 }}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.details}>{details}</Text>
    </View>
    <Icon style={styles.icon} name="trending-up" size={24} />
  </TouchableOpacity>
);

const List = ({ data, setCLicked, setSelectedItem }) => {
  // const filteredData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchPhrase.toLowerCase())
  // );

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCLicked(true);
    const key = `${item.place_id}_address`;
    AsyncStorage.setItem(key, item.address_line1);
  };

  return (
    <View style={styles.list__container}>
      <BottomSheetScrollView>
        {data.map((item) => (
          <Item
            key={item.place_id}
            name={item.address_line1}
            details={item.address_line2}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </BottomSheetScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list__container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white'
  },
  item: {
    marginHorizontal: 8,
    paddingVertical: 12,
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: 'lightgrey'
  },
  icon: {
    flex: 1,
    textAlign: 'center',
    color: '#666666'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    fontStyle: 'italic'
  },
  details: {
    opacity: 0.88
  },
  alignHorizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default List;
