import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const log = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('screen28')
  }

  const pressHandler2 = () => {
    navigation.navigate('screen29')
  }

  const pressHandler3 = () => {
    navigation.navigate('screen1')
  }
  
    return (
        
      <View style={{backgroundColor: '#00B17B', height: "100%"}}>     

      <View style={{top: "6%", left: "37.5%", height: "28.2%"}}>
            <Image
                style={{height: "49.5%", width: "25.9%"}}
                source={require('../../Icons/LogoOut.png')}>
            </Image>
      </View>

      <View style={{bottom: "6%"}}>
        <Text style={{fontSize: 55, fontWeight: "bold", color: 'white', textAlign: 'center'}}>DostiHealth</Text>
      </View>
      
      <View style={{flexDirection: "row", top: "8.5%"}}>
        <View style={{flex:1}}>
          <TouchableOpacity onPress={pressHandler3} style={{left: "31%", bottom: "200%"}}>
          <Text style={{color: '#80D8BD', fontSize: 20}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity style={{left:"44%", bottom: "200%"}}>
            <Text style={{color: '#FFF' , fontSize: 20}}>Log In</Text>    
          </TouchableOpacity>
        </View>
      </View>

        <View style={{left: "5%", top: "5%"}}>
          <Text style={styles.abovePlaceholder}>Aadhaar/Email/Address</Text>
            <TextInput 
              style={styles.input} 
              placeholder="        contact@mycompany.com"
            ></TextInput>
        </View>

        <View style={{left: "5%", top: "8%"}}>
          <Text style={styles.abovePlaceholder}>Password</Text>
            <TextInput 
              style={styles.input} 
              placeholder="        **********************"
            ></TextInput>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={pressHandler2}>
            <Text style={styles.buttonText}>Log In</Text>

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
    },
  
    abovePlaceholder: {
      color: 'white',
      fontSize: 18, 
      left: "8%",
      paddingBottom: "1%"
    }, 
  
    input: {
      color: 'black',
      fontSize: 16,
      backgroundColor: 'white',
      borderRadius: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: "90%"  
    },
  
    button: {
      top: "70%",
      borderRadius: 100,
      backgroundColor: 'white',
      width: "60%",
      height: "27%",
      left: "20%"
    },
  
    buttonText: {
      fontSize: 20,
      textAlign:"center",
      fontWeight: 'bold',
      color: '#00B17B',
      top: "18%"
    }
  
  });


export default log