//import liraries
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import UnAuthStackNavigator from './unAuthStack/UnAuthStack';
import AuthStackNavigator from './authStack/AuthStack';

// create a component
function Navigator() {
  const token = useSelector((state) => state.user.token);
  console.log(token);

  return (
    <NavigationContainer>
      {!token ? <UnAuthStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

//make this component available to the app
export default Navigator;
