import React, { useState } from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput, Image, Modal} from 'react-native';


const overlay = () => {

    const [overlay, setOverlay] = useState(false);

    return (
        <View style={styles.overlay}>
            <TouchableOpacity onPress={() => setOverlay(false)}><Text>X</Text></TouchableOpacity>
            <Text>Overlay</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        position: "absolute",
        top: "25%",
        left: "25%",
        height: "50%",
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        opacity: 0.8
      }

})

export default overlay