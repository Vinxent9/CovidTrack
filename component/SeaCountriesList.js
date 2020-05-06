import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import {Icon,Card,Button,Image,Header,ListItem} from 'react-native-elements'


const countryData = [
    {
        name:'Thailand',
        flagurl:'https://www.countryflags.io/th/flat/64.png',
        sub:'Check Thailand Statistic',
        nav:'Thai'
    },
    {
        name:'Singapore',
        flagurl:'https://www.countryflags.io/sg/flat/64.png',
        sub:'Check Singapore Statistic',
        nav:'Maintenance'
    },
    {
        name:'Malaysia',
        flagurl:'https://www.countryflags.io/my/flat/64.png',
        sub:'Check Malaysia Statistic',
        nav:'Maintenance'
    },
    {
        name:'Philippines',
        flagurl:'https://www.countryflags.io/ph/flat/64.png',
        sub:'Check Philippines Statistic',
        nav:'Maintenance'
    },
]



const SeaCountriesList = ({navigation}) => {
    return(
        <View style={styles.container}>

            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Southeast Asia Countries', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#28293D'
                }}
                barStyle="light-content"
            />

            {/* <Card containerStyle={styles.cardContainer} title="Check Other Countries" titleStyle={{color:'#84DFE2'}} dividerStyle={{backgroundColor:'#1f1f1f'}}> */}
                    {
                        countryData.map((list,i)=> (
                            <ListItem 
                                key={i}
                                containerStyle={{backgroundColor:'#1f1f1f',marginVertical:10,borderRadius:10,padding:30,marginHorizontal:20}}
                                leftAvatar={{source:{uri: list.flagurl},overlayContainerStyle:{backgroundColor:'#1f1f1f'}}}
                                rightIcon={{name:'ios-arrow-dropright',type:'ionicon',color:'#9DBFF9'}}
                                title={list.name}
                                titleStyle={{color:'white'}}
                                subtitle={list.sub}
                                subtitleStyle={{color:'#999999'}}
                                onPress={() => navigation.navigate(list.nav)}
                            />
                        ))
                       
                    }  
                {/* </Card> */}


        </View>
    )
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212'
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

export default SeaCountriesList