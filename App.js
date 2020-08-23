import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImagePropTypes } from 'react-native';
import Weather from './components/Weather';
import Constants from 'expo-constants';
import { NavigationContainer,StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Temperature" component={ZipCodeScreen}/>
        <Stack.Screen name="Weather" component={WeatherScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
 }
const styles = StyleSheet.create({
 container: {
    alignItems:'center',
    textAlign:'center'
 },

});
