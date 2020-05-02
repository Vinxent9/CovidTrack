import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import {Icon,Card,Button,Image,Header,ListItem} from 'react-native-elements'


const countryData = [
    {
        name:'Thailand',
        flagurl:'https://www.countryflags.io/th/flat/64.png'
    },
    {
        name:'Singapore',
        flagurl:'https://www.countryflags.io/sg/flat/64.png'
    },
    {
        name:'Malaysia',
        flagurl:'https://www.countryflags.io/my/flat/64.png'
    },
    {
        name:'Philippines',
        flagurl:'https://www.countryflags.io/ph/flat/64.png'
    },
]

const cardList = [
    {
        imagesrc:require('../assets/quick.jpg'),
        nav:'Quick',
        judul:'Quick Summary Statistic'
    },
    {
        imagesrc:require('../assets/globalthumbnail.jpg'),
        nav:'Global',
        judul:'View Global Statistic'
    },
    {
        imagesrc:require('../assets/idthumbnail.jpg'),
        nav:'Indonesia',
        judul:'View Indonesia Statistic'
    },
]


const StatisticScreen = ({navigation}) => {
    return(
        <ScrollView style={{flex:1,backgroundColor:'#121212'}}>

            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Statistic', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#28293D'
                }}
                barStyle="light-content"
            />
           
            {
              
                cardList.map((list,i) => (
                   
                    <Card
                        containerStyle={styles.cardContainer}
                        image={list.imagesrc}
                        key={i}
                    >
                    
                    <Button
                        icon={
                            <Icon
                              name="ios-trending-up"
                              color="#A4ADE9"
                              type="ionicon"
                            />
                          }
                        iconRight
                        type="outline"
                        buttonStyle={{borderColor:'#A4ADE9',borderRadius:10}}
                        title={list.judul}
                        titleStyle={{color:'#A4ADE9',padding:20}}
                        onPress={() => navigation.navigate(list.nav)}
                    />
                </Card>
              
                ))
               
            }
                <Card containerStyle={styles.cardContainer} title="Check Other Countries" titleStyle={{color:'#84DFE2'}} dividerStyle={{backgroundColor:'#1f1f1f'}}>
                    {
                        countryData.map((list,i)=> (
                            <ListItem 
                                key={i}
                                containerStyle={{backgroundColor:'#1f1f1f'}}
                                leftAvatar={{source:{uri: list.flagurl},overlayContainerStyle:{backgroundColor:'#1f1f1f'}}}
                                rightIcon={{name:'ios-arrow-dropright',type:'ionicon',color:'#A4ADE9'}}
                                title={list.name}
                                titleStyle={{color:'white'}}
                            />
                        ))
                       
                    }  
                </Card>
            

        </ScrollView>
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
    },
    cardContainer:{
        borderRadius:10,
        backgroundColor:'#1f1f1f',
        borderColor:'#1f1f1f',
    },
    styleText:{
        fontWeight:'bold',
        textAlign:'center',
        color:'#84DFE2'
    }
  });

export default StatisticScreen