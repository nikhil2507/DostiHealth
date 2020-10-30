import React, {useState} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, Switch} from 'react-native';

const Salary = ({navigation}) => {

  const PressHandler = () => {
    navigation.navigate('screen11')
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabledT, setIsEnabledT] = useState(false);
  const toggleSwitchT = () => setIsEnabledT(previousState => !previousState);

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
                How much of the
              </Text>
              <Text style={styles.text}>
                  Insurance cost do you
              </Text>
              <Text style={styles.text}>
                  want to cover?
              </Text>
          </View>

          <View>
              <Text style={styles.abovePlaceholder}>Percentage*</Text>
              <TextInput 
                  style={styles.input} 
                  placeholder="20% to 100%"
              ></TextInput>
          </View>

          <View style={{bottom: "7%"}}>
              <Text style={{fontSize: 16, textAlign: "center"}}>Will this plan cover rest of the family?</Text>
          </View>

          <View style={{ bottom: "4%" }}>
              <Text style={{fontWeight: 'bold', fontSize: 22, left: "6%", color: '#334856' }}>Spouses</Text>
            {/* <TouchableOpacity style={{bottom:"32%", left: "60%", color: 'white',backgroundColor: '#00B17B', borderRadius: 100, height: 35, width: 70}}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 22, left: 15}}>Yes</Text></TouchableOpacity> */}
            <View style={{bottom: "45%", right: "3%"}}>
            <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled ? "#00B17B" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
            </View>
          </View>
          
          <View style={{ bottom: "4%" }}>
              <Text style={{fontWeight: 'bold', fontSize: 22, left: "6%", color: '#334856'}}>Children</Text>
              {/* <TouchableOpacity style={{bottom:"32%", left: "50%", color: 'white',backgroundColor: '#334856', borderRadius: 100, height: 35, width: 70}}><Text style={{color: 'white', fontWeight: 'bold', fontSize: 22, left: 18}}>No</Text></TouchableOpacity> */}
              <View style={{bottom: "45%", right: "3%" }}>
            <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabledT ? "#00B17B" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitchT}
                value={isEnabledT}
            />
            </View>
          </View>
          
          <View style={{top: "5%"}}>
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
    bottom: "13%",
    left: "4.5%"
  },

  text : {
    backgroundColor: '#fff',
    color: '#334856',
    fontWeight: 'bold',
    fontSize: 35,
    width: "100%",
  }, 

  abovePlaceholder: {
    bottom: "110%",
    color: '#2E94F9',
    fontSize: 16, 
    left: "7%"
  },

  input: {
    color: 'black',
    bottom: "100%",
    left: "7%",
    fontSize: 16,
    borderColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#94C7FC' ,
    width: "86%"
  },

  button: {
    left: "12.5%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "75%",
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

export default Salary
