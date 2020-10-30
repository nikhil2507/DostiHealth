import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';


const surgery = ({navigation}) => {
    const pressHandler = () => {
        navigation.navigate('screen40');
    }

    const pressHandler10 = () => {
        navigation.navigate('screen42')
      }

      const pressHandler11 = () => {
        navigation.navigate('screen43')
      }

      const pressHandler12 = () => {
        navigation.navigate('screen52')
      }


      const pressHandler13 = () => {
        navigation.navigate('screen53')
      }

      const pressHandler14 = () => {
        navigation.navigate('screen54')
      }

    return (
        <View style={{height: "100%", width: "100%"}}>
                <Image
                    style={styles.cardImageOne}
                    source={require('../../Icons/bar.png')}>
                </Image>

            <TouchableOpacity onPress={pressHandler12} style={styles.card}>
                <Text style={styles.textTop}>
                    Knee Surgery
                </Text>
                <Image
                        style={{top: "10.5%", left: "7%", height: "47%", width: "11.5%"}}
                        source={require('../../Icons/Warranty_Ortho.png')}>
                </Image>
                <Text style={styles.textRight}>
                    Rs 40,000
                </Text>
                <Text style={styles.textRightDown}>
                    Full Reimb
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandler13} style={styles.card}>
                <Text style={styles.textTop}>
                    Knee Replacement
                </Text>
                <Image
                        style={{top: "10.5%", left: "7%", height: "47%", width: "11.5%"}}
                        source={require('../../Icons/Warranty_Ortho.png')}>
                </Image>
                <Text style={styles.textRight}>
                    Rs 70,000
                </Text>
                <Text style={styles.textRightDown}>
                    Full Reimb
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={pressHandler14} style={styles.card}>
                <Text style={styles.textTop}>
                    Doctor Consultation
                </Text>
                <Image
                        style={{top: "10.5%", left: "7%", height: "45%", width: "11.5%"}}
                        source={require('../../Icons/hos1.png')}>
                </Image>
                <Text style={styles.textRight}>
                    Rs 10,000
                </Text>
                <Text style={styles.textRightDown}>
                    Full Reimb
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    cardOne: {
        height: "7%",
        width: "86%",
        backgroundColor: '#FFF',
        borderRadius: 30,
        top: "15%",
        left: "7%",
        color: '#667680',
    },
    card: {
        height: "14%",
        width: "86%",
        backgroundColor: '#FFF',
        borderRadius: 30,
        top: "20%",
        left: "7%",
        color: '#667680',
        marginBottom: "6%",
        elevation: 2
    },
    cardImageOne: {
        height: "7%",
        width: "90%",
        top: "10%",
        left: "4%"
    },
    textTop: {
        fontSize: 16,
        color: '#667680',
        fontWeight: 'bold',
        top: "45%",
        left: "22.5%"
    },
    textDown: {
        fontSize: 10,
        color: '#667680',
        top: "14%",
        left: "23%"
    },
    textRight: {
        fontSize: 18,
        color: '#667680',
        bottom: "30%",
        left: "73%",
        fontWeight: 'bold'
    },
    textRightDown: {
        fontSize: 10,
        color: '#667680',
        bottom: "30%",
        left: "75%",
    },
    cardImageTwo: {
        top: "5%",
        left: "6%"
    },
})

export default surgery