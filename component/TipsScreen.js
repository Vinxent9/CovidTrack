import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View,ScrollView} from 'react-native'
import {Header,Avatar,Card,ListItem,Image,Icon,Button,Overlay} from 'react-native-elements'

const TipsMenu = [
    {
        name:'Covid-19 Symptomps',
        sub:'Learn about Covid-19 Symptoms',
        nav:'Maintenance',
        ikon:'ios-thermometer',
        tipe:'ionicon',
        ikoncolor:'#EF9A9A'
    },
    {
        name:'Virus Prevention',
        sub:'Learn how to prevent the virus',
        nav:'Maintenance',
        ikon:'ios-hand',
        tipe:'ionicon',
        ikoncolor:'#A5D6A7'
    },
]

const TipsScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
              
            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Info and Tips', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#28293D'
                }}
                barStyle="light-content"
            />


            {
                TipsMenu.map((list,i)=> (
                    <ListItem 
                        key={i}
                        containerStyle={{backgroundColor:'#1f1f1f',marginVertical:10,borderRadius:10,padding:25,marginHorizontal:20}}
                        leftAvatar={{icon:{name:list.ikon, type:list.tipe,color:list.ikoncolor,size:25},overlayContainerStyle:{backgroundColor:'#1f1f1f'}}}
                        rightIcon={{name:'ios-arrow-dropright',type:'ionicon',color:'#9DBFF9'}}
                        title={list.name}
                        titleStyle={{color:'white'}}
                        subtitle={list.sub}
                        subtitleStyle={{color:'#999999'}}
                       
                    />
                ))
                       
            }  


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

  export default TipsScreen