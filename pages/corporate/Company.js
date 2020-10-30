import React from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';


const Company = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen5')
  }
    return (
      <View style={styles.page}>
        
      <View style={{top: "8%", left: "6%"}}>
        <Image
          
          source={require('../../Icons/com.jpg')}>
        </Image>
      </View>

        
        <View style={styles.container}>
            <Text style={styles.text}>
              What's your
            </Text>
            <Text style={styles.text}>
              Company's name?
            </Text>
        </View>

        <View>
          <Text style={styles.abovePlaceholder}>Company Name*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="XYZ Corporation"
            ></TextInput>
        </View>

  
        <View style={{top: "55%"}}>
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
      top: "10%",
      left: "6%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
    }, 
  
    abovePlaceholder: {
      top: "150%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    },
    input: {
      color: 'black',
      top: "150%",
      left: "7%",
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#94C7FC' ,
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
  
export default Company
  