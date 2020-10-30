import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const one = () => {
    return (
        <View style={{height: "100%", width: "100%"}}>
            <Image
                style={styles.image}
                source={require('../../Icons/tooth1.png')}>
            </Image>
            <Text style={styles.textRight}>
                Dentist
            </Text>
            <Text style={styles.downText}>Generalist</Text>

            <View style={styles.cardTwo}>
                <View>
                    <Text style={styles.headingOne}>
                        Total Insurance Coverage
                    </Text>
                    <Text style={styles.priceOne}>
                        Upto Rs 70,000
                    </Text>
                </View>
                
                <View>
                    <Text style={styles.headingTwo}>
                        Reimb. Rate
                    </Text>
                    <Text style={styles.priceTwo}>
                        Upto 100%
                    </Text>
                </View>
            </View>

            <View style={{backgroundColor: '#FFF',top:"7%", width: "80%", height: 41, borderRadius: 40, right: "3%", elevation: 2}}>
                <Text style={{color: '#2E94F9', fontSize: 16, left: "8%", top: "20%"}}>Reimbursement by Bank Transfer</Text>
                <Text style={{color: '#334856', fontSize: 14, left: "16%", top: "70%"}}>Lorem Ipsum is simply dummy text of the printing and 
typesetting industry. Lorem Ipsum has been the industry's
 standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it 
to make a type specimen book. It has survived not only 
five centuries, but also the leap into electronic typesetting,
 remaining essentially unchanged.</Text>                
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        top: "12%",
        left: "7%",
        height: 98,
        width: 88
    },
    upText: {
        left: "36%"
    },
    textRight: {
        fontSize: 35,
        color: '#334856',
        left: "67%",
        fontWeight: 'bold'
    },
    downText: {
        left: "82%",
        color: '#334856',
        fontSize: 13
    },
    cardTwo: {
        top: "8%",
        left: "5%"
    },
    headingOne: {
        left: "12.5%",
        fontSize: 10,
        color: '#667680'
    },
    priceOne: {
        fontSize: 18,
        color: '#334856',
        fontWeight: 'bold',
        left: "11%"
    },

    
    headingTwo: {
        fontSize: 10,
        color: '#667680',
        bottom: "100%",
        left: "59%"
    },
    priceTwo: {
        fontSize: 18,
        color: '#334856',
        fontWeight: 'bold',
        left: "55%",
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

export default one