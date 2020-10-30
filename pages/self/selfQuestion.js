import React from 'react'
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';

const selfQuestion = () => {
  return (
  <View style={styles.page}>
    <Image style={{left: 20, top: 55}} source={require('../../Icons/any.jpg')}></Image>
    
      <View style={styles.container}>
        <Text style={styles.text}>
          Do you have any
        </Text>
        <Text style={styles.text}>
          Questions?
        </Text>
      </View>

      <View>
        <Text style={{top: 100, fontSize: 18, left: 20}}>
          {"One of the representatives will respond to you \nwithin 10 minutes(except on weekends and \n holidays when the wait time is 1 hour)"}
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ask a question</Text>

        </TouchableOpacity>
      </View>

  </View> 

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
    top: 60,
    left: 20
  },

  text : {
    backgroundColor: '#fff',
    color: '#334856',
    fontWeight: 'bold',
    fontSize: 35,
    height: 45,
    width: 400,
  }, 

  abovePlaceholder: {
    top: 160,
    color: '#2E94F9',
    fontSize: 16, 
    left: 25
  }, 

  input: {
    color: 'black',
    top: 150,
    left: 35,
    fontSize: 16,
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#2E94F9' ,
    width: 350   
  },

  button: {
    top: 380,
    left: 60,
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: 280,
    height: 50
  },

  buttonText: {
    fontSize: 20,
    left: 80,
    fontWeight: 'bold',
    color: 'white',
    top: 10
  }

});


export default selfQuestion
