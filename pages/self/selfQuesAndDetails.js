import React, {useState} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const selfQuesAndDetails = ({ navigation }) => {
  const [check, setCheck] = useState(false);

  const PressHandler = () => {
    navigation.navigate('screen26')
  }

    return (
    <View style={styles.page}>
      <ScrollView>
        <View style={{top: "4%", left: "6%"}}>
          <Image source={require('../../Icons/last4.jpg')}></Image>
        </View>        

            <View style={styles.container}>
              <Text style={styles.text}>
                  The Last Step!
              </Text>
              <Text style={styles.Undertext}>
                  {'Your Insurance with DostiHealth will start on \n01/01/2020 and your cost will be 1250 \nrupees per month'}
              </Text>
            </View>

            <View style={{top: "1.5%"}}>
              <View style={{paddingBottom: "7%"}}> 
                  <TouchableOpacity style={styles.largeButton}>
                  <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/last1.png')}></Image>
                      <Text style={styles.largeButtonText}>Coverage Details</Text>
                      <Text style={{color: 'white', bottom: "30%", left: "25%", fontSize: 10}}>Understand what your plan covers</Text>
                  </TouchableOpacity>  
              </View>

              <View>
                  <TouchableOpacity style={styles.largeButton}>
                  <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/last2.png')}></Image>
                      <Text style={styles.largeButtonText2}>Terms & Conditions</Text>
                      <Text style={{color: 'white', bottom: "30%", left: "25%", fontSize: 10}}>T&C when signing with DostiHealth</Text>
                  </TouchableOpacity>  
              </View>
            </View>
            

            <View style={{top: "6%", left: "6%", height: "10%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 18}}>
                {'Documents to read before signature\n(everything is sent by email)'}
                </Text>
            </View>

            <View style={{bottom: "3%"}}> 
                <TouchableOpacity style={styles.largeButton}>
                <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/last3.png')}></Image>
                    <Text style={styles.largeButtonText}>Your Contract</Text>
                    <Text style={{color: 'white', bottom: "30%", left: "25%", fontSize: 10}}>Your policy details</Text>
                </TouchableOpacity>  
            </View>

            <View style={{top: "1.5%", left: "6%", height: "4.5%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'As you may know, the information written\nont his page have a commercial purpose'}
                </Text>
            </View>

            <View style={{top: "1.5%", left: "6%", height: "0%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'The contract is concluded as soon as it is\nsigned electronically on this screen'}
                </Text>
            </View>

            <View style={{top: "6%", left: "6%", height: "7%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'The minimal commitment is 12 months\n(except exceptional case). The conditions of\nyour contract are guarantees during this \nperiod.'}
                </Text>
            </View>

            <View style={{top: "6.5%"}}>
              <View style={{bottom: "0%", left: "6%", height: "0%"}}>
                    <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                    {'Fees are payable every month by automatic\nwithdrawal'}
                    </Text>
              </View>
              
              <View style={{height: 600}}>
                <View style={{top: "10%", right: "1%",marginBottom: "2%"}}>
                  <Text style={styles.abovePlaceholder}>Name as on Aadhaar Card</Text>
                  <TextInput 
                    style={styles.input} 
                    placeholder="Rajesh Kumar"
                  ></TextInput>
                </View>

                <View style={{top: "13%", right: "1%", marginBottom: "2%"}}>
                  <Text style={styles.abovePlaceholder}>Date of Signing</Text>
                    <TextInput 
                      style={styles.input} 
                      placeholder="1 January 2021"
                    ></TextInput>
                </View>

                <View style={{top: "15%"}}>
                  <Text style={{textAlign: "center", fontSize: 15}}>
                    Checking the Box below acts as a Digital
                  </Text>
                  <Text style={{textAlign: "center", fontSize: 15}}>Signature and authorizes recurring payments</Text>
                </View>

                <View style={{top: "20%"}}>
                  <Text style={styles.abovePlaceholder}>Click this box to confirm E-Signature</Text>
                </View>
                <View style={styles.checkbox}>
                  <CheckBox
                    value={check}
                    onValueChange={setCheck}
                    />
                </View>
                </View>

                <View style={{bottom: "21%"}}>
                  <TouchableOpacity onPress={PressHandler} style={styles.button}>
                      <Text style={styles.buttonText}>proceed to payment</Text>
                  </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    </View> 

    );
};

const styles = StyleSheet.create({

    page: {  
      flex: 1,  
      backgroundColor: '#fff',
      width: "100%",
      height: "100%"
    },
    
    container: {
      backgroundColor: '#fff',
      top: "4%",
      left: "6%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 33,
      width: "100%",
    }, 

    Undertext : {
      top: "1%",
      backgroundColor: '#fff',
      color: '#334856',
      fontSize: 17,
      width: "100%",
    },

    largeButton: {
        top: "60%",
        left: "5%",
        borderRadius: 100,
        backgroundColor: '#00B17B',
        width: "90%",
        elevation: 3
    },

    
  abovePlaceholder: {
    top: "0%",
    color: '#2E94F9',
    fontSize: 16, 
    left: "7%"
  }, 

  input: {
    color: 'black',
    top: "0%",
    left: "8%",
    fontSize: 16,
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#2E94F9',
    width: "85%"   
  },
  
  button: {
    left: "13%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "74%",
    height: 60,
    elevation: 3
  },

  largeButtonText: {
    fontSize: 20,
    left: "24%",
    fontWeight: 'bold',
    color: 'white',
    bottom: "28%"
  },

  largeButtonText2: {
    fontSize: 20,
    left: "24%",
    fontWeight: 'bold',
    color: 'white',
    bottom: "28%"
  },      
  
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    color: 'white',
    top: "20%"
  },

  checkbox: {
    top: "15.75%",
    left: "85%"
  }
  
  });
  

export default selfQuesAndDetails