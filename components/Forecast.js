import React from 'react'
import { View,Text,StyleSheet,ImageBackground } from 'react-native'
export default function Forecast(props) {
    
    let bg = ''
    if(props.main == 'Clouds'){
        bg=require('../Cloudyyy.jpg')
    }
    else if(props.main == 'Rain'){
        bg=require('../rainnyy.jpg')
    }
    else if(props.main == 'Thunderstorm'){
        bg=require('../Thunder.jpg')
    }
    
    return (
        
    <View>
        <ImageBackground source={bg} style={styles.backdrop}>
        <Text style={styles.temp}>{props.temp}°C</Text>
    <Text style={styles.textEditor} >{props.main} </Text>
    <Text style={styles.mainDescrib}>{props.description}</Text>
    <Text style={styles.marText}>Wind speed : {props.wind} m/s</Text>
    <View style={styles.up}>
    <Text style={styles.fontS}>Temperature Min||</Text>
    <Text style={styles.fontS}>Temperature Max</Text>
    </View>
    <View style={styles.down}>
    <Text style={styles.marText}>{props.tempMin}</Text>
    <Text style={styles.marText}>{props.tempMax}</Text>
    </View>
     </ImageBackground>
    </View>
   
    );
   }
   const styles = StyleSheet.create({
    textEditor:{
        fontSize: 50,
        color:'#00fa9a',
        fontWeight: "bold",
        textAlign:'center',
        margin:20,
         
        
    },
    marText:{
        margin:25,
        color:'#adff2f',
        alignItems: 'center',
        fontSize:20,
        fontWeight:"bold",
        textAlign:'center'
        
    },
    backdrop: {
        flex:1,
        alignItems: 'center',
        textAlign:'center',
       fontSize:30,
       flexDirection: 'column',
       width: 1000,
       height: '100%',
       resizeMode: 'stretch'
   
   
    },
    temp:{
        margin:20,
        paddingTop:30,
        color:'white',
        alignItems: 'center',
        fontWeight:"bold",
        textAlign:'center',
        fontSize:80
    },
    mainDescrib:{
        margin:25,
        color:'#adff2f',
        fontSize:35,
        fontWeight:"bold",
        textAlign:'center'
    },
    up:{
        flexDirection:'row',
        // margin:,
        color:'#00ffff',
        fontSize:15,
        fontWeight:"bold",
        justifyContent:'space-between'
    },
    fontS:{
        // margin:20,
        paddingTop:10,
        color:'#00ffff',
        alignItems: 'center',
        fontSize:18,
        fontWeight:"bold",
        textAlign:'center'
    },
    down:{
        flexDirection:'row',
        paddingLeft:0,
        paddingRight:0,
        color:'black',
        fontSize:40,
        fontWeight:"bold",
        justifyContent:'space-evenly'
    },
    header:{
        margin:20,
        color:'black',
        alignItems: 'center',
        fontSize:40,
        fontWeight:"bold",
        textAlign:'center'
    }
   })
   