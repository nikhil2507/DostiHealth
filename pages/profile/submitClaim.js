import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';


const submitClaim = ({navigation}) => {

    const pressHandler1 = () => {
        navigation.navigate('screen38')
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
        navigation.navigate('screen42')
      }

      const pressHandler10 = () => {
        navigation.navigate('screen43')
      }

    return (
        <View style={{height: "100%", width: "100%"}}>
            <View style={{backgroundColor: "#FFF", borderRadius: 20, bottom: "3%", height: "15%", elevation: 5}}>
                <View style={{top: "40%", left: "85%"}}>
                    <Image
                        source={require('../../Icons/up.png')}>
                    </Image>
                    <TouchableOpacity onPress={pressHandler10} style={{left: "2.5%", bottom: "50%"}}>
                        <Image
                            source={require('../../Icons/user.png')}>
                        </Image>
                    </TouchableOpacity>   
                </View>
                <View style={{right: "5%", bottom: "13%"}}>
                    <Image
                        source={require('../../Icons/right.png')}>
                    </Image>
                    <TouchableOpacity onPress={pressHandler9} style={{left: "12%", bottom: "35%", width: "10%"}}>
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
                <View style={styles.container}>
                    <Text style={styles.text}>Submit a new claim</Text>
                </View>
                <TouchableOpacity onPress={pressHandler1} style={styles.card}>
                    <Image
                        style={{top: "9.5%", left: "7%", height: "65%", width: "11.3%"}}
                        source={require('../../Icons/claim1.png')}>
                    </Image>
                    <Text style={styles.cardText}>Send A Document</Text>
                    <Text style={styles.cardTextBelow}>Bills, quotes ...</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler1} style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/hos1.png')}>
                    </Image>
                    <Text style={styles.cardText}>Submit Expenses Estimate</Text>
                    <Text style={styles.cardTextBelow}>Before going to hospital</Text>
                </TouchableOpacity>
            </View>
            


            <View style={{top: "5%"}}>
                <View style={styles.container}>
                    <Text style={styles.text}>Interact with DostiHealth</Text>
                </View>
                <TouchableOpacity onPress={pressHandler2} style={styles.card}>
                    <Image
                        style={{top: "9.5%", left: "7%", height: "68%", width: "11.3%"}}
                        source={require('../../Icons/history1.png')}>
                    </Image>
                    <Text style={styles.cardText}>Track Interaction History</Text>
                    <Text style={styles.cardTextBelow}>Follow up of your interactions with us.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler3} style={styles.card}>
                    <Image
                        style={{top: "9.5%", left: "7%", height: "68%", width: "11.3%"}}
                        source={require('../../Icons/q1.png')}>
                    </Image>
                    <Text style={styles.cardText}>Ask a Question</Text>
                    <Text style={styles.cardTextBelow}>Answered in just a few minutes</Text>
                </TouchableOpacity>
            </View>

            <View style={{top: "10%"}}>
                <View style={styles.container}>
                    <Text style={styles.text}>Share the love</Text>
                </View>
                <View style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/heart1.png')}>
                    </Image>
                    <Text style={styles.cardText}>1 Free month for your Friends</Text>
                    <Text style={styles.cardTextBelow}>Between 500 to 1000 Rs for you</Text>
                </View>
            </View>
            <View style={styles.bot}>
                <TouchableOpacity style={styles.botImageOne}>
                    <Image
                        source={require('../../Icons/claim.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', fontWeight: "bold"}}>CLAIM</Text>
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
                        source={require('../../Icons/warranty.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', top: "5%", right: "2.5%"}}>WARRANTY</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        bottom: "10%",
        left: "7%"
    },
    text:{
        color: '#00B17B',
        fontSize: 30,
        fontWeight: 'bold',
        top: "30%"
    },
    
    card: {
        height: 45,
        width: "86%",
        borderRadius: 50,
        top: "12.5%",
        left: "7%",
        backgroundColor: '#FFFFFF',
        borderColor: 'grey',
        marginBottom: "3%",
        elevation: 2
    },

    cardImage: {
        top: "12.5%",
        left: "7%",
        height: "65%",
        width: "12%"

    },

    cardText: {
        bottom: "55%",
        fontSize: 16,
        left: "25%"
    },
    
    cardTextBelow: {
        bottom: "57%",
        fontSize: 10,
        left: "25%"
    },

    bot: {
        top: "17%",
        backgroundColor: '#FFF',
        height: 84,
        width: "100%",
        borderRadius: 20
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
        bottom: "450%",
        left: "86%"
    }

})

export default submitClaim
