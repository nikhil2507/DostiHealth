import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'

const aadharScanDone = ({navigation}) => {

    const PressHandler = () => {
        navigation.navigate('screen19')
    }

    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Text style={styles.text}>Aadhar Scan Done</Text>
        </View>
        <View>
          <TouchableOpacity onPress={PressHandler} style={styles.button}>
            <Text style={styles.buttonText}>continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({

    page: {
      backgroundColor: '#fff',
      height: 1000,
      width: 500
    },
    
    container: {
      backgroundColor: '#fff',
      top: 90,
      left: 20
    },
  
    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35,
      height: 45,
      width: 500,
    }, 
  
    abovePlaceholder: {
      top: 120,
      color: '#2E94F9',
      fontSize: 16, 
      left: 25
    }, 
  
    input: {
      color: 'black',
      top: 120,
      left: 35,
      fontSize: 16,
      borderColor: 'red',
      borderBottomWidth: 1,
      borderBottomColor: '#2E94F9' ,
      width: 350   
    },
  
    button: {
      top: 530,
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
  


export default aadharScanDone