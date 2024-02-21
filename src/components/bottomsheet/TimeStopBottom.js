//import liraries
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import TimeStopInfo from './deliveryInfo/TimeStopInfo';
import UpdateTimeStopInfo from './updateDeliveryInfo/UpdateTimeStopInfo';

// create a component
const TimeStopBottom = ({bottomSheetModalRef2, edit}) => {

    const snapPoints = ['30%', '50%', '80%'];

    const closeBottomSheet2 = () => {
      bottomSheetModalRef2.current?.close();
    };

    return (
        <BottomSheetModal
        ref={bottomSheetModalRef2}
        index={1}
        snapPoints={snapPoints}
      >
      {edit?(
          <UpdateTimeStopInfo mod2={bottomSheetModalRef2} closeBottomSheet2={closeBottomSheet2}/>
      ):
      <TimeStopInfo mod2={bottomSheetModalRef2} closeBottomSheet2={closeBottomSheet2}/>

      }
      </BottomSheetModal>
    );
};

export default TimeStopBottom;
