import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const face = ({navigation}) => {

    
//   const PressHandler = () => {
//     navigation.navigate('screen');
//   }

    return (
        <View style={{height: "100%", width: "100%"}}>
            <View style={styles.box}>
                {/* <View style={styles.text}>
                    <Text style={{color: "white", fontSize: 24, fontWeight: 'bold'}}>Royal Tomar</Text>
                    <Text style={{color: "white", fontSize: 14}}>4876 5637 7821 1998</Text>
                </View> */}
                    <Image
                        style={{width: "94%", height: "51%"}}  
                        source={require('../../Icons/Cardv2.png')}>
                    </Image>
            </View>

            <View style={{bottom: "25%"}}>
                <Text style={styles.underText}>
                    Show this card to obtain insurance
                </Text>
                <Text style={{top: "125%", textAlign: "center"}}>
                    at any of our partners
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Partner List</Text>
                </TouchableOpacity>
            </View>      

            <View style={{bottom: "25%"}}> 
                <View style={{paddingBottom: "2%"}}>
                    <Text style={styles.abovePlaceholder}>Aadhar Number</Text>
                    <Text style={styles.belowPlaceholder}>0000 0000 0000 0000</Text>
                </View>
                <View style={{paddingBottom: "2%"}}>
                    <Text style={styles.abovePlaceholder}>First Name</Text>
                    <Text style={styles.belowPlaceholder}>Royal</Text>
                </View>
                <View style={{paddingBottom: "2%"}}>
                    <Text style={styles.abovePlaceholder}>Last Name</Text>
                    <Text style={styles.belowPlaceholder}>Tomar</Text>
                </View>
                <View style={{paddingBottom: "2%"}}>
                    <Text style={styles.abovePlaceholderT}>Address</Text>
                    <Text style={styles.belowPlaceholderT}>{'A-105, Freedom Fighter Enclave, \nNeb Sarai, IGNOU ROAD \nNew Delhi - 110068'}</Text>
                </View>
            </View>
                

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        left: "3%",
        top: "10%",
        borderRadius: 10
    },
    text: {
        top: "60%",
        left: "7%"
    },
    underText: {
        top: "120%",
        textAlign: "center"
    },
    button: {
        top: "150%",
        left: "25%",
        borderRadius: 100,
        backgroundColor: '#00B17B',
        width: "48%",
        height: 40,
        elevation: 3
      },
      buttonText: {
        fontSize: 20,
        textAlign:"center",
        fontWeight: 'bold',
        color: 'white',
        top: "10%"
      },
      abovePlaceholder: {
        top: "340%",
        color: '#2E94F9',
        fontSize: 16, 
        left: "7%"
      },
      belowPlaceholder: {
          color: '#707070',
          top: "340%",
          left: "7%",
          fontWeight: 'bold'
      } ,

      abovePlaceholderT: {
        top: "200%",
        color: '#2E94F9',
        fontSize: 16, 
        left: "7%"
      },
      belowPlaceholderT: {
          color: '#707070',
          top: "200%",
          left: "7%",
          fontWeight: 'bold'
      } 
})

export default face;