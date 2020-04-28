import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';
import BasicGlobal from './BasicGlobal'
import BasicIndonesiaData from './BasicIndonesiaData'

const QuickViewScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.styleJudul}>Data Covid 19 Global dan Indonesia</Text>
            <BasicGlobal />
            <View style={styles.containerIndonesia}>
              <BasicIndonesiaData />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E9EBFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerIndonesia: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    styleJudul:{
      fontSize:20,
      fontWeight:'bold',
      alignItems:'center',
      textAlign:'center'
  }
  });

export default QuickViewScreen