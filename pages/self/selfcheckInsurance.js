import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const selfcheckInsurance = ({navigation}) => {

  const PressHandlerFree = () => {
    navigation.navigate('screen23')
  }

  const PressHandlerNotFree = () => {
    navigation.navigate('screen22')
  }  

  return (
    <View style={styles.page}>
      <View style={{top: "8%", left: "6%"}}>
      <Image
          source={require('../../Icons/insu1.jpg')}>
      </Image>
      </View>
      
      <View style={styles.container}>
          <Text style={styles.text}>
            Do you already
          </Text>
          <Text style={styles.text}>
            have a contract with
          </Text>
          <Text style={styles.text}>
            another insurance
          </Text> 
          <Text style={styles.text}>
            company?     
          </Text>         
      </View>

      <View style={{bottom: "10%"}}>
            <Text style={{fontSize: 16, textAlign: "center"}}>
              We will help you manage the policy transfer
            </Text>
          </View>

      <View style={{bottom: "19%"}}>
          <TouchableOpacity onPress={PressHandlerFree} style={styles.button}>
            <Image style={{left: "8%", top: "13%"}} source={require('../../Icons/insu2.png')}></Image>
            <Text style={styles.buttonText}>No, I am free</Text>
            <Text style={{color: 'white', left: "26%", bottom: "35%", fontSize: 12}}>I have no contract or already cancelled</Text>
          </TouchableOpacity>
      </View>

      <View style={{bottom: "4%"}}>
        <Text style={{color: '#334856',textAlign: "center", fontSize: 14}}>--------------or---------------</Text>
      </View>

      <View style={{bottom: "16%"}}>
          <TouchableOpacity onPress={PressHandlerNotFree} style={styles.button}>
          <Image style={{left: "8%", top: "20%"}} source={require('../../Icons/insu3.png')}></Image>
            <Text style={styles.buttonText}>Yes, cancel it for me</Text>
            <Text style={{color: 'white', left: "26%", bottom: "35%", fontSize: 12}}>I have a running contract</Text>
          </TouchableOpacity>
      </View>


    </View>
   
  );
};

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#fff',
    height: "100%",
    width: "100%"
  },
  
  container: {
    backgroundColor: '#fff',
    top: "10%",
    left: "10%",
  },

  text : {
    backgroundColor: '#fff',
    color: '#334856',
    fontWeight: 'bold',
    fontSize: 35,
    height: "13%",
    width: "100%",
  }, 

  button: {
    top: "130%",
    left: "9.5%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "81%",
    height: 70,
    elevation: 3
  },

  buttonText: {
    fontSize: 20,
    left: "25%",
    fontWeight: 'bold',
    color: 'white',
    bottom: "40%"
  }

});

export default selfcheckInsurance
