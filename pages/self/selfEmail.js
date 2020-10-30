import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const selfEmail = ({ navigation }) => {


  const PressHandler = () => {
    navigation.navigate('screen16');
  }

    return (

    <View style={styles.page}>

      <View style={{top: "8%", left: "5%"}}>
        <Image
          style={{height: "35%", width: "22%"}}
          source={require('../../Icons/EmailAddress.png')}>
        </Image>
      </View>
      
        <View style={styles.container}>
          <Text style={styles.text}>
            What is your
          </Text>
          <Text style={styles.text}>
            Email Address?
          </Text>
        </View>

        <View style={{width: "100%"}}>
          <Text style={styles.abovePlaceholder}>E-Mail Address*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="royaltomar@gmail.com"
            ></TextInput>
        </View>

        <View style={{top: "28.5%"}}>
          <TouchableOpacity onPress={PressHandler} style={styles.button}>
            <Text style={styles.buttonText}>continue</Text>
          </TouchableOpacity>
        </View>

    </View> 

    )
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
      fontSize: 40,
    }, 
  
    abovePlaceholder: {
      bottom: "90%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    }, 
  
    input: {
      color: 'black',
      bottom: "90%",
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
  

export default selfEmail