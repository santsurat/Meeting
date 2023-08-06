import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Screens/Dashboard';
import JoinMeeting from '../Screens/JoinMeeting';
import SignUp from '../Screens/SignUp/SignUp';
import SignUp2 from "../Screens/SignUp/SignUp2";
import SignIn from "../Screens/SignIn/SignIn";
import Setting from '../Screens/Settings/Setting';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        styles={styles.root}
      >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="JoinMeeting" component={JoinMeeting} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignUp2" component={SignUp2} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Setting" component={Setting} />



      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  root: {
    color: '#000000',
  },
});
export default Navigation;
