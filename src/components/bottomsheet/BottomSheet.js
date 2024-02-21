//import liraries
import React, { useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Keyboard } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import List from './List';
import AddedStop from './AddedStop';
import RouteTrip from './routeTrip/RouteTrip';
import { MenuProvider } from 'react-native-popup-menu';
import RouteOnline from './Direction/RouteOnline';
import DirectionInfo from './Direction/DirectionInfo';
import {
  BottomSheetScrollView,
  BottomSheetModalProvider
} from '@gorhom/bottom-sheet';


// create a component
const BottomSheetHome = ({setShowDrawer, setShowOptimize, setMod, started, setStared, mod}) => {
  const snapPoints = useMemo(() => ['20%', '50%', '97%'], []);

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [snapHighest, setSnapHighest] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  // const [hide, setHide] = useState(false);

  

  useEffect(() => {
    const getData = async () => {
      const apiResponse = await fetch(
        'https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages'
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
      setShowDrawer(false);
    } else {
      setBottomSheetIndex(1);
      setShowDrawer(true);
    }
  };

  const handleChange = (index) => {
    // Update bottomSheetIndex when the sheet is swiped
    setBottomSheetIndex(index);
    if (index === 1 || index === 0) {
      setSearchPhrase('');
      setClicked(false);
      setSelectedItem(null);
      setShowDrawer(true);
      Keyboard.dismiss();
    } else if (index === 2) {
      setShowDrawer(false);
    }
  };

  // Effect to handle index change when clicked state changes
  useEffect(() => {
    handleIndexChange();
  }, [clicked]);

  useEffect(() => {
    setSnapHighest(bottomSheetIndex === 2);
    
  }, [bottomSheetIndex]);

  useEffect(() => {
    // Add a condition to set setShowOptimize based on clicked and bottomSheetIndex
    if (!clicked && bottomSheetIndex >= 0) {
      setShowOptimize(true);
    } else {
      setShowOptimize(false);
    }
  }, [clicked, bottomSheetIndex]);

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
  return (
    <BottomSheetModalProvider>
    <BottomSheet
      index={bottomSheetIndex}
      snapPoints={snapPoints}
      // enablePanDownToClose={false}
      enableOverDrag={false}
      handleIndicatorStyle={{ backgroundColor: 'gray' }}
      onChange={handleChange}
    >
    <BottomSheetScrollView>
      <View style={styles.bottomSheetContainer}>
      {mod !== null &&(
        <View style={styles.searchContainer}>
          <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
            snapHighest={snapHighest}
            setSelectedItem={setSelectedItem}
            setMod={setMod}
            setStared={setStared}
            bottomSheetIndex={bottomSheetIndex}
          />
        </View>
      )}

        {clicked == false && bottomSheetIndex > 0 && mod === true && (
          <RouteTrip />
        )}
        {searchPhrase && bottomSheetIndex === 2 && !selectedItem && (
          <List
            searchPhrase={searchPhrase}
            data={fakeData}
            setCLicked={setClicked}
            
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            // setHide = {setHide}
          />
        )}
        {/* {clicked && selectedItem !== null && hide && ( */}
        {/* {clicked && selectedItem !== null && hide && (
          <AddedStop selectedItem={selectedItem} setSelectedItem={setSelectedItem} setHide={setHide}/>
        )} */}
        {clicked && selectedItem !== null && (
          <AddedStop selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        )}
        {mod === null &&(
          <DirectionInfo setMod={setMod}/>
        )}
        {mod === false && (
          <RouteOnline setMod={setMod} started={started} setStared={setStared}/>
        )}
      </View>
      </BottomSheetScrollView>
    </BottomSheet>
    </BottomSheetModalProvider>
  );
};

// define your styles
const styles = StyleSheet.create({
  bottomSheetContainer: {
    backgroundColor: 'white'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    position: 'absolute',
    left: 10,
    top: '50%',
    transform: [{ translateY: -10 }] // Adjust based on icon size
  },
  bottomSheetInput: {
    height: 50, // Set your desired height
    fontSize: 16,
    paddingLeft: 30, // Adjust based on icon size and position
    paddingVertical: 10,
    flex: 1
  }
});

//make this component available to the app
export default BottomSheetHome;
