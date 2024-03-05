//import liraries
import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable
} from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slice/authSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GG_MAP_SERVICE_API_KEY } from '@env';

const handlePlacePress = (data, details) => {
  const { description, structured_formatting, place_id } = data;
  const { lat, lng } = details.geometry.location;

  console.log('Place:', description);
  console.log('Structured Formatting:', structured_formatting);
  console.log('Place ID:', place_id);
  console.log('LatLng:', { lat, lng });
};

const Read = () => {
  const autoCompleteRef = useRef();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text>Trang hướng dẫn sử dụng</Text>
      <Text style={{ textAlign: 'center', width: '80%' }}>
        Chúng tôi đang thiết kế... Xin bạn hãy kiên nhẫn chào đón trong bản cập
        nhật kế!
      </Text>
      {/* <Pressable
        onPress={() => {
          console.log(GG_MAP_SERVICE_API_KEY);
        }}
      >
        <Text>Read</Text>
      </Pressable>
      <View style={{ zIndex: 1, flex: 1, width: '100%' }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          styles={autoCompleteStyles}
          ref={autoCompleteRef}
          onPress={(data, details) => {
            console.log('Data hereeeee----------------');
            console.log(data);
            console.log('Detail hereeeee----------------');
            console.log(details);
          }}
          query={{
            key: GG_MAP_SERVICE_API_KEY,
            language: 'vn',
            //limit search range
            components: 'country:vn'
          }}
          fetchDetails={true}
          //will search after a certain time
          debounce={2000}
          minLength={2}
          onFail={(err) => console.log(err)}
          keepResultsAfterBlur={true}
        />
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
});

const autoCompleteStyles = {
  container: {
    flex: 1
  },
  textInputContainer: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  textInput: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16
  },
  predefinedPlacesDescription: {
    color: '#1faadb'
  },
  listView: {
    position: 'absolute',
    top: 60, // Adjust as needed
    left: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 3 // Android elevation for shadow
  }
};

//make this component available to the app
export default Read;
