import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';


const CompanyNum = ({navigation}) => {

    const PressHandler = () => {
        navigation.navigate('screen6')
    }

    return (
      <View style={styles.page}>
        <View style={{top: "8%", left: "6%"}}>
          <Image
            source={require('../../Icons/comNum.jpg')}>
          </Image>
        </View>
        
        <View style={styles.container}>
            <Text style={styles.text}>
              What is your
            </Text>
            <Text style={styles.text}>
              Company number?
            </Text>
        </View>

        <View>
          <Text style={styles.abovePlaceholder}>Company Number*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="XXXXXXXXXXXXXXXXXX"
            ></TextInput>
            <Text style={styles.belowPlaceholder}>6 characters Minimum</Text>
        </View>

        <View style={styles.info}>
            <Text style={{fontSize: 16, textAlign: "center", color: "#0000EE" }}>{"Don't know how to find the number? Click\nhere to learn how to find the number"}</Text>
          </View>
  
        <View style={{top: "44%"}}>
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
      width: "100%",
    }, 
  
    abovePlaceholder: {
      top: "95%",
      color: '#2E94F9',
      fontSize: 16, 
      left: "7%"
    },
    
    belowPlaceholder: {
      top: "95%",
      left: "10%",
      color: 'grey'
    },

    info: {
        top: "18%",
      },
      input: {
        color: 'black',
        top: "90%",
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
  
export default CompanyNum
  