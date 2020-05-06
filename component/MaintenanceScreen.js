import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import {Header,Avatar,Card,ListItem,Image,Icon,Button,Overlay} from 'react-native-elements'

const MaintenanceScreen = ({navigation}) => {
    return(
        <View style={styles.container}>
        
            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Covid Track', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#28293D'
                }}
                barStyle="light-content"
            />

            <Icon 
                name='ios-hammer'
                type='ionicon'
                color='white'
            />
            <Text style={styles.styleText}>Screen Under Construction</Text>
        

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    styleText:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#84DFE2'
    },
  });

export default MaintenanceScreen