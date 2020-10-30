import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

const bill = ({navigation}) => {

    const pressHandler = () => {
        navigation.navigate('screen38')
    }

    return (
        <View style={{height: "100%", width: "100%", backgroundColor: '#2E94F9'}}>

            <TouchableOpacity onPress={pressHandler} style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.text}>Send A Bill</Text>
                </View>
                <View>
                    <Text style={{color: '#00B17B', top: "45%", textAlign: "center"}}>{'--------------------------------------------------------------'}</Text>
                </View>
                <View style={styles.upper}>
                    <Text style={styles.text}>Send A Quote</Text>
                </View>
            </TouchableOpacity>

            <View style={{top: "70%"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>

                </TouchableOpacity>
            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    card:{
        width: "76%",
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        top: "60%",
        left: "12%"
    },
    upper: {
        top: "12%",
    },
    text: {
        color: '#667680',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center"
    },
    button: {
        left: "12.5%",
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        width: "75%",
        height: 50
      },
    
      buttonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#667680',
        top: "17%"
      }
})

export default bill