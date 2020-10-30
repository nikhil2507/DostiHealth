import React from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const ifInsurance = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen8')
  }

    return (
      <View style={styles.page}>
        <Image style={{left: 20, top: 50}} source={require('../../Icons/start.jpg')}></Image>
    
          <View style={styles.container}>
              <Text style={styles.text}>
                  What is the Name of
              </Text>
              <Text style={styles.text}>
                  your Insurance
              </Text>
              <Text style={styles.text}>
                  company?
              </Text>
          </View>

          <View style={{paddingBottom: "3%", top: "1%"}}>
          <Text style={styles.abovePlaceholder}>Insurance Company Name*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Select Company"
            ></TextInput>
        </View>

        <View style={{paddingBottom: "3%"}}>
          <Text style={styles.abovePlaceholder}>Policy Number*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="XXXXXXXXXXXXX"
            ></TextInput>
        </View>
        
        <View style={{paddingBottom: "3%"}}>
          <Text style={styles.abovePlaceholder}>Last Date of Policy Renewal*</Text>
            <TextInput 
              style={styles.input} 
              placeholder="1 January 2021"
            ></TextInput>
        </View>


          <View style={{top: "21%"}}>
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
    top: "8%",
    left: "5%",
  },

  text : {
    backgroundColor: '#fff',
    color: '#334856',
    fontWeight: 'bold',
    fontSize: 35,
  }, 

  abovePlaceholder: {
    top: "90%",
    color: '#2E94F9',
    fontSize: 16, 
    left: "7%"
  },

  input: {
    color: 'black',
    top: "75%",
    left: "8%",
    fontSize: 16,
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#2E94F9' ,
    width: "84%"  
  },

  input1: {
    color: 'black',
    top: "55%",
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

export default ifInsurance
