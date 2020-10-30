import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const discussion = () => {
    return (
        <ScrollView>
        <View style={{height: 800, flex: 1}}>
                <Text style={styles.heading}>April 2020</Text>
                <View style={styles.card}>
                    <Image
                        style={{top: "32.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/Dr.Sethi.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            April 12, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Dr.Sethi
                        </Text>
                        <Text>
                            Emergency Discussion
                        </Text>
                    </View>
                    <View style={styles.RightText}>
                        <Text>
                            {'Dialysis \nHeart-Burn'}
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={{top: "32.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/Paul.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            April 08, 2020 4:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Paul
                        </Text>
                        <Text>
                            Payment Question
                        </Text>
                    </View>
                    <View style={styles.RightText}>
                        <Text>
                            {'Card \nDeclined'}
                        </Text>
                    </View>
                </View>
                <Text style={{color: '#00B17B', top: "8%", textAlign: "center"}}>-------------------------------------------------------------------------------------</Text>
                
                <Text style={styles.headingTwo}>March 2020</Text>
                <View style={styles.card}>
                    <Image
                        style={{top: "32.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/Dr.Menon.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 12, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Dr.Menon
                        </Text>
                        <Text>
                            Emergency Discussion
                        </Text>
                    </View>
                    <View style={styles.RightText}>
                        <Text>
                            {'Surgery\nHeart-Burn'}
                        </Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        style={{top: "32.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/George.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 11, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            George
                        </Text>
                        <Text>
                            For Child 1
                        </Text>
                    </View>
                    <View style={styles.RightText}>
                        <Text>
                            {'Adding Child \nto the claim'}
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Image
                        style={{top: "32.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/Andrew.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 11, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Andrew
                        </Text>
                        <Text>
                            for Spouse
                        </Text>
                    </View>
                    <View style={styles.RightText}>
                        <Text>
                            {'Add Spouse \nto claim'}
                        </Text>
                    </View>
                </View>
            {/* </ScrollView> */}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        top: "6%",
        fontSize: 25,
        color: '#00B17B',
        left: "5.5%",
        fontWeight: 'bold'
    },
    headingTwo: {
        top: "8%",
        fontSize: 25,
        color: '#00B17B',
        left: "5.5%",
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#FFF',
        height: 97,
        width: "94%",
        borderRadius: 20,
        top: "10%",
        left: "3%",
        marginBottom: "6%",
        elevation: 2
    },
    cardImage: {
        top: "25%",
        left: "2.5%"
    },
    FirstText: {
        bottom: "40%",
        left: "23%",
        fontSize: 10,
        color: '#667680' 
    },
    RightText: {
        bottom: "105%",
        left: "75%",
        color: '#667680'
    }
})

export default discussion