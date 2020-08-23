//home page
import React from 'react'
import { FlatList, View,Text,StyleSheet ,StatusBar, ImageBackground} from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110',pic:require('../hatyai.jpg')},
    { place: 'Trang', code: '92000',pic:require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000',pic:require('../Chiangmai.jpg' )},
    { place: 'Bangkok', code: '10100',pic:require('../bankok.jpeg') },
    { place: 'Chonburi', code: '20000',pic:require('../chonburi.jpg')},
    { place: 'Nakhon Sie Thammarat', code:'80000',pic:require('../nakhon.jpg')},
    { place: 'Phayao', code: '56000',pic:require('../phayao.jpg') },
    { place: 'Krabi', code: '81000',pic:require('../krabi.jpg')},
    { place: 'Satun', code: '91000',pic:require('../satun.jpg')},
    { place: 'Surat Thani', code: '84000' ,pic:require('../surat.jpg')},
   ]

const ZipItem = ({place, code,navigation,pic}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})}>

    <View style={styles.zipItem}>
        <ImageBackground source={pic} style={styles.contan}>
         <Text style={styles.textEditor}>{place}</Text>
         </ImageBackground>
    </View>
    
</TouchableHighlight>
    )

//    const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
   const navigation = useNavigation()
    return (
        <View>
            <FlatList
            data    =   {availableZipItems}
            keyExtractor    =   {item => item.code}
            renderItem  =   {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
    </View>
    );
   }
   
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'justify',
        justifyContent:'space-around',//space between hatyai 90110
        margin: 15,

    },
    contan:{
        height:100,
        width:415,
        padding:55,
        justifyContent:'center',
        alignItems:'center',
    },
    textEditor:{
        fontWeight: "bold",
        alignItems: 'center',
        color:'white',
        fontSize:25,    },
    zipPlace:{
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    backGround: {
        backgroundColor: '#f7b733',
        height:'100%'
    }
    

})
