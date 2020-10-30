import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const medicine = () => {
    return (
        <View style={{height: "100%", width: "100%"}}>
            <Image
                style={styles.image}
                source={require('../../Icons/med1.png')}>
            </Image>
            <Text style={styles.upText}>{'Expenses of March 12, 2020 7:19 PM \n                                            For Hemant'}</Text>
            <Text style={styles.textRight}>
                Medicine
            </Text>
            <Text style={styles.downText}>Generalist</Text>

            <View style={styles.cardTwo}>
                <View>
                    <Text style={styles.headingOne}>
                        Total Expenses
                    </Text>
                    <Text style={styles.priceOne}>
                        Rs 600
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.headingTwo}>
                        Total Reimb.
                    </Text>
                    <Text style={styles.priceTwo}>
                        Rs 600
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.headingThree}>
                        Reimb. Rate
                    </Text>
                    <Text style={styles.priceThree}>
                        100%
                    </Text>
                </View>
            </View>

            <View style={{backgroundColor: '#FFF', width: "80%", height: 41, borderRadius: 40, right: "3%", elevation: 2}}>
                <Text style={{color: '#2E94F9', fontSize: 16, left: "8%", top: "20%"}}>Reimbursement by Bank Transfer</Text>
                <Text style={{color: '#334856', fontSize: 13, left: "9%", top: "65%"}}>Authorised the 05/04/2020</Text>                
            </View>

            <View style={{backgroundColor: '#FFF', width: "70%", height: 41, borderRadius: 40, right: "3%", top: "7%", elevation: 2}}>
                <Text style={{color: '#2E94F9', fontSize: 16, left: "8%", top: "20%"}}>The Reimbursement Amount</Text>
            </View>

            <View>
                <Image
                    style={styles.cardImage}
                    source={require('../../Icons/dark.png')}>
                </Image>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/green.png')}>
                </Image>
            </View>

            <View style={styles.cardBox}>
                <Image  
                    source={require('../../Icons/greenBox.png')}>
                </Image>
                <Text style={{fontSize: 10, color: '#667680'}}>DostiHealth</Text>
                <Text style={{fontSize: 18, color: '#334856', fontWeight: 'bold'}}>Rs 600</Text>
            </View>
            <View style={styles.cardBoxTwo}>
                <Image  
                    source={require('../../Icons/darkBox.png')}>
                </Image>
                <Text style={{fontSize: 10, color: '#667680', left: "5%"}}>You</Text>
                <Text style={{fontSize: 18, color: '#334856', fontWeight: 'bold', left: "2%"}}>Rs 0</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        top: "12%",
        left: "4%",
        height: 104,
        width: 98
    },
    upText: {
        left: "34%"
    },
    textRight: {
        fontSize: 35,
        color: '#334856',
        left: "59%",
        fontWeight: 'bold'
    },
    downText: {
        left: "82%",
        color: '#334856',
        fontSize: 13
    },
    cardTwo: {
        top: "5%",
        left: "5%"
    },
    headingOne: {
        fontSize: 10,
        color: '#667680'
    },
    priceOne: {
        fontSize: 18,
        color: '#334856',
        fontWeight: 'bold',
        left: "1%"
    },

    
    headingTwo: {
        fontSize: 10,
        color: '#667680',
        bottom: "100%",
        left: "37%"
    },
    priceTwo: {
        fontSize: 18,
        color: '#334856',
        fontWeight: 'bold',
        left: "37%",
        bottom: "100%"
    },
    
    headingThree: {
        fontSize: 10,
        color: '#667680',
        left: "75%",
        bottom: "200%"
    },
    priceThree: {
        fontSize: 18,
        color: '#334856',
        fontWeight: 'bold',
        left: "77%",
        bottom: "200%"
    },

    cardImage: {
        top: "139%",
        left: "4%"
    },

    cardImageTwo: {
        top: "83%",
        left: "8%"
    },

    cardBox: {
        top: "12.3%",
        left: "28%"
    },

    cardBoxTwo: {
        bottom: "0.7%",
        left: "60%"
    },
    
})

export default medicine