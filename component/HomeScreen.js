import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button,ScrollView} from 'react-native'
import {Header,Avatar,Card,ListItem,Image} from 'react-native-elements'
import YoutubePlayer from 'react-native-youtube-iframe';


const menuItem = [
    {
        nama:'Statistic',
        subjudul:'Check the current Covid-19 Data',
        ikon:'ios-stats',
        tipe:'ionicon',
        press:'Statistic',
        ikoncolor:'#FFE082'
    },
    {
        nama:'News',
        subjudul:'Check out current news about Covid-19',
        ikon:'ios-today',
        tipe:'ionicon',
        press:'News Update',
        ikoncolor:'#9DBFF9'
    },
    {
        nama:'Info and Tips',
        subjudul:'Useful Information about Covid-19',
        ikon:'ios-happy',
        tipe:'ionicon',
        press:'Info and Tips',
        ikoncolor:'#A5D6A7'
    },

]


const HomeScreen = ({navigation}) => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    return(
        <ScrollView style={{flex:1,backgroundColor:'#121212'}}>
           
            <Header
                leftComponent={{ icon: 'menu', color: '#fff',onPress:() => navigation.openDrawer() }}
                centerComponent={{ text: 'Covid Track', style: { color: '#fff' } }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#28293D'
                }}
                barStyle="light-content"
            />
           

           <Card
                containerStyle={{
                    borderRadius:10,
                    backgroundColor:'#1f1f1f',
                    borderColor:'#1f1f1f',
                    height:150
                }}
                image={require('../assets/tips.jpg')}
            >
                
                
            </Card>
 

            <Card 
                title="Featured News" 
                containerStyle={{
                    borderRadius:10,
                    backgroundColor:'#1f1f1f',
                    borderColor:'#1f1f1f',
                    height:250
                }}
                titleStyle={{color:'#84DFE2'}}
                dividerStyle={{backgroundColor:'#1f1f1f'}}
            >
                <YoutubePlayer
                    ref={playerRef}
                    height={200}
                    width={300}
                    videoId={"d6VRjykJuX0"}
                    play={playing}
                    onChangeState={event => console.log(event)}   
                    onError={e => console.log(e)}
                    onPlaybackQualityChange={q => console.log(q)}
                    volume={50}
                    playbackRate={1}
                />   
            </Card>           

            <Card 
                title="Hello There, What are you looking today?" 
                containerStyle={styles.cardContainer}
                titleStyle={{color:'#84DFE2'}}
                dividerStyle={{backgroundColor:'#1f1f1f'}}
            >
                {
                menuItem.map((list,i)=> (
                    <ListItem
                        containerStyle={styles.listContainer}
                        key={i}
                        leftAvatar={{icon:{name:list.ikon, type:list.tipe,color:list.ikoncolor,size:25},overlayContainerStyle:{backgroundColor:'#1f1f1f'}}}
                        rightIcon={{name:'ios-arrow-dropright',type:'ionicon',color:'#9DBFF9'}}
                        title={list.nama}
                        subtitle={list.subjudul}
                        titleStyle={{color:'white'}}
                        subtitleStyle={{color:'#999999'}}
                        onPress={() => navigation.navigate(list.press)}
                       
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
      backgroundColor: '#1C1C28',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer:{
        borderRadius:10,
        backgroundColor:'#1f1f1f',
        borderColor:'#1f1f1f',
    },
    listContainer:{
        backgroundColor:'#1f1f1f',
    }
  });

export default HomeScreen