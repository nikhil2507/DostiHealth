import React from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';


const Passport = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen4')
  } 
    
  return (
        <View style={styles.page}>

      <View style={{top: "8%", left: "5%"}}>
        <Image
          style={{height: "35%", width: "23%"}}
          source={require('../../Icons/Password.png')}>
        </Image>
      </View>
      
            <View style={styles.container}>
                <Text style={styles.text}>
                    Create a Password
                </Text>
                <Text style={styles.text}>
                    for your account
                </Text>
            </View>

            <View style={{marginBottom: "8%"}}>
                <Text style={styles.abovePlaceholder}>Password*</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="**********************"
                ></TextInput>
                <Text style={styles.belowPlaceholder}>6 characters minimum</Text>
            </View>

            <View>
                <Text style={styles.abovePlaceholder}>Confirm Password*</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder="**********************"
                ></TextInput>
            </View>

            <View style={{top: "14%"}}>
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
      width: "100%"
    },
    
    container: {
      backgroundColor: '#fff',
      bottom: "12%",
      left: "6%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
      width: "100%",
    }, 
  
    abovePlaceholder: {
      bottom: "85%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    },
    
    belowPlaceholder: {
      bottom: "80%",
      left: "10%"
    },
  
    input: {
      color: 'black',
      bottom: "92%",
      left: "7%",
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: "86%"  
    },
  
    button: {
      left: "12.5%",
      borderRadius: 100,
      backgroundColor: '#00B17B',
      width: "75%",
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
  
export default Passport;
