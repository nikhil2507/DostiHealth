import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, ImageBackground} from 'react-native';


const Location = ({navigation}) => {
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
    
    //   const pressHandler5 = () => {
    //     navigation.navigate('screen34')
    //   }
    
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
            <ImageBackground style={styles.image} source={require('../../Icons/nm.png')} />
            <View style={styles.bot}>
                <TouchableOpacity onPress={pressHandler4} style={styles.botImageOne}>
                    <Image
                        source={require('../../Icons/claim2.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B',}}>CLAIM</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.botImageTwo}>
                    <Image
                        source={require('../../Icons/loc1.png')}>
                    </Image>
                    <Text style={{fontSize: 8.5, color: '#00B17B', right: "2%",  fontWeight: "bold"}}>PROVIDER</Text>
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
    image: {
        flex: 1,
        height: "120%",
        bottom: "5%",
        left: "1%"
    },

    bot: {
        top: "2.5%",
        backgroundColor: '#FFF',
        height: 84,
        width: "100%",
        borderRadius: 20,
        elevation: 5
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
  });

export default Location