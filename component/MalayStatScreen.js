import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView,RefreshControl,Linking} from 'react-native';
import {Icon,Card,Button,Image,Header,ListItem} from 'react-native-elements'

class MalayStatScreen extends React.Component{
    constructor() {
        super()
        this.state = {
            MalaySum:[],
            dataCovid:[],
            refreshing : false
        }
    }

    renderItemSummary = ({item}) => (
        <View 
            style={{flex:1,padding:15,marginHorizontal:17}}
        >   
        
        <Icon 
            name={item[2]}
            type='ionicon'
            color={item[3]}   
        />
    
        <Text style={{color:item[3],fontWeight:'bold'}}>
            {item[1]}
        </Text>
        
        
        </View>
    )

    renderItemGlobal = ({item}) => (
        <View 
            style={{flex:1,padding:15,marginHorizontal:7}}
        >   
            
            
            <Icon 
                name={item[2]}
                type='ionicon'
                color={item[3]}   
            />
           
          
           
            <Text style={{color:item[3],fontWeight:'bold'}}>
                {item[1]}
            </Text>
            
           

        </View>
    )

    componentDidMount = () => {
        this.getApiSumm()
        this.getApiCovid()
      }
 
     onRefresh = () => {
         this.getApiSumm()
         this.getApiCovid()
     }

    getApiSumm = async () => {
        this.setState({refreshing:true})
        const response = await fetch('https://covid19.mathdro.id/api/countries/Malaysia')
        const json = await response.json()
        const confirmed = ["Confirmed \n",json.confirmed.value,"ios-alert","#FFE082","#FFC68A"]
        const deaths = ["Deaths \n",json.deaths.value,"ios-heart-dislike","#EF9A9A","#B00020"]
        const recovered = ["Recovered \n",json.recovered.value,"ios-pulse","#A5D6A7","#83DEC4"]
        const totalData = [confirmed,recovered,deaths]
        this.setState({MalaySum:totalData,refreshing:false})
     }


     getApiCovid = async () => {
        this.setState({refreshing:true})
        const response = await fetch('https://covid19.mathdro.id/api')
        const json = await response.json()
        const confirmed = ["Confirmed \n",json.confirmed.value,"ios-alert","#FFE082","#FFC68A"]
        const deaths = ["Deaths \n",json.deaths.value,"ios-heart-dislike","#EF9A9A","#B00020"]
        const recovered = ["Recovered \n",json.recovered.value,"ios-pulse","#A5D6A7","#83DEC4"]
        const totalData = [confirmed,recovered,deaths]
        this.setState({dataCovid:totalData,refreshing:false})
    }

    render(){
        return(
            <ScrollView
                style={styles.container}
                refreshControl={
                    <RefreshControl 
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                }
            >

                <Header
                    centerComponent={{ text: 'Malaysia Statistic', style: { color: '#fff',fontWeight:'bold' } }}
                    containerStyle={{
                        backgroundColor:'#1f1f1f',
                        borderColor:'#1f1f1f'
                    }}
                    barStyle="light-content"
                />

                <Card 
                    containerStyle={styles.cardContainer}
                >
                    <Text style={styles.styleText}>Global Summary</Text>
                       <FlatList
                        horizontal
                        data={this.state.dataCovid}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={this.renderItemGlobal}
                    />

                    <Text style={{color:'#999999',fontSize:12,marginTop:10}}>*Pull Screen to Refresh Data</Text>

                </Card>

                <Card 
                    containerStyle={styles.cardContainer}
                >
                    <Text style={styles.styleText}>Malaysia Summary</Text>
                       <FlatList
                            horizontal
                            data={this.state.MalaySum}
                            keyExtractor={(_, index) => index.toString()}
                            renderItem={this.renderItemSummary}
                        />

                    <Button
                        icon={
                            <Icon
                              name="ios-trending-up"
                              color="#A4ADE9"
                              type="ionicon"
                            />
                          }
                        iconRight
                        title="View Graph Statistic"
                        type="outline"
                        buttonStyle={{borderColor:'#A4ADE9',borderRadius:10}}
                        titleStyle={{color:'#A4ADE9',padding:20}}
                        onPress={() => Linking.openURL('https://covid19.mathdro.id/api/countries/Malaysia/og')}
                    />
                </Card>

            </ScrollView>
        )
    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    cardContainer:{
        borderRadius:10,
        backgroundColor:'#1f1f1f',
        borderColor:'#1f1f1f',
        // height:300
    },
    listContainer:{
        backgroundColor:'#1f1f1f',
    },
    styleText:{
        paddingVertical:5,
        fontWeight:'bold',
        textAlign:'center',
        color:'#84DFE2'
    },
  });

export default MalayStatScreen