// import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Screen } from '../../../navigator/Screen';
import { useNavigation } from '@react-navigation/native';

// create a component
const Information = ({ address, addNote }) => {
  const navigation = useNavigation();

  const handlePress = (key) => {
    switch (key) {
      case 'Add a note':
        // Implement logic for 'Change address'
        navigation.navigate(Screen.EditNote, {});
        break;
      case 'Address':
        // Implement logic for 'Duplicate stop'
        break;
      default:
        // Default case
        break;
    }
  };

  const renderSettings = (settingsData) => {
    if (!settingsData || settingsData.length === 0) {
      return null;
    }

    return settingsData.map((setting, index) => (
      <View key={index}>
        <TouchableOpacity
          style={{
            paddingVertical: 20,
            justifyContent: 'center' // Center vertically
          }}
          onPress={() => {
            // navigation.navigate(Screen.RouteSetting);
            handlePress(setting.title)
          }}
        >
          <View style={styles.settings}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {setting.icon}
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{setting.title}</Text>
                {/* <Text style={{ fontSize: 17 }}>{setting.subtitle}</Text> */}
              </View>
            </View>
            <View>
              {/* <Icon name="chevron-right" size={20} color="gray" /> */}
              {setting.icons}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View>
      {renderSettings(address)}
      {renderSettings(addNote)}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  },
  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

// make this component available to the app
export default Information;
