// List.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

// import { Ionicons } from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { addPlace } from '../../redux/slice/placeSlice';
import { showToast } from '../ToastMsg';
import { useToast } from 'react-native-toast-notifications';

const initPlacesState = {
  index: 0,
  place_id: '',
  description: '',
  location: {
    latlng: {
      latitude: 0,
      longitude: 0
    }
  }
};

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details, onClick }) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[styles.item, styles.alignHorizontal]}
    >
      <Icon style={styles.icon} name="add-circle-outline" size={24} />
      <View style={{ flex: 8, justifyContent: 'center' }}>
        <Text style={styles.title}>{name}</Text>
        {/* Mot so vi tri khong co details */}
        {details ? <Text style={styles.details}>{details}</Text> : ''}
      </View>
      <Icon style={styles.icon} name="trending-up" size={24} />
    </TouchableOpacity>
  );
};

const List = ({ data, setCLicked, setSelectedItem, setBottomSheetIndex }) => {
  const places = useSelector((state) => state.place.places);
  const dispatch = useDispatch();
  const toast = useToast();

  const handleItemClick = (item) => {
    const formattedData = {
      ...initPlacesState,
      index: places.length,
      place_id: item.name,
      description: item.formatted,
      location: {
        ...initPlacesState.location,
        latlng: {
          ...initPlacesState.location.latlng,
          latitude: item.lat,
          longitude: item.lon
        }
      }
    };
    dispatch(addPlace({ place: formattedData }));

    setCLicked(true);
    setSelectedItem(item);
    setBottomSheetIndex(1);
    const key = `${item.place_id}_address`;
    AsyncStorage.setItem(key, item.address_line1);
    showToast(toast, 'Thêm điểm thành công', 'success');
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
    color: '#666666',
    marginRight: 6
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
