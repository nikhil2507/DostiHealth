import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';


const selfAddAAdhar = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen21')
  }
    return (
        <View style={styles.page}>
                 <View style={{top: "8%", left: "3%"}}>
          <Image 
            style={{height: "32.5%", width: "20%"}}
            source={require('../../Icons/family.png')
          }>
          </Image>
        </View>
          
          <View style={styles.container}>
              <Text style={styles.text}>
                Do you want to add
              </Text>
              <Text style={styles.text}>
                family members to
              </Text>
              <Text style={styles.text}>
                your plan?
              </Text>
          </View>
    
          <View style={{bottom: "14%",paddingBottom: "2.5%", paddingTop: "2.5%"}}>
            <Text style={{textAlign: "center"}}>
              Please select the other members to add
            </Text>
          </View>
    
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', bottom: "50%", left: "8%", paddingBottom: "3%"}}>Spouse</Text>
            <Image
              style={{bottom: "71%", left: "85%"}}
              source={require('../../Icons/plus.png')}>
            </Image>
            <Text style={styles.abovePlaceholder}>Spouse's Aadhaar Number*</Text>
            <Image
              style={{bottom: "71%", left: "84.3%"}}
              source={require('../../Icons/scan.png')}>
            </Image>
              <TextInput 
                style={styles.input} 
                placeholder="  0000 0000 0000 0000"
              ></TextInput>
          </View>
    
          <View style={{bottom: "7%"}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', bottom: "50%", left: "8%", paddingBottom: "3%"}}>Children</Text>
            <Image
              style={{bottom: "72%", left: "85%"}}
              source={require('../../Icons/plus.png')}>
            </Image>
            <Text style={styles.abovePlaceholder}>Child's 1 Aadhaar Number*</Text>
            <Image
              style={{bottom: "72%", left: "84.3%"}}
              source={require('../../Icons/scan.png')}>
            </Image>
              <TextInput 
                style={styles.input} 
                placeholder="  0000 0000 0000 0000"
              ></TextInput>
          </View>
      
          <View style={{bottom: "20%"}}>
              <TouchableOpacity onPress={PressHandler} style={styles.button}>
                <Text style={styles.buttonText}>continue</Text>
    
              </TouchableOpacity>
            </View>
    
        </View>
       
      );
    };
    
    const styles = StyleSheet.create({
    
      page: {
        backgroundColor: '#fff',
        height: "100%",
        width: "100%"
      },
      
      container: {
        backgroundColor: '#fff',
        bottom: "14%",
        left: "6%"
      },
    
      text : {
        backgroundColor: '#fff',
        color: '#334856',
        fontWeight: 'bold',
        fontSize: 35,
        width: "100%",
      }, 
    
      abovePlaceholder: {
        bottom: "73%",
        color: '#2E94F9',
        fontSize: 16, 
        left: "8%"
      },
    
    
      input: {
        color: 'black',
        bottom: "93%",
        left: "8%",
        fontSize: 16,
        borderColor: 'red',
        borderBottomWidth: 1,
        borderBottomColor: '#94C7FC' ,
        width: "84%" 
      },
    
      button: {
        left: "15%",
        borderRadius: 100,
        backgroundColor: '#00B17B',
        width: "70%",
        height: 50,
        elevation: 3
      },
    
      buttonText: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: 'bold',
        color: 'white',
        top: "15%"
      }
    
    });
export default selfAddAAdhar;