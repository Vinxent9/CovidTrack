import React from 'react';
import { StyleSheet, View, Button,ScrollView } from 'react-native';
import {Header,ListItem,Icon,Text,Divider} from 'react-native-elements'

const menuList = [
    {
        nama : 'Account',
        icon : 'user',
        type : 'evilicon'
    },

    {
        nama : 'Password',
        icon : 'unlock',
        type : 'evilicon'
    },

    {
        nama : 'Screen',
        icon : 'user',
        type : 'evilicon'
    },

    {
        nama : 'Updates',
        icon : 'user',
        type : 'evilicon'
    }
    
]

const section2 = [
    {
        nama : 'Account',
        icon : 'user',
        type : 'evilicon'
    },

    {
        nama : 'Password',
        icon : 'unlock',
        type : 'evilicon'
    },

    {
        nama : 'Screen',
        icon : 'user',
        type : 'evilicon'
    },

    {
        nama : 'Updates',
        icon : 'user',
        type : 'evilicon'
    }
]


const SettingScreen = ({navigation}) => {
    return (

        <View>
             <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Settings', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ListItem 
                containerStyle={{paddingVertical:8,borderRadius:5}}
                title='General Setting'
                titleStyle={{color:'gray'}}
                leftIcon={{name:'ios-radio-button-on',type:'ionicon',size:15}}
                bottomDivider
            />
            {
                menuList.map((list,i) => (
                <ListItem 
                    containerStyle={{borderRadius:5}}
                    key={i}
                    title={list.nama}
                    leftIcon={{name:list.icon, type:list.type,containerStyle:{alignItems:'center'}}}
                    bottomDivider
                    chevron
                />
                ))
            }
            <Divider style={{ backgroundColor: 'gray' }}/>
            <View style={{backgroundColor:'#EEF0F3',paddingVertical:6}}>

            </View>
            {
                section2.map((list,i) => (
                <ListItem 
                    containerStyle={{borderRadius:5}}
                    key={i}
                    title={list.nama}
                    leftIcon={{name:list.icon, type:list.type,containerStyle:{alignItems:'center'}}}
                    bottomDivider
                    chevron
                />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });


export default SettingScreen