import React, {useState} from 'react'
import {ScrollView, View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const selfBankAccount = ({navigation}) => {
  const [check, setCheck] = useState(false);
  
  const PressHandler = () => {
    navigation.navigate('screen1')
  }

  return (
    <View style={styles.page}>
     <View style={{top: "8%", left: "5%"}}>
     <Image source={require('../../Icons/last4.jpg')}></Image>
     </View>
    
      <View style={styles.container}>
        <Text style={styles.text}>
          Please Enter Your
        </Text>
        <Text style={styles.text}>
          Bank Account Details
        </Text>
      </View>

      <View style={{marginBottom: "2%"}}>
        <Text style={styles.abovePlaceholder}>Bank account Number*</Text>
          <TextInput 
            style={styles.input} 
            placeholder="XXXX-XXXX-XXXX-XXXX"
          ></TextInput>
      </View>

      <View style={{marginBottom: "2%"}}>
        <Text style={styles.abovePlaceholder}>Name as on Aadhaar Card</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Rajesh Kumar"
          ></TextInput>
      </View>

      <View style={{marginBottom: "2%"}}>
        <Text style={styles.abovePlaceholder}>Date of Signing</Text>
          <TextInput 
            style={styles.input} 
            placeholder="1 January 2021"
          ></TextInput>
      </View>

      <View style={{top: "14%"}}>
        <Text style={{textAlign: "center", fontSize: 15}}>
          Checking the Box below acts as a Digital
        </Text>
        <Text style={{textAlign: "center", fontSize: 15}}>Signature and authorizes recurring payments</Text>
      </View>

      <View style={{top: "12%"}}>
        <Text style={styles.abovePlaceholder}>Click this box to confirm E-Signature</Text>

      </View>

      <View style={styles.checkbox}>
          <CheckBox
            value={check}
            onValueChange={setCheck}
          />
      </View>


      <View style={{top: "15.5%"}}>
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
    top: "130%",
    color: '#2E94F9',
    fontSize: 16, 
    left: 25
  }, 

  input: {
    color: 'black',
    top: "120%",
    left: "8%",
    fontSize: 16,
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#2E94F9',
    width: "85%"   
  },

  button: {
    left: "10%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "80%",
    height: 50,
    elevation: 3
  },

  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
    top: "15%"
  },

  
  checkbox: {
    top: "12.25%",
    left: "85%"
  }
  

});


export default selfBankAccount
