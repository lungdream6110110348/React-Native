import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
export default function Forecast(props) {
    return (
    <View >
        <Text style={styles.temp}>{props.temp}°C</Text>
    <Text style={styles.textEditor} >{props.main} </Text>
    <Text style={styles.marText}>{props.description}</Text>
    <Text style={styles.marText}>Wind speed:{props.wind}</Text>
    <Text style={styles.marText}>Temperature Min:{props.tempMin}</Text>
    <Text style={styles.marText}>Temperature Max:{props.tempMax}</Text>

    
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
        margin:10,
        
        
    },
    marText:{
        margin:25,
        color:'blue',
        alignItems: 'center',
        fontSize:20,
        fontWeight:"bold",
        textAlign:'center'
        
    },
    temp:{
        margin:40,
        color:'blue',
        alignItems: 'center',
        fontWeight:"bold",
        textAlign:'center',
        fontSize:60
    }
   })
   