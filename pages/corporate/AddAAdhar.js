import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


const AddAAdhar = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen6')
  }
    return (
        <View style={styles.page}>
          
          <View style={styles.container}>
              <Text style={styles.text}>
                Do you want to add
              </Text>
              <Text style={styles.text}>
                family members to
              </Text>
              <Text style={styles.text}>
                your plan?
              </Text>
          </View>
    
          <View style={{top: 60, left: 80, paddingBottom: 10, paddingTop: 10}}>
            <Text>
              Please select the other members to add
            </Text>
          </View>
    
          <View style={{paddingBottom: 25}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', top: 70, left: 45, paddingBottom: 15}}>Spouse</Text>
            <Text style={styles.abovePlaceholder}>Spouse's Aadhar Number*</Text>
              <TextInput 
                style={styles.input} 
                placeholder="0000 0000 0000 0000"
              ></TextInput>
          </View>
    
          <View style={{paddingBottom: 25}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', top: 70, left: 45, paddingBottom: 15}}>Children</Text>
            <Text style={styles.abovePlaceholder}>Child's 1 Aadhar Number*</Text>
              <TextInput 
                style={styles.input} 
                placeholder="0000 0000 0000 0000"
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
        top: 50,
        left: 40
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
        top: 60,
        color: '#2E94F9',
        fontSize: 16, 
        left: 45
      },
      
      belowPlaceholder: {
        top: 155,
        left: 40
      },
    
      input: {
        color: 'black',
        top: 70,
        left: 55,
        fontSize: 16,
        borderColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: '#2E94F9' ,
        width: 350   
      },
    
      button: {
        top: 90,
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
export default AddAAdhar;