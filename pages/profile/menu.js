import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';


const menu = ( {navigation} ) => {

    const pressHandler1 = () => {
        navigation.navigate('screen30')
      }

      const pressHandler2 = () => {
        navigation.navigate('screen31')
      }

      const pressHandler3 = () => {
        navigation.navigate('screen32')
      }

      const pressHandler4 = () => {
        navigation.navigate('screen33')
      }
    
      const pressHandler5 = () => {
        navigation.navigate('screen34')
      }
    
      const pressHandler6 = () => {
        navigation.navigate('screen35')
      }

      const pressHandler7 = () => {
        navigation.navigate('screen36')
      }
    
      const pressHandler8 = () => {
        navigation.navigate('screen37')
      }

      const pressHandler9 = () => {
        navigation.navigate('screen39')
      }

      const pressHandler10 = () => {
        navigation.navigate('screen42')
      }

      const pressHandler11 = () => {
        navigation.navigate('screen43')
      }

      const pressHandler12 = () => {
        navigation.navigate('screen47')
      }

      const pressHandler13 = () => {
        navigation.navigate('screen48')
      }

      const pressHandler14 = () => {
        navigation.navigate('screen49')
      }

      const pressHandler15 = () => {
        navigation.navigate('screen50')
      }

      const pressHandler16 = () => {
        navigation.navigate('screen51')
      }

    return (
        <View style={{height: "100%", width: "100%"}}>
            <View style={{backgroundColor: "#FFF", borderRadius: 20, bottom: "3%", height: "15%", elevation: 5}}>
                <View style={{top: "40%", left: "85%"}}>
                    <Image
                        source={require('../../Icons/up.png')}>
                    </Image>
                    <TouchableOpacity onPress={pressHandler11} style={{left: "2.5%", bottom: "50%"}}>
                        <Image
                            source={require('../../Icons/user.png')}>
                        </Image>
                    </TouchableOpacity>   
                </View>
                <View style={{right: "5%", bottom: "13%"}}>
                    <Image
                        source={require('../../Icons/right.png')}>
                    </Image>
                    <TouchableOpacity onPress={pressHandler10} style={{left: "12%", bottom: "35%", width: "10%"}}>
                        <Image
                            style={{height: "52%", width: "60%"}}
                            source={require('../../Icons/stethoscope.png')}>
                        </Image>
                    </TouchableOpacity> 
                </View>
                <View style={{bottom: "105%", left: "41.5%"}}>
                    <Image
                        source={require('../../Icons/LayerOne.png')}>
                    </Image>
                </View>
            </View>
            <View>
                <TouchableOpacity onPress={pressHandler9}>
                    <Image
                    style={styles.cardImageOne}
                        source={require('../../Icons/bar.png')}>
                    </Image>
                </TouchableOpacity>
            </View>

                
            <TouchableOpacity onPress={pressHandler12} style={styles.card}>
                <Text style={styles.textTop}>
                    Dentist
                </Text>
                <Text style={styles.textDown}>
                    Lorem Ipsum dedo amir set
                </Text>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/tooth.png')}>
                </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler13} style={styles.card}>
                <Text style={styles.textTop}>
                    ENT Specialist
                </Text>
                <Text style={styles.textDown}>
                    Lorem Ipsum dedo amir set
                </Text>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/ear.png')}>
                </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler14} style={styles.card}>
                <Text style={styles.textTop}>
                    Orthopedician
                </Text>
                <Text style={styles.textDown}>
                    Lorem Ipsum dedo amir set
                </Text>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/orthopedics.png')}>
                </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler15} style={styles.card}>
                <Text style={styles.textTop}>
                    Cardiologist
                </Text>
                <Text style={styles.textDown}>
                    Lorem Ipsum dedo amir set
                </Text>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/heart.png')}>
                </Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={pressHandler16} style={styles.card}>
                <Text style={styles.textTop}>
                    Hospitalisation
                </Text>
                <Text style={styles.textDown}>
                    Lorem Ipsum dedo amir set
                </Text>
                <Image
                    style={styles.cardImageTwo}
                    source={require('../../Icons/hospital.png')}>
                </Image>
            </TouchableOpacity>

            <View style={styles.bot}>
                <TouchableOpacity onPress={pressHandler4} style={styles.botImageOne}>
                    <Image
                        source={require('../../Icons/claim2.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B'}}>CLAIM</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={pressHandler5} style={styles.botImageTwo}>
                    <Image
                        source={require('../../Icons/loc.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', right: "2%"}}>PROVIDER</Text>
                </TouchableOpacity>

                
                <TouchableOpacity onPress={pressHandler8} style={styles.botImageThree}>
                    <Image
                        style={{height: "94.7%", width: "23%"}}
                        source={require('../../Icons/prem1.png')}>
                    </Image>
                </TouchableOpacity>

                <View>
                <TouchableOpacity onPress={pressHandler6} style={styles.botImageFour}>
                    <Image
                        source={require('../../Icons/Diary.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', left: ".2%"}}>DIARY</Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity onPress={pressHandler7} style={styles.botImageFive}>
                    <Image
                        source={require('../../Icons/shield.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', right: "2.5%", fontWeight: "bold"}}>WARRANTY</Text>
                </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    cardOne: {
        height: "7%",
        width: "86%",
        backgroundColor: '#FFF',
        borderRadius: 30,
        left: "7%",
        color: '#667680',
    },
    card: {
        height: "7%",
        width: "86%",
        backgroundColor: '#FFF',
        borderRadius: 30,
        bottom: "25%",
        left: "7%",
        color: '#667680',
        marginBottom: "6%",
        elevation: 2
    },
    cardImageOne: {
        height: "40%",
        width: "90%",
        top: "5%",
        left: "4%"
    },
    textTop: {
        fontSize: 16,
        color: '#667680',
        fontWeight: 'bold',
        top: "27%",
        left: "22.5%"
    },
    textDown: {
        fontSize: 10,
        color: '#667680',
        top: "24%",
        left: "23%"
    },
    cardImageTwo: {
        bottom: "90%",
        left: "5%"
    },

    bot: {
        bottom: "15%",
        backgroundColor: '#FFF',
        height: 84,
        width: "100%",
        borderRadius: 20,
        elevation: 10
    },

    botImageOne:{
        top: "18%",
        left: "7%"
    },

    botImageTwo:{
        bottom: "37%",
        left: "27%"
    },

    botImageThree:{
        bottom: "140%",
        left: "38.3%"
    },

    botImageFour:{
        bottom: "345%",
        left: "67.5%"
    },

    botImageFive:{
        bottom: "439%",
        left: "86%"
    }



})

export default menu