import React from 'react';
import {View, Text, Button, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const splash = ({navigation}) => {
    const pressHandler = () => {
        navigation.navigate('screen1')
      }

    return (
        <View>
            <TouchableOpacity onPress={pressHandler} style={{height: "100%", backgroundColor: '#00B17B'}}>
                <View style={{top: "27%", left: "26.5%"}}>
                    <Image
                        style={{width: "47%", height: "50.5%"}}
                        source={require('../Icons/LogoOut.png')}>
                    </Image>
                </View>
                <View style={{ top: "5%"}}>
                    <Text style={{fontSize: 50, color: '#FFF', fontWeight: 'bold', textAlign: 'center'}}>DostiHealth</Text>
                </View>

            </TouchableOpacity>
        </View>
       
    )
}

export default splash;
