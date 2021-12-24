import React, { useState } from 'react';


import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

import HomeComponent from './src/screen1.js';

const App = () => {

  return (
    <SafeAreaView >
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ScrollView>
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
        <HomeComponent />
      </ScrollView>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  backgroundStyle: {

  }

})


export default App;
