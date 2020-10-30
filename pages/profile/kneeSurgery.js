import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const kneeSurgery = () => {
    return (
        <View style={{height: "100%", width: "100%"}}>
            <View style={styles.image}>
                <Image
                    source={require('../../Icons/orthopedics.png')}>
                </Image>
            </View>
            
            <Text style={styles.textRight}>
                Knee Surgery
            </Text>

            <View style={styles.cardTwo}>
                <Text style={styles.text}>
                {'Information about Glasses \nand Partners.Lorem ipsum \ndolor sit amet, consectetur \nadipiscing elit. hasellus \nlobortis et leo quis \npellentesque abilisque ante.'}
                </Text>
                <Text style={styles.textRightDown}>
                    Rs 40,000
                </Text>
                <Text style={styles.textRightDownToo}>
                    Full Reimb
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        top: "20%",
        left: "7%",
        height: "4%",
        width: "4%"
    },
    textRight: {
        fontSize: 24,
        color: '#667680',
        top: "15%",
        left: "35%",
        fontWeight: 'bold'
    },
    textRightDown: {
        fontSize: 24,
        color: '#334856',
        bottom: "40%",
        left: "69%",
        fontWeight: 'bold'
    },
    cardTwo: {
        top: "16%",
    },
    text: {
        top: "20%",
        fontSize: 16,
        color: "#707070",
        left: "7%"
    }, 
    textRightDownToo: {
        fontSize: 10,
        color: '#667680',
        bottom: "40%",
        left: "80%",
    }
})

export default kneeSurgery