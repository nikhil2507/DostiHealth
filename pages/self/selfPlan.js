import React, { useState } from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';
const selfPlan = ({navigation}) => {
  const [overlayB, setOverlayB] = useState(false);
  const [overlayS, setOverlayS] = useState(false);
  const [overlayG, setOverlayG] = useState(false);

  const PressHandler = () => {
    navigation.navigate('screen25');
  }

  return (
    <View style={styles.page}>
      <View style={{left: "6%", top: "7%"}}>
      <Image source={require('../../Icons/insu1.jpg')}></Image>

      </View>      
      <View style={styles.container}>
          <Text style={styles.text}>
            Which Plan
          </Text>
          <Text style={styles.text}>
            would you like to
          </Text>
          <Text style={styles.text}>
            go for?
          </Text>   
      </View>

      <View style={{top: "14%"}}>
          <TouchableOpacity onPress={PressHandler} style={styles.button}>
          <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/bronze.png')}></Image>
            <Text style={styles.buttonText}>Bronze</Text>
            <Text style={{color: 'white', left: "30%", bottom: "37%", fontSize: 12}}>Our Entry Level Program</Text>
            <View style={{bottom: "95%", left: "15%"}}>
              <TouchableOpacity onPress={ () => setOverlayB(true)} style={{top: "40%", left: "70%"}}>
                <Image style={{height: "50%", width: "5%"}} source={require('../../Icons/icn.png')}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>



      <View style={{paddingTop: "5%", top: "14%"}}>
          <TouchableOpacity onPress={PressHandler} style={styles.button}>
          <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/silver.png')}></Image>
            <Text style={styles.buttonText}>Silver</Text>
            <Text style={{color: 'white', left: "30%", bottom: "37%", fontSize: 12}}>Our Mid-Range Program</Text>
            <View style={{bottom: "95%", left: "15%"}}>
              <TouchableOpacity onPress={ () => setOverlayS(true)} style={{top: "40%", left: "70%"}}>
                <Image style={{height: "50%", width: "5%"}} source={require('../../Icons/icn.png')}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>

      <View style={{paddingTop: "5%", top: "14%"}}>
          <TouchableOpacity onPress={PressHandler} style={styles.button}>
          <Image style={{left: "8%", top: "23%"}} source={require('../../Icons/gold.png')}></Image>
            <Text style={styles.buttonText}>Gold</Text>
            <Text style={{color: 'white', left: "30%", bottom: "37%", fontSize: 12}}>Our Premium Program</Text>
            <View style={{bottom: "95%", left: "15%"}}>
              <TouchableOpacity onPress={ () => setOverlayG(true)} style={{top: "40%", left: "70%"}}>
                <Image style={{height: "50%", width: "5%"}} source={require('../../Icons/icn.png')}></Image>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
      </View>
      
      {
        overlayB ? <View style={styles.overlay}>
              <TouchableOpacity style={styles.cross} onPress={() => setOverlayB(false)}><Text style={{color: "#FFF", fontSize: 20}} >X</Text></TouchableOpacity>
              <Image
                style={{bottom:"25%", height: "8.5%", width: "16%"}}
                source={require('../../Icons/br.png')}
                ></Image>
                <Text style={{color: "#FFF", fontSize: 16, bottom: "23%"}}>
                  Dosti Bronze
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, bottom: "15%"}}>
                  Sum Insured:                                              3 L
                </Text>     
                <Text style={{color: "#FFF", fontSize: 14, bottom: "10%"}}>
                  CoPay OPD:                                            100%
                </Text> 
                <Text style={{color: "#FFF", fontSize: 14, bottom: "6%"}}>
                  CoPay Inpatient:                                      10%
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, bottom: "1%"}}>
                Pre-existing Conditions:    1 year exclusion
                </Text>  
                <Text style={{color: "#FFF", fontSize: 14, top: "5%"}}>
                Maternity Benefits:                  Not Available
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "10%"}}>
                Cost for Individual:                          Rs.5,352 
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "15%"}}>
                  Cost for Family:                             Rs.10,854
                </Text>
            </View>: null
      }
        
      {
        overlayS ? <View style={styles.overlay}>
              <TouchableOpacity style={styles.cross} onPress={() => setOverlayS(false)}><Text style={{color: "#FFF", fontSize: 20}} >X</Text></TouchableOpacity>
              <Image
                style={{bottom:"25%", height: "8.5%", width: "16%"}}
                source={require('../../Icons/si.png')}
                ></Image>
                <Text style={{color: "#FFF", fontSize: 16, bottom: "23%"}}>
                  Dosti Silver
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, bottom: "15%"}}>
                  Sum Insured:                                    5L & 10L
                </Text>     
                <Text style={{color: "#FFF", fontSize: 14, bottom: "10%"}}>
                  CoPay OPD:                                              50%
                </Text> 
                <Text style={{color: "#FFF", fontSize: 14, bottom: "6%"}}>
                  CoPay Inpatient:                                        0%
                </Text>  
                <Text style={{color: "#FFF", fontSize: 14, bottom: "1%"}}>
                Pre-existing Conditions:         No Exclusion
                </Text>  
                <Text style={{color: "#FFF", fontSize: 14, top: "5%"}}>
                Maternity Benefits:                         Available
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "10%"}}>
                Cost for Individual:                          Rs.7,646 
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "15%"}}>
                  Cost for Family:                             Rs.15,505
                </Text>
            </View>: null
      }

      {
        overlayG ? <View style={styles.overlay}>
              <TouchableOpacity style={styles.cross} onPress={() => setOverlayG(false)}><Text style={{color: "#FFF", fontSize: 20}} >X</Text></TouchableOpacity>
              <Image
                style={{bottom:"25%", height: "8.5%", width: "16%"}}
                source={require('../../Icons/go.png')}
                ></Image>
                <Text style={{color: "#FFF", fontSize: 16, bottom: "23%"}}>
                  Dosti Gold
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, bottom: "15%"}}>
                  Sum Insured:              10L, 25L, 50L & 100L
                </Text>     
                <Text style={{color: "#FFF", fontSize: 14, bottom: "10%"}}>
                  CoPay OPD:                                              20%
                </Text> 
                <Text style={{color: "#FFF", fontSize: 14, bottom: "6%"}}>
                  CoPay Inpatient:                                        0%
                </Text>  
                <Text style={{color: "#FFF", fontSize: 14, bottom: "1%"}}>
                Pre-existing Conditions:         No Exclusion
                </Text>  
                <Text style={{color: "#FFF", fontSize: 14, top: "5%"}}>
                Maternity Benefits:                         Available
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "10%"}}>
                Cost for Individual:                          Rs.11,468 
                </Text>
                <Text style={{color: "#FFF", fontSize: 14, top: "15%"}}>
                  Cost for Family:                             Rs.23,258
                </Text>
            </View>: null
      }

    </View>
   
  );
};

const styles = StyleSheet.create({

  page: {
    backgroundColor: '#fff',
    height: "100%",
    width: "100%",
  },
  
  container: {
    backgroundColor: '#fff',
    top: "8%",
    left: "8%"
  },

  text : {
    backgroundColor: '#fff',
    color: '#334856',
    fontWeight: 'bold',
    fontSize: 35,
    width: "100%",
  }, 

  button: {
    left: "10%",
    borderRadius: 100,
    backgroundColor: '#00B17B',
    width: "80%",
    height: 70,
    elevation: 3
  },

  buttonText: {
    fontSize: 20,
    left: "30%",
    fontWeight: 'bold',
    color: 'white',
    bottom: "40%"
  },

  overlay: {
    flex: 1,
    position: "absolute",
    top: "10%",
    left: "10%",
    height: "80%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00B17B",
    opacity: 0.9,
    borderRadius: 30,
    elevation: 4
  },

  cross: {
    color: "#FFF",
    bottom: "25%",
    left:"40%"
  }

});

export default selfPlan
