import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';


const drop = () => {
    return (
        <View style={{height: "100%", backgroundColor: "#FBFCFF"}}>
            <View>
                <View style={styles.card}>

                    <Text style={styles.text}>DostiHealth</Text>
                    <Text style={styles.textBelow}>{'We are here to answer your questions about\n    DostiHealth. You can also contact us by \nemail at ..@dostihealth.com'}</Text>
                        <Image
                            style={styles.cardImageOne}
                            source={require('../../Icons/Andrew.png')}>
                        </Image>
                        <Text style={{fontSize: 16, color: '#FFF', top: "34.3%", left: "18%"}}>Andrew</Text>
                        <Image
                            style={styles.cardImageTwo}
                            source={require('../../Icons/George.png')}>
                        </Image>
                        <Text style={{fontSize: 16, color: '#FFF', top: "16.7%", left: "43.5%"}}>George</Text>
                        <Image
                            style={styles.cardImageThree}
                            source={require('../../Icons/Paul.png')}>
                        </Image>
                        <Text style={{fontSize: 16, color: '#FFF', bottom: "1%", left: "71%"}}>Paul</Text>
                        <Image
                            style={styles.cardImage}
                            source={require('../../Icons/Group1.png')}>
                        </Image>
                    </View>
            </View>

                <View style={{bottom: "20%"}}>
                    <Image
                        style={{height: "55%", width: "100%"}}
                        source={require('../../Icons/HelpChat.png')}>
                    </Image>
                </View>

                <View style={{bottom: "43%",width: "86%", left: "2%"}}>
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
        backgroundColor: '#00B17B',
        bottom: "7%",
        height: "80%",
        width: "100%",
        borderRadius: 50,
        elevation: 5
    },
    text: {
        fontSize: 20,
        color: '#FFF',
        top: "15%",
        textAlign: "center",
        fontWeight: 'bold'
    },
    textBelow: {
        fontSize: 16,
        color: '#FFF',
        top: "20%",
        textAlign: "center"
    },
    cardImageOne: {
        height: "13%",
        width: "16%",
        top: "34%",
        left: "17%"
    },
    cardImageTwo: {
        height: "13%",
        width: "16%",
        top: "16%",
        left: "42%"
    },
    cardImageThree: {
        height: "13%",
        width: "16%",
        bottom: "1.8%",
        left: "67%"
    },
    cardImage: {
        top: "10%",
        left: "22%"
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 20,
    }
})

export default drop