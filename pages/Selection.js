import React from 'react';
import {View, Text, Button, TouchableOpacity,Image, StyleSheet, TextInput} from 'react-native';

const Selection = ({navigation}) => {

  const pressHandler = () => {
    navigation.navigate('screen2')
  }

  const pressHandler2 = () => {
    navigation.navigate('screen15')
  }

  const pressHandler3 = () => {
    navigation.navigate('screen28')
  }
    return (
        
    <View style={{backgroundColor: '#00B17B', height: "100%"}}>     

      <View style={{top: "6%", left: "37.5%", height: "28.2%"}}>
            <Image
                style={{height: "49%", width: "25.9%"}}
                source={require('../Icons/LogoOut.png')}>
            </Image>
      </View>

      <View style={{bottom: "6%"}}>
        <Text style={{fontSize: 55, fontWeight: "bold", color: 'white', textAlign: 'center'}}>DostiHealth</Text>
      </View>
      
      <View style={{flexDirection: "row", top: "8.5%"}}>
        <View style={{flex:1}}>
          <TouchableOpacity style={{left: "31%", bottom: "200%"}}>
          <Text style={{color: '#FFF', fontSize: 20}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
          <TouchableOpacity  onPress={pressHandler3} style={{left:"44%", bottom: "200%"}}>
            <Text style={{color: '#80D8BD' , fontSize: 20}}>Log In</Text>    
          </TouchableOpacity>
        </View>
        {/* <View>
        <Image
            style={{height: "2%", width: "2.9%"}}
            source={require('../Icons/sh.png')}>
            </Image>
        </View> */}
      </View>

      {/* Bottom Half */}
      <View style={{flexDirection:"row", top: "20%"}}>
        <View style={{flex:1, bottom:"19%"}}>
          <Text style={{textAlign: "center", color: 'white', fontSize: 20, top:"10%"}}> Create A New Account </Text>
          <Text style={{textAlign: "center", color: '#e8eded', fontSize: 16}}> ------------------------------------- </Text>
          <Text style={{textAlign: "center", color: '#e8eded', fontSize: 12, bottom: "8%"}}> Choose an option according to your need </Text>
        </View>
      </View>

      {/* Links */}
      <View style={{top: "7.5%"}}>
          <View style={{left: "12%"}}>
            <TouchableOpacity onPress={pressHandler2} style={{borderWidth: 1, borderColor:"white", height: "38%", width: "76%", borderRadius: 100}}>
              <Text style={{color: "white", fontSize: 16, textAlign: "center", top: "15%"}}>SELF-EMPLOYED</Text>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{bottom: "21%"}}>
          <View style={{left: "12%"}}>
            <TouchableOpacity onPress={pressHandler2} style={{borderWidth: 1, borderColor:"white", height: "38%", width: "76%", borderRadius: 100}}>
              <Text style={{color: "white", fontSize: 16, textAlign: "center", top: "15%"}}>EMPLOYEE OF A COMPANY</Text>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{bottom: "49.5%"}}>
          <View style={{left: "12%"}}>
            <TouchableOpacity onPress={pressHandler2} style={{borderWidth: 1, borderColor:"white", height: "38%", width: "76%", borderRadius: 100}}>
              <Text style={{color: "white", fontSize: 16, textAlign: "center", top: "15%"}}>OTHERS</Text>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{bottom: "78%"}}>
          <View style={{left: "12%"}}>
            <TouchableOpacity onPress={pressHandler} style={{borderWidth: 1, borderColor:"white", height: "38%", width: "76%", borderRadius: 100}}>
              <Text style={{color: "white", fontSize: 16, textAlign: "center", top: "15%"}}>CORPORATE</Text>
            </TouchableOpacity>
          </View>
      </View>

    </View>
    );
};

export default Selection