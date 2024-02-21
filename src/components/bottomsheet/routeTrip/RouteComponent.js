// import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Screen } from '../../../navigator/Screen';
import { useNavigation } from '@react-navigation/native';

// create a component
const RouteComponent = ({
  settingsDataEnd,
  settingsDataStart,
  settingsDataBreak,
  started
}) => {
  const navigation = useNavigation();

  const renderSettings = (settingsData) => {
    if (!settingsData || settingsData.length === 0) {
      return null;
    }

    return settingsData.map((setting, index) => (
      <View key={index}>
        <TouchableOpacity
          style={{
            height: 80,
            justifyContent: 'center' // Center vertically
          }}
          onPress={() => {
            navigation.navigate(Screen.RouteSetting);
          }}
        >
          <View style={styles.settings}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              {setting.icon}
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                  {setting.title}
                </Text>
                <Text style={{ fontSize: 17 }}>{setting.subtitle}</Text>
              </View>
            </View>
            {started !== null ? (
              <View>
                <Icon name="chevron-right" size={20} color="gray" />
              </View>
            ) : (
              <View>
                <Text>1:00</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    ));
  };

  return (
    <View>
      {renderSettings(settingsDataEnd)}
      {renderSettings(settingsDataStart)}
      {renderSettings(settingsDataBreak)}
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
    marginHorizontal: 20
  }
});

// make this component available to the app
export default RouteComponent;
