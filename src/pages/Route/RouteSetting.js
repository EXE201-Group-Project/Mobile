//import liraries
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RouteStart from '../../components/routeSetting/RouteStart';
import RouteEnd from '../../components/routeSetting/RouteEnd';
import Break from '../../components/routeSetting/Break';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

// create a component

function Header() {
  const navigation = useNavigation();


  return (
    <>
      <View style={{ padding: 10 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </>
  );
}

function Body() {
  const route = useRoute();
  const { name, setCount } = route.params || {};

  return (
    <>
      <View style={{ padding: 10 }}>
        <RouteStart name={name} setCount={setCount} />
        <RouteEnd />
        <Break />
      </View>
    </>
  );
}

function Footer() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <View style={{ backgroundColor: 'white' }}>
        <View
          style={{ borderWidth: 0.2, borderColor: 'gray', marginBottom: 10 }}
        ></View>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            width: '90%',
            alignSelf: 'center',
            height: 45,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
            borderRadius: 5
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20
            }}
          >
            Done
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            paddingBottom: 20
          }}
        >
          <CheckBox
            title="Save as default"
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
        </View>
      </View>
    </>
  );
}

function RouteSetting() {
  return (
    <SafeAreaView style={{ backgroundColor: '#f7f7f7', flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Header />
          <Body />
        </ScrollView>
        <Footer />
      </View>
    </SafeAreaView>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
});

//make this component available to the app
export default RouteSetting;
