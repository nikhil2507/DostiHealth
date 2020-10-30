import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const selfcheckInsurance = ({navigation}) => {

  const PressHandlerFree = () => {
    navigation.navigate('screen8')
  }

  const PressHandlerNotFree = () => {
    navigation.navigate('screen9')
  }  

  return (
    <View style={styles.page}>
      <View style={{top: "8%", left: "6%"}}>
      <Image
          style={{height: "31%", width: "18%"}}
          source={require('../../Icons/pen.png')}>
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

      <View style={{bottom: "35%"}}>
            <Text style={{fontSize: 16, textAlign: "center"}}>
              We will help you manage the policy transfer
            </Text>
          </View>

      <View style={{bottom: "40%"}}>
          <TouchableOpacity onPress={PressHandlerFree} style={styles.button}>
            <Image style={{left: "8%", top: "13%"}} source={require('../../Icons/insu2.png')}></Image>
            <Text style={styles.buttonText}>No, We are free</Text>
            <Text style={{color: 'white', left: "26%", bottom: "35%", fontSize: 12}}>We have no contract or already cancelled</Text>
          </TouchableOpacity>
      </View>

      <View style={{bottom: "25%"}}>
        <Text style={{color: '#334856',textAlign: "center", fontSize: 14}}>--------------or---------------</Text>
      </View>

      <View style={{bottom: "36%"}}>
          <TouchableOpacity onPress={PressHandlerNotFree} style={styles.button}>
          <Image style={{left: "8%", top: "20%"}} source={require('../../Icons/insu3.png')}></Image>
            <Text style={styles.buttonText}>Yes, cancel it for us</Text>
            <Text style={{color: 'white', left: "26%", bottom: "35%", fontSize: 12}}>We have a running contract</Text>
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
    bottom: "14%",
    left: "8%",
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
    left: "7%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "86%",
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
