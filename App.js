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
import Home from './src/Screens/Home';

const App = () => {

  return (


    < View >
      < Home />
    </View >

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
