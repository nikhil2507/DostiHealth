import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const selfinsuanceCoverage = ({ navigation }) => {


  const PressHandler = () => {
    navigation.navigate('screen24');
  }

    return (

    <View style={styles.page}>

      <View style={{top: "8%", left: "5%"}}>
        <Image
          source={require('../../Icons/cover.jpg')}>
        </Image>
      </View>
      
        <View style={styles.container}>
          <Text style={styles.text}>
            When do you
          </Text>
          <Text style={styles.text}>
            want to start your
          </Text>
          <Text style={styles.text}>
            Insurance Coverage?
          </Text>
        </View>

        <View style={{width: "100%"}}>
          <Text style={styles.abovePlaceholder}>Contract Starting Date*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="1 January 2021"
            ></TextInput>
        </View>

        <View style={{top: "42%"}}>
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
      top: "10%",
      left: "6%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
      marginBottom: "-1%"
    }, 
  
    abovePlaceholder: {
      top: "150%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    }, 
  
    input: {
      color: 'black',
      top: "140%",
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
  

export default selfinsuanceCoverage