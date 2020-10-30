import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import Navigator from './routes/homeStack'

const App = () => {
  return (
    <Navigator />
  );
};

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#fff',
    height: 1000,
    width: 500
  },
  
  container: {
    backgroundColor: '#fff',
    top: 120,
    left: 20
  }

});


export default App
