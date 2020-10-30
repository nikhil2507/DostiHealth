import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';


const ValidateDetails = ({navigation}) => {
    
  const PressHandler = () => {
    navigation.navigate('screen7');
  }

    return (
      <View style={styles.page}>

      <View style={{top: "8%", left: "5%"}}>
        <Image
          style={{height: "35%", width: "23%"}}
          source={require('../../Icons/detail1.png')}>
        </Image>
      </View>
        
        <View style={styles.container}>
            <Text style={styles.text}>
              Are these details
            </Text>
            <Text style={styles.text}>
              correct?
            </Text>
        </View>
  
        <View style={{paddingBottom: "3%", top: "1%"}}>
          <Text style={styles.abovePlaceholder}>Company Name*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="ABC Corporation"
            ></TextInput>
        </View>
  
        <View style={{paddingBottom: "3%"}}>
          <Text style={styles.abovePlaceholder1}>Address*</Text>
            <TextInput 
              style={styles.input1} 
              placeholder={"A-105, Freedom Fighter Enclave \nNeb Sarai, IGNOU ROAD, \nNew Delhi - 110068,"
            }
            ></TextInput>
        </View>

        <View style={{paddingBottom: "3%"}}>
          <Text style={styles.abovePlaceholder}>Postal Code*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="110068"
            ></TextInput>
        </View>
  
        <View style={{bottom: "6%"}}>
            <TouchableOpacity onPress={PressHandler} style={styles.button}>
              <Text style={styles.buttonText}>continue</Text>
  
            </TouchableOpacity>
          </View>
  
      </View>
     
    );
  };
  
  const styles = StyleSheet.create({
  
    page: {
      backgroundColor: '#fff',
      height: "100%",
      width: "100%",
    },
    
    container: {
      backgroundColor: '#fff',
      bottom: "13%",
      left: "5%",
      marginBottom: "3%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
    }, 
  
    abovePlaceholder: {
      bottom: "140%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    },

    abovePlaceholder1: {
      bottom: "90%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    },
  
    input: {
      color: 'black',
      bottom: "160%",
      left: "8%",
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: "84%"  
    },

    input1: {
      color: 'black',
      bottom: "100%",
      left: "8%",
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: "84%"  
    },
  
    button: {
      left: "15%",
      borderRadius: 100,
      backgroundColor: '#00B17B',
      width: "70%",
      height: 50,
      elevation: 3
    },
  
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
      color: 'white',
      top: "15%"
    }
  
  });
  
export default ValidateDetails
  