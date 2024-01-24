//import liraries
import React, { useMemo, useState, useEffect } from 'react';
import { View, StyleSheet, Text, Keyboard, Pressable } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import List from './List';
import AddedStop from './AddedStop';
import RouteTrip from './RouteTrip';
import { useDispatch } from 'react-redux';
import FakeDirection from '../../test/FakeDirection';
import { updatePolyline } from '../../redux/slice/placeSlice';
import decodePolyline from '../../pages/Home/DecodePolyline';

// create a component
const BottomSheetHome = () => {
  const snapPoints = useMemo(() => ['10%', '50%', '92%'], []);

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);
  const [bottomSheetIndex, setBottomSheetIndex] = useState(0);
  const [snapHighest, setSnapHighest] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [selectedItem, setSelectedItem] = useState(null);
  // const [hide, setHide] = useState(false);
  const dispatch = useDispatch();

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
  }, [bottomSheetIndex]);

  const handleFakeData = () => {
    const encodedPolyline = FakeDirection.routes[0].overview_polyline.points;
    const testtttt =
      'gdz`AcctjSjAIt@hJHh@Rn@l@bBNf@B^WjG`AO|@Yf@YvCyB|@[|Ck@`Dm@hDm@Rt@L`B?|CFPZNb@Dh@Et@NTRLXBVIdAMz@k@xAE~AFvCFTLNd@Lc@vAOl@V?XDrB?XDFDDHz@Al@TxCFfAJFJT~@JFLdDNFh@`@D@xA~ANCYXkKhIkJjHoJ~H}EdE{BhBi@h@iCjByAnAa@h@YZZVvAhBz@xAf@dAfa@naAxHxQrTli@n@dBSHnGhOjEvKPVn@`BrAxDfBnGfA|ErAbHPrATGd@nCbAxGRbBPdChHrr@b@nD`@nBdA|CjAnBn@|@r@r@hFbCrAz@v@v@|@pA~AnCtC|Ff@t@b@f@zPlLn@l@j@n@h@t@lAxBxCfGdApBhAlBxAxBxFlHvChDzFbG`ClC~@v@lAx@f@RrBp@b@V`@\\RXXj@^jAPhA@j@GlA_@nBiBhJOnA?nAD~@l@`HFrBAtBLlAPn@L\\Zj@|@z@hAr@j@RhBZ\\JbAj@\\V^b@V`@P^Rt@Jr@F`AAx@OvBM~@Q~@o@rBw@zCa@vBQbBc@~GOrDk@hHG`CJzBHz@b@tBrAdFvIv^j@jBf@zA|ApD~HdPtCvFnHrObIdPfSh`@lJtQxDrHrHlOlFhKx@dB?h@bGzMNT?JdAhC{Ar@u@f@MPG`A?`AXrC_A~IKNWLi@JgAGsAOeFq@gEe@kBWwAOSEoNMoDB_H?iCC{Mi@uAOgCG]DjAnHEd@UKWBQLGTJXPLNXlJlL`CzC^n@IFpAdBlAtArC|DbBrB';
    const second =
      'ybp`A_puiSq@v@yD~BFJdDgBn@m@fGuGt@_Av@}A`\\jPj@`@l@j@LNrB`DlF`JZVNZhFmCdGcDf@WlEcCdCqAvDwB~@c@TC|BmAeAeCeUel@eB_EiAoD_CwFsCmGeAwBiD}HwCgGoD}H_EkJqC}FeGoLqCmFmFqKsHaOeE{HoImPqIgPeIqPwMiXsHuOuAaDu@wBm@kCIOO_@eAmEo@sCmFaTu@uCUqAQmBCo@?y@@}@lAeQp@eITeAdBqHb@oCJiADaCEy@Km@K_@Yq@a@k@a@e@g@]aAg@y@Su@Ke@O}Au@a@_@k@y@KUW}@OkACgB@QEqAq@eJAy@J}AvA{Gt@kELmBI_AQm@i@_B[i@_@_@]W{DeB[SsAmAiCiC{CwCiCqCsBgCqGoI_BcCuCmFqDiHaAyA_@c@a@c@yAgAoL}Hq@i@OSc@s@aAsAm@sA[_@]m@_BaDiA}Ao@q@w@k@qBeA{@a@cBaAUQ_AeAq@eAw@cAm@yAUu@]{AUcB}Gqq@Ku@OmBc@eEk@_IWwB}AeJeAoEy@{CgAyD_CcHmFeMmFwMu@aBot@}fBaLgXCEMeA_AaByAeBY[cC_BcCoAcBk@yA_@{AUcEc@cAQy@m@U[Ym@X{BX_@jCoBp@]hBo@nHaD`@QEoCBkBRsDPeBh@gBHO^yAL_Bb@qOD_AJeE^qIC_@]eA_@eAUw@Kw@q@sIkAH';
    const rs = [];
    const rs1 = decodePolyline(testtttt);
    const rs2 = decodePolyline(second);
    rs.push([...rs1]);
    rs.push([...rs2]);
    console.log(rs);
    // const decoded = decodePolyline(encodedPolyline);
    // console.log('decoded here ', decoded);
    return rs[0];
  };

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
        <Pressable
          onPress={() => {
            const decodedPolyline = handleFakeData();
            dispatch(updatePolyline({ polyline: decodedPolyline }));
          }}
        >
          <Text>Click here</Text>
        </Pressable>
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
        {clicked == false && <RouteTrip />}
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
