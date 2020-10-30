import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ScrollView} from 'react-native';

const price = ({navigation}) => {
    const pressHandler = () => {
        navigation.navigate('screen41');
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
    
      const pressHandler11 = () => {
        navigation.navigate('screen29')
      }

      const pressHandler12 = () => {
        navigation.navigate('screen45')
      }

      const pressHandler13 = () => {
        navigation.navigate('screen44')
      }

        const pressHandler14 = () => {
        navigation.navigate('screen46')
      }

    return (
        <View>
            <View style={{backgroundColor: "#FFF", borderRadius: 20, bottom: "4%", height: "37%",elevation: 5}}>
                <View style={{top: "35%", left: "85%"}}>
                    <Image
                        source={require('../../Icons/up.png')}>
                    </Image>
                    <TouchableOpacity onPress={pressHandler10} style={{left: "2.5%", bottom: "50%"}}>
                        <Image
                            source={require('../../Icons/user.png')}>
                        </Image>
                    </TouchableOpacity>   
                </View>
                <View style={{right: "5%", bottom: "22%"}}>
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
                <View style={{bottom: "120%", left: "41.5%"}}>
                    <Image
                        source={require('../../Icons/LayerOne.png')}>
                    </Image>
                </View>
            </View>
        {/* <ScrollView> */}
        <View style={{height: "100%", flex: 1}}>
                <Text style={styles.heading}>April 2020</Text>
                <TouchableOpacity onPress={pressHandler} style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/tooth1.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            April 12, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Dentist
                        </Text>
                        <Text>
                            For Hemant
                        </Text>
                        <Text style={styles.textRight}>
                            Rs 700
                        </Text>
                        <Text style={styles.textRightDown}>
                            Full Reimb
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={pressHandler12} style={styles.card}>
                    <Image
                        style={styles.cardImageTwo}
                        source={require('../../Icons/steth1.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            April 08, 2020 4:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Doctor
                        </Text>
                        <Text>
                            for Hemant
                        </Text>
                        <Text style={styles.textRight}>
                            Rs 600
                        </Text>
                        <Text style={styles.textRightDown}>
                            Full Reimb
                        </Text>
                    </View>
                   
                </TouchableOpacity>
                {/* <Text style={{color: '#00B17B', top: "15%", textAlign: "center"}}>-------------------------------------------------------------------------------------</Text> */}
                
                <Text style={styles.headingTwo}>March 2020</Text>
                <TouchableOpacity onPress={pressHandler13} style={styles.card}>
                    <Image
                        style={styles.cardImageThree}
                        source={require('../../Icons/med1.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 12, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Medicine
                        </Text>
                        <Text>
                            For Hemant
                        </Text>
                        <Text style={styles.textRight}>
                            Rs 600
                        </Text>
                        <Text style={styles.textRightDown}>
                            Full Reimb
                        </Text>
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity onPress={pressHandler14} style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/tooth1.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 11, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Dentist
                        </Text>
                        <Text>
                            For Hemant
                        </Text>
                        <Text style={styles.textRight}>
                            Rs 600
                        </Text>
                        <Text style={styles.textRightDown}>
                            Full Reimb
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.card}>
                    <Image
                        style={styles.cardImage}
                        source={require('../../Icons/medicine.png')}>
                    </Image>
                    <View style={styles.FirstText}>
                        <Text>
                            March 11, 2020 7:19 PM
                        </Text>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Doctor
                        </Text>
                        <Text>
                            for Anish
                        </Text>
                        <Text style={styles.textRight}>
                            Rs 600
                        </Text>
                        <Text style={styles.textRightDown}>
                            Full Reimb
                        </Text>
                    </View>
                </TouchableOpacity> */}
            {/* </ScrollView> */}
            <View style={styles.bot}>
                <TouchableOpacity onPress={pressHandler11} style={styles.botImageOne}>
                    <Image
                        source={require('../../Icons/claim2.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', }}>CLAIM</Text>
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
                        source={require('../../Icons/Diary1.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', left: ".2%", fontWeight: "bold", top: "2%"}}>DIARY</Text>
                </TouchableOpacity>
                </View>

                <View>
                <TouchableOpacity onPress={pressHandler7} style={styles.botImageFive}>
                    <Image
                        source={require('../../Icons/warranty.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', top: "3%", right: "2.5%"}}>WARRANTY</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
        {/* </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        top: "5%",
        fontSize: 25,
        color: '#00B17B',
        left: "7%",
        fontWeight: 'bold'
    },
    headingTwo: {
        top: "10%",
        fontSize: 25,
        color: '#00B17B',
        left: "7%",
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: '#FFF',
        height: "55%",
        width: "86%",
        borderRadius: 20,
        top: "15%",
        left: "7%",
        marginBottom: 15,
        elevation: 2
    },
    cardImage: {
        top: "20%",
        left: "3%",
        height: 56,
        width: 50
    },

    cardImageTwo: {
        top: "20%",
        left: "3%",
        height: 51,
        width: 50
    },
    cardImageThree: {
        top: "20%",
        left: "3%",
        height: 53,
        width: 50
    },

    FirstText: {
        bottom: "50%",
        left: "23%",
        fontSize: 10,
        color: '#667680' 
    },
    textRight: {
        fontSize: 18,
        color: '#667680',
        bottom: "50%",
        left: "58%",
        fontWeight: 'bold'
    },
    textRightDown: {
        fontSize: 10,
        color: '#667680',
        bottom: "50%",
        left: "58%",
    },
    
    bot: {
        top: "31%",
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
        bottom: "341%",
        left: "67.5%"
    },

    botImageFive:{
        bottom: "451%",
        left: "86%"
    }

})

export default price