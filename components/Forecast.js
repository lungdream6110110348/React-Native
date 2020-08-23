import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
export default function Forecast(props) {
    return (
    <View >
    <Text style={styles.textEditor} >{props.main} </Text>
    <Text style={styles.marText}>{props.description}</Text>
    <Text style={styles.marText}>{props.temp}°C</Text>
    </View>
    );
   }
   const styles = StyleSheet.create({
    textEditor:{
        fontSize: 40,
        alignItems: 'center',
        color:'green',
        fontWeight: "bold",
        textAlign:'center',
        margin:25,
        
        
    },
    marText:{
        margin:30,
        color:'blue',
        fontSize:20,
        fontWeight:"bold",
        textAlign:'center'
        
    }
   })
   