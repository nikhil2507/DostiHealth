import React,{ Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import { RNCamera } from 'react-native-camera'

class aadharScan extends Component {
  state = {
    barcodes: []
  }

  renderBarcodes = () => (
    <View>{this.state.barcodes.map(this.renderBarcode)}</View>
  )

  renderBarcode = ({ data }) =>
  Alert.alert(
    'Scanned Data',
    data,
    [
      {
        text: 'Okay',
        onPress: () => console.log('Okay Pressed'),
        style: 'cancel'
      }
    ],
    { cancelable: false }
  )
  
  barcodeRecognized = ({ barcodes }) => {
    barcodes.forEach(barcode => console.log(barcode.data))
    this.setState({ barcodes })
  }

  render() {
    return (
      <View style={{height: "100%", backgroundColor: "#FFF"}}>

        <View style={{top: "7%", left: "4%"}}>
            <Image
              style={{ height: "32%", width: "17%"}}
              source={require('../../Icons/b.png')}>
            </Image>
        </View>

        <View style={{bottom: "13%", left: "5%"}}>
          <Text style={styles.text}>
            Aadhaar QR Scanner
          </Text>
        </View>
        <View style={styles.container}>
          <RNCamera
            captureAudio = {false}
            style={{alignItems: 'center', height: "50%", width: "50%" }}
            ref={ref => {
              this.camera = ref
            }}
            style={styles.scanner}
            onGoogleVisionBarcodesDetected={this.barcodeRecognized}>
            {this.renderBarcodes}
          </RNCamera>
        </View>

        <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('screen19')} style={styles.button}>
          <Text style={styles.buttonText}>continue</Text>
        </TouchableOpacity>
      </View>


      </View>

    )
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'black',
    height: "50%", 
    width: "50%",
    bottom: "10%",
    left: "25%"
  },
    
    scanner: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    text : {
      backgroundColor: '#fff',
      color: '#334856',
      fontWeight: 'bold',
      fontSize: 35
    }, 
  
  
    button: {
      left: "7%",
      borderRadius: 100,
      backgroundColor: '#00B17B',
      width: "86%",
      height: 50,
      elevation: 3
    },
  
    buttonText: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: 'bold',
      color: 'white',
      top: "17%"
    }
  
  });
  


export default aadharScan;