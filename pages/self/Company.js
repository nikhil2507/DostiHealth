import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


const Company = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen5')
  }
    return (
      <View style={styles.page}>
        
        <View style={styles.container}>
            <Text style={styles.text}>
              What's your
            </Text>
            <Text style={styles.text}>
              Company's name?
            </Text>
        </View>

        <View style={{paddingBottom: 15}}>
          <Text style={styles.abovePlaceholder}>First Name*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Marie"
            ></TextInput>
        </View>
        
        <View style={{paddingBottom: 15}}>
          <Text style={styles.abovePlaceholder}>Last Name*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Curie"
            ></TextInput>
        </View>

  
        <View>
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
      height: 1000,
      width: 500
    },
    
    container: {
      backgroundColor: '#fff',
      top: 80,
      left: 20
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
      height: 45,
      width: 300,
    }, 
  
    abovePlaceholder: {
      top: 110,
      color: '#2E94F9',
      fontSize: 16, 
      left: 25
    },
    
    belowPlaceholder: {
      top: 155,
      left: 40
    },
  
    input: {
      color: 'black',
      top: 100,
      left: 35,
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: 350   
    },
  
    button: {
      top: 320,
      left: 60,
      borderRadius: 100,
      backgroundColor: '#00B17B',
      width: 300,
      height: 50
    },
  
    buttonText: {
      fontSize: 20,
      left: 110,
      fontWeight: 'bold',
      color: 'white',
      top: 10
    }
  
  });
  
export default Company
  