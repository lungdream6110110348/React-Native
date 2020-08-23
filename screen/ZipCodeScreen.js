//home page
import React from 'react'
import { FlatList, View,Text,StyleSheet ,StatusBar} from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Bangkok', code: '10100' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Nakhon Sie Thammarat', code:'80000'},
    { place: 'Phatthalung', code: '93000' },
    { place: 'Pattani', code: '94000'},
    { place: 'Satun', code: '91000'},
    { place: 'Surat Thani', code: '84000' },
   ]

const ZipItem = ({place, code,navigation}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})}>

    <View style={styles.zipItem}>
         <Text style={styles.textEditor}>{place}</Text>
    </View>
</TouchableHighlight>
    )

//    const _keyExtractor = item => item.code
export default function ZipCodeScreen(){
   const navigation = useNavigation()
    return (
        <View style={styles.backGround}>
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
    textEditor:{
        fontWeight: "bold",
        color:'white',
        fontSize:25,
    },
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
