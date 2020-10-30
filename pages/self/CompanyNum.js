import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';


const CompanyNum = ({}) => {
    return (
      <View style={styles.page}>

      <View>
        <Image
          style={{top: 55, left: 20}}
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

        <View style={{paddingBottom: 15}}>
          <Text style={styles.abovePlaceholder}>Company Number*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="XXXXXXXXXXXXXXXXXX"
            ></TextInput>
            <Text style={styles.belowPlaceholder}>6 characters Minimum</Text>
        </View>

  
        <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>continue</Text>
  
            </TouchableOpacity>
          </View>

          <View style={styles.info}>
            <Text style={{fontSize: 18 
            }}>{"Don't know how to find the number? Click\nhere to learn how to find the number"}</Text>
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
      top: 105,
      left: 40,
      color: 'grey'
    },

    info: {
        top: 70,
        left: 40,
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
      top: 380,
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
  
export default CompanyNum
  