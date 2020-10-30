import React from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const QuesAndDetails = ({ navigation }) => {


  const PressHandler = () => {
    navigation.navigate('screen14')
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
                {'Your Insurance with DostiHealth will start \n01/01/2020 and your cost will be 125 \nrupees per month.'}
            </Text>
            </View>

            <View style={{bottom: "2%"}}>
              <View> 
                  <TouchableOpacity style={styles.largeButton}>
                  <Image style={{left: "8%", top: "20%"}} source={require('../../Icons/last1.png')}></Image>
                      <Text style={styles.largeButtonText}>Coverage Details</Text>
                      <Text style={{color: 'white', bottom: "36%", left: "25%", fontSize: 10}}>Understand what your plan covers</Text>
                  </TouchableOpacity>  
              </View>

              <View style={{top: "15%"}}>
                  <TouchableOpacity style={styles.largeButton}>
                  <Image style={{left: "8%", top: "20%"}} source={require('../../Icons/last2.png')}></Image>
                      <Text style={styles.largeButtonText2}>Terms & Conditions</Text>
                      <Text style={{color: 'white', bottom: "36%", left: "25%", fontSize: 10}}>T&C when signing with DostiHealth</Text>
                  </TouchableOpacity>  
              </View>
            </View>
                        

            <View style={{top: "6.25%", left: "6%", height: "10%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'Documents to read before signature\n(everything is sent by email)'}
                </Text>
            </View>

            <View style={{bottom: "1%"}}> 
                <TouchableOpacity style={styles.largeButton}>
                <Image style={{left: "8%", top: "20%"}} source={require('../../Icons/last3.png')}></Image>
                    <Text style={styles.largeButtonText}>Your Company's Contract</Text>
                    <Text style={{color: 'white', bottom: "36%", left: "25%", fontSize: 10}}>Your policy details</Text>
                </TouchableOpacity>  
            </View>

            <View style={{top: "5%", left: "6%", height: "7%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'As you may know, the contract must be \nsigned (during the registration).'}
                </Text>
            </View>

            <View style={{top: "4%", left: "6%", height: "7%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'The contract is concluded as soon as it is\non this page have a commercial purpose'}
                </Text>
            </View>

            <View style={{top: "4%", left: "6%", height: "7%"}}>
                <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                {'The minimal commitment is 12 months\n(except exceptional case). The conditions of\nyour contract are guarantees during this \nperiod.'}
                </Text>
            </View>

            <View style={{top: "7%", height: 350}}>
              <View style={{left: "6%", height: "30%"}}>
                    <Text style={{backgroundColor: '#fff',color: '#334856',fontSize: 16}}>
                    {'Fees are payable every month by automatic\nwithdrawal'}
                    </Text>
              </View>

            
              <View style={{bottom: "2%"}}>
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
      height: "1000%"
    },
    
    container: {
      backgroundColor: '#fff',
      top: "6%",
      left: "5%"
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
      height: 45,
      width: "80%",
    }, 

    Undertext : {
        top: "2%",
        paddingTop: 15,
        backgroundColor: '#fff',
        color: '#334856',
        fontSize: 17,
        height: 145,
        width: "90%",
    },

    largeButton: {
        top: "60%",
        left: "5%",
        borderRadius: 100,
        backgroundColor: '#00B17B',
        width: "90%",
        height: 70,
        elevation: 3
    },
  
    button: {
      left: "13%",
      borderRadius: 100,
      backgroundColor: '#00B17B',
      width: "74%",
      height: "40%",
      elevation: 3
    },

    largeButtonText: {
      fontSize: 20,
      left: "24%",
      fontWeight: 'bold',
      color: 'white',
      bottom: "34%"
    },

    largeButtonText2: {
      fontSize: 20,
      left: "24%",
      fontWeight: 'bold',
      color: 'white',
      bottom: "34%"
    },      
    
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
      color: 'white',
      top: "17%"
    }
  
  });
  

export default QuesAndDetails