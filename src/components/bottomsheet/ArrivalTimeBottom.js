//import liraries
import React from 'react';
import { Text, View } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import ArrivalTimeInfo from './deliveryInfo/ArrivalTimeInfo';
import UpdateArrivalTimeInfo from './updateDeliveryInfo/UpdateArrivalTimeInfo';

// create a component
const ArrivalTimeBottom = ({bottomSheetModalRef1, edit}) => {

    const snapPoints = ['30%', '60%', '80%'];

    const closeBottomSheet1 = () => {
      bottomSheetModalRef1.current?.close();
    };

    return (
        <BottomSheetModal
        ref={bottomSheetModalRef1}
        index={2}
        snapPoints={snapPoints}
      >
      {edit?(
          <UpdateArrivalTimeInfo mod1={bottomSheetModalRef1} closeBottomSheet1={closeBottomSheet1}/>
      ):
      <ArrivalTimeInfo mod1={bottomSheetModalRef1} closeBottomSheet1={closeBottomSheet1}/>
}
      </BottomSheetModal>
    );
};

export default ArrivalTimeBottom;
