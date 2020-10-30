import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';


const dropTwo = () => {
    return (
        <View style={{height: "100%", backgroundColor: "#FBFCFF"}}>
            <View style={styles.card}>
                <View>
                    <Text style={styles.text}>DostiHealth</Text>
                    <Text style={styles.textBelowTwo}>Premium Care 24/7</Text>
                    <Text style={styles.textBelow}>{'This line is for our gold member customers and offers\nexclusive services such as emergency services, travel\nhealth partners and more! Use this page to contact your healthcare concierge right away!'}</Text>                
                        
                        <Image
                            style={styles.cardImageTwo}
                            source={require('../../Icons/Nina.png')}>
                        </Image>
                        
                        {/* <Image
                            style={styles.cardImageThree}
                            source={require('../../Icons/ralph.png')}>
                        </Image> */}
                        <Text style={{fontSize: 16, color: '#FFF', top: "60%", left: "47%"}}>Nina</Text>
                    
                        <Image
                            style={styles.cardImage}
                            source={require('../../Icons/Group2.png')}>
                        </Image>
                    </View>
                </View>
                <View style={{bottom: "5%"}}>
                    <Image
                        style={{height: "55%", width: "100%"}}
                        source={require('../../Icons/ConciergeChat.png')}>
                    </Image>
                </View>
                <View style={{bottom: "28%",width: "86%", left: "2%"}}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="       Start a Conversation"
                    ></TextInput>
                    <Image
                    style={{left: "103%", bottom: "50%"}}
                        source={require('../../Icons/camera.png')}>
                    </Image>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F2BF19',
        bottom: "7%",
        height: "65%",
        width: "100%",
        borderRadius: 50,
        elevation: 5
    },
    text: {
        fontSize: 20,
        color: '#FFF',
        top: "30%",
        textAlign: "center",
        fontWeight: 'bold'
    },
    textBelow: {
        fontSize: 13,
        color: '#FFF',
        top: "40%",
        textAlign: "center"
    },
    textBelowTwo: {
        fontSize: 18,
        color: '#FFF',
        top: "30%",
        textAlign: "center",
        fontWeight :'bold'
    },
    cardImageOne: {
        bottom: "63.5%",
        left: "19%"
    },
    cardImageTwo: {
        height: "21%",
        width: "15%",
        top: "55%",
        left: "44%"
    },
    cardImageThree: {
        bottom: "74%",
        left: "46.5%"
    },
    cardImage: {
        top: "70%",
        left: "17%"
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 20,
    }
})

export default dropTwo