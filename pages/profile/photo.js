import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground} from 'react-native';

const photo = ({navigation}) => {
    
    const pressHandler1 = () => {
        navigation.navigate('screen29')
      }

    return (
        <View style={{height: "100%", width: "100%", backgroundColor: '#2E94F9'}}>
            <ImageBackground style={styles.image} source={require('../../Icons/bg.png')}>

            <View style={{top: "10%"}}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.TopText}>Help</Text>
                    <Text style={styles.downText}>What documents can you upload?</Text>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/in.png')}>
                    </Image>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <View style={styles.upper}>
                    <Text style={styles.text}>TAKE A PHOTO</Text>
                </View>
                <View>
                    <Text style={{color: '#00B17B', top: "45%", textAlign: "center"}}>{'--------------------------------------------------------------------'}</Text>
                </View>
                <View style={styles.upper}>
                    <Text style={styles.textTwo}>UPLOAD FROM GALLERY</Text>
                </View>
            </View>
            <View style={{top: "65%"}}>
                <TouchableOpacity style={styles.button} onPress={pressHandler1}>
                    <Text style={styles.buttonText}>CANCEL</Text>
                </TouchableOpacity>
            </View>
</ImageBackground>

        </View>

    )
}

const styles = StyleSheet.create({
    card:{
        width: "76%",
        height: 90,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        top: "59%",
        left: "12%"
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
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
    textTwo: {
        color: '#667680',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center"
    },
    button: {
        left: "14%",
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        width: "75%",
        height: 50
      },
    
      buttonText: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: 'bold',
        color: '#667680',
        top: "26%"
      },
      TopText: {
        fontSize: 16,
        left: "20%",
        fontWeight: 'bold',
        color: '#667680',
        top: "10%"
      },
      downText: {
        fontSize: 10,
        left: "20%",
        color: '#667680',
        top: "10%"
      },
      cardImage: {
        bottom: "50%",
        left: "4%"
    },
})

export default photo