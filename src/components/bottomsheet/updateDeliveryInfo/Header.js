//import liraries
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// create a component
const Header = ({mod, mod1, mod2, closeBottomSheet, closeBottomSheet1, closeBottomSheet2}) => {
  return (
<View>
  {mod && (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
      }}
    >
      <View>
        <TouchableOpacity>
          <Text style={{fontSize: 17, fontWeight: "bold"}}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Package finder</Text>
      </View>
      <View>
        <TouchableOpacity onPress={closeBottomSheet}>
          <Text style={{fontSize: 17, color: "blue", fontWeight: "bold"}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
  {mod1 && (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
      }}
    >
      <View>
        <TouchableOpacity>
          <Text style={{fontSize: 17, fontWeight: "bold"}}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Arrival time</Text>
      </View>
      <View>
        <TouchableOpacity onPress={closeBottomSheet1}>
          <Text style={{fontSize: 17, color: "blue", fontWeight: "bold"}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
  {mod2 && (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
      }}
    >
      <View>
        <TouchableOpacity>
          <Text style={{fontSize: 17, fontWeight: "bold"}}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>Time at stop</Text>
      </View>
      <View>
        <TouchableOpacity onPress={closeBottomSheet2}>
          <Text style={{fontSize: 17, color: "blue", fontWeight: "bold"}}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
</View>
  );
};

export default Header;
