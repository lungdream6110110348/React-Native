import React,{ useState,useEffect } from 'react'
import { Text, ImageBackground, StyleSheet} from 'react-native'
import Forecast from './Forecast'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        wind:0,      
        temp: 0,
        tempMin: 'min',
        tempMax: 'max',

        }) 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=5493d1e66ba48ef4e01814334af23906`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
            main: json.weather[0].main,
            description: json.weather[0].description,
            wind:json.wind.speed,
            temp: json.main.temp,
            tempMin:json.main.temp_min,
            tempMax:json.main.temp_max,
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, 
        [props.zipCode])
    

    return ( 
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.nextFont}>Zip Code : {props.zipCode}</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
 );
}
const styles = StyleSheet.create({
 backdrop: {
    
     alignItems: 'center',
     textAlign:'center',
    fontSize:30,
    width: '100%',
    height: '100%',


 },
 nextFont:{
     fontSize:20,
     margin:20,
     fontWeight: "bold",


 }
})
