import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Icon} from 'react-native-elements'


const StatisticScreen = () => {
    return(
        <View style={styles.container}>
            <Text>STATS SCREEN</Text>
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
    styleJudul:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center'
    }
  });

export default StatisticScreen