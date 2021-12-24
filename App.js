import React, { useState } from 'react';


import {
  Button,
  SafeAreaView,
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
      <HomeComponent />
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
