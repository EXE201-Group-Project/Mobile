//import liraries
import React from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import PackageInfo from './deliveryInfo/PackageInfo';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// create a component
const PackFinderBottom = ({
  bottomSheetModalRef,
  setChange,
  packages,
  setRemove,
  packages1,
  id
}) => {
  const snapPoints = ['30%', '60%', '80%'];

  const [dataaa, setDataaa] = useState();
  console.log('dataaa', dataaa);
  console.log(id);

  useEffect(() => {
    const getSelectedItem = async () => {
      try {
        // Save the selected value in AsyncStorage
        // await AsyncStorage.setItem('selectedValuess1', value);
        const key = `${id}_address`;
        const value = await AsyncStorage.getItem(key);
        setDataaa(value);
        // console.log('Selected value saved successfully!');
      } catch (error) {
        console.error('Error saving selected value:', error);
      }
    };
    getSelectedItem();
  }, [id]);

  const closeBottomSheet = () => {
    bottomSheetModalRef.current?.close();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      index={1}
      snapPoints={snapPoints}
    >
      {/* <Header /> */}
      <PackageInfo
        setChange={setChange}
        packages={packages}
        setRemove={setRemove}
        packages1={packages1}
        id={id}
        mod={bottomSheetModalRef}
        closeBottomSheet={closeBottomSheet}
      />
    </BottomSheetModal>
  );
};

export default PackFinderBottom;
