//import liraries
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchAddress from '../../components/searchChangeAddress/SearchChangeAddress';
import ListAddress from '../../components/searchChangeAddress/ListChangeAddress';
import { useRoute } from '@react-navigation/native';


// create a component
const SearchChangeAddress = () => {

  const [searchPhrase, setSearchPhrase] = useState('');
  const [fakeData, setFakeData] = useState();

  const route = useRoute();
  const { setSelectedItem, setID } = route.params || {};


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


  return (

      <View style={styles.bottomSheetContainer}>
        <View style={styles.searchContainer}>
          <SearchAddress
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
          />
        </View>

        {searchPhrase && (
          <ListAddress
            searchPhrase={searchPhrase}
            data={fakeData}
            setSelectedItem={setSelectedItem}
            setID={setID}
          />
        )}
      </View>

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
export default SearchChangeAddress;
