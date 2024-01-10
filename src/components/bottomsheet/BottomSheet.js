//import liraries
import React, { Component, useMemo, useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Keyboard, ScrollView } from "react-native";
import BottomSheet, { BottomSheetScrollView  } from "@gorhom/bottom-sheet";
import Icon from "react-native-vector-icons/MaterialIcons";
import SearchBar from "../searchbar/SearchBar";
import List from "../searchlist/List";
import AddedStop from "../addedstop/AddedStop";
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';


// create a component
const BottomSheetHome = () => {
  const snapPoints = useMemo(() => ["10%", "50%", "92%"], []);

  const bottomSheetRef = useRef(null);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [snapHighest, setSnapHighest] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);

  // console.log(selectedItem?.name);
  console.log("a: ",clicked);
  console.log("b:", bottomSheetIndex);
  console.log("c:", selectedItem);

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
      );
      const data = await apiResponse.json();
      setFakeData(data);
    };
    getData();
  }, []);

  // Function to handle index change based on the clicked state
  const handleIndexChange = () => {
    if (clicked) {
      setBottomSheetIndex(2);
    } else {
      setBottomSheetIndex(1);
    }
  };

  const handleChange = (index) => {
    // Update bottomSheetIndex when the sheet is swiped
    setBottomSheetIndex(index);
    if (index === 1 || index === 0) {
      setSearchPhrase("");
      setClicked(false);
      setSelectedItem(null);
    }
  };

  // Effect to handle index change when clicked state changes
  useEffect(() => {
    handleIndexChange();
  }, [clicked]);

  useEffect(() => {
    setSnapHighest(bottomSheetIndex === 2);
  }, [bottomSheetIndex]);

  // Effect to handle keyboard dismissals
  //   useEffect(() => {
  //     const keyboardDidHideListener = Keyboard.addListener(
  //       'keyboardDidHide',
  //       () => {
  //         // Keyboard is dismissed
  //         if (searchPhrase === '') {
  //           setClicked(false);
  //         }
  //       }
  //     );

  //     // Cleanup the event listener when the component is unmounted
  //     return () => {
  //       keyboardDidHideListener.remove();
  //     };
  //   }, [searchPhrase]);
  console.log(snapHighest);
  return (
    <BottomSheet
      index={bottomSheetIndex}
      snapPoints={snapPoints}
      // enablePanDownToClose={false}
      enableOverDrag = {false}
      handleIndicatorStyle={{ backgroundColor: "gray" }}
      onChange={handleChange}
    >
      <View style={styles.bottomSheetContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            snapHighest={snapHighest}
            setSelectedItem={setSelectedItem}
          />
        </View>

        {searchPhrase && bottomSheetIndex === 2 && !selectedItem && (
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setCLicked={setClicked}
            setSelectedItem={setSelectedItem}
          />
        )}
        {clicked && selectedItem !== null && <AddedStop selectedItems={selectedItem} />}

      </View>
    </BottomSheet>
  );
};

// define your styles
const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: "white"
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -10 }], // Adjust based on icon size
  },
  bottomSheetInput: {
    height: 50, // Set your desired height
    fontSize: 16,
    paddingLeft: 30, // Adjust based on icon size and position
    paddingVertical: 10,
    flex: 1,
  },
});

//make this component available to the app
export default BottomSheetHome;
