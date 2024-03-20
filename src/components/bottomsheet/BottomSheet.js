//import liraries
import React, { useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, Keyboard, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { useDispatch } from 'react-redux';

import SearchBar from './SearchBar';
import List from './List';
import AddedStop from './AddedStop';
import RouteTrip from './RouteTrip';

import { GEOAPIFY_API_KEY } from '@env';
import { useToast } from 'react-native-toast-notifications';

// create a component
const BottomSheetHome = ({ setIsShowMenu, navigation }) => {
  const snapPoints = useMemo(() => ['10%', '50%', '92%'], []);

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [snapHighest, setSnapHighest] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // const [anyTxt, setAnyTxt] = useState('');
  // const [err, setErr] = useState('');
  // const [geoKey, setGeoKey] = useState('');
  // const [hide, setHide] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();

  //Nhap vao it nhat 2 ky tu, debounce
  useEffect(() => {
    if (searchPhrase.length >= 2) {
      const debounceTime = setTimeout(() => {
        const formatSearch = searchPhrase.replaceAll(' ', '%20');
        const geoapifyKey = process.env.EXPO_PUBLIC_API_GEOAPIFY;
        // setGeoKey(geoapifyKey.toString());
        fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${formatSearch}&filter=rect:102.1950225046728,8.429936692883985,109.5263465302412,22.807763550006612|countrycode:none&format=json&apiKey=6ccd8475730a4d648ef7a6fb642f256f`
        )
          .then(async (response) => {
            const result = await response.json();
            if (result.results) {
              setSearchData((searchData) => result.results);
            }
            if (result.results && result.results.length === 0) {
              toast.show('Not found any', {
                type: 'warning',
                placement: 'top',
                duration: 4000,
                offset: 30,
                animationType: 'slide-in'
              });
              setSearchData([]);
            }
            if (response.status === 401) {
              toast.show('Invalid', {
                type: 'warning',
                placement: 'top',
                duration: 4000,
                offset: 30,
                animationType: 'slide-in'
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, 420);
      return () => clearTimeout(debounceTime);
    }
  }, [searchPhrase]);

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
      setSearchPhrase('');
      setClicked(false);
      setSelectedItem(null);
      Keyboard.dismiss();
    }
  };

  // Effect to handle index change when clicked state changes
  useEffect(() => {
    handleIndexChange();
  }, [clicked]);

  useEffect(() => {
    setSnapHighest(bottomSheetIndex === 2);

    if (bottomSheetIndex === 2) {
      setIsShowMenu(false);
    } else {
      setIsShowMenu(true);
    }
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
  return (
    <BottomSheet
      index={bottomSheetIndex}
      snapPoints={snapPoints}
      // enablePanDownToClose={false}
      enableOverDrag={false}
      handleIndicatorStyle={{ backgroundColor: 'gray' }}
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
            navigation={navigation}
          />
        </View>
        {/* Normal component */}
        {clicked == false && (
          <View style={{ height: '100%' }}>
            <RouteTrip />
          </View>
        )}
        {/* Sau khi an chon search -> show cac danh sach */}
        {clicked && bottomSheetIndex === 2 && !selectedItem && (
          <List
            searchPhrase={searchPhrase}
            data={searchData}
            setCLicked={setClicked}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            // setHide = {setHide}
          />
        )}
        {/* Sau khi chon dia diem thi show thong tin chi tiet ve dia diem day*/}
        {/* {clicked && selectedItem !== null && (
          <AddedStop
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )} */}
        {selectedItem !== null && (
          <AddedStop
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        )}
      </View>
    </BottomSheet>
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
