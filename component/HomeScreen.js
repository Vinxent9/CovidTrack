import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView } from 'react-native';
import {Header,Avatar,Card,ListItem} from 'react-native-elements'


const menuItem = [
    {
        nama:'Statistic'
    },
    {
        nama:'News'
    },
    {
        nama:'Tips'
    },
    {
        nama:'More'
    },

]


const HomeScreen = ({navigation}) => {
    return(
        <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />

            <Avatar 
                overlayContainerStyle={{backgroundColor:'black'}}
                size="medium"
                rounded
                icon={{name:'ios-stats',type:'ionicon',color:'blue'}}
                activeOpacity={0.2}
                
            />

            <Card title="Hello there, what are you looking today?" containerStyle={{borderRadius:10}}>
                <ListItem
                    leftAvatar={{icon:{name:'ios-stats', type:'ionicon'},overlayContainerStyle:{backgroundColor:'black'}}}
                    title="Statistic"
                    subtitle="check the statistic"
                    bottomDivider
                    onPress={() => console.log("pressed")}
               />
                <Text>Test</Text>
            </Card>
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

export default HomeScreen