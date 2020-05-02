import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView,RefreshControl,Linking,VirtualizedList } from 'react-native';
import {Icon,Card,Button,Image,Header,ListItem} from 'react-native-elements'


class IndonesiaStatScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            province:[],
            indoSum:[],
            refreshing : false
        }
    }

    renderItem = ({item}) => (
        <View style={styles.dataContainer}>
            
            <Text style ={{color:'white'}}>
                {item.provinsi}
            </Text>

            <View style={styles.dataContainerStatus}>
                
                <View style={styles.dataContainerStatRecovered}>
                    <Text style={{fontWeight:'bold'}}>                
                        {item.kasusSemb}
                    </Text>
                </View> 
                
                <View style={styles.dataContainerStatRed}>
                    <Text style={{fontWeight:'bold'}}>                
                        {item.kasusMeni}
                    </Text>
                </View>

                <View style={styles.dataContainerStatYellow}>
                    <Text style={{fontWeight:'bold'}}>                
                        {item.kasusPosi}
                    </Text>
                </View> 
               

            </View>
        </View>
    )

    renderItemSummary = ({item}) => (
        <View 
            style={{flex:1,padding:15,marginHorizontal:15}}
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
        this.getApiProvinsi()
        this.getApiSumm()
      }
 
     onRefresh = () => {
         this.getApiProvinsi()
         this.getApiSumm()
     }
 
      getApiProvinsi = async () => {
         this.setState({refreshing:true})
         const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
         const json = await response.json()
         this.setState({province: json.data,refreshing:false})
     }

     getApiSumm = async () => {
        this.setState({refreshing:true})
        const response = await fetch('https://covid19.mathdro.id/api/countries/Indonesia')
        const json = await response.json()
        const confirmed = ["Confirmed \n",json.confirmed.value,"ios-alert","#FFE082","#FFC68A"]
        const deaths = ["Deaths \n",json.deaths.value,"ios-heart-dislike","#EF9A9A","#B00020"]
        const recovered = ["Recovered \n",json.recovered.value,"ios-pulse","#A5D6A7","#83DEC4"]
        const totalData = [confirmed,recovered,deaths]
        this.setState({indoSum:totalData,refreshing:false})
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
                centerComponent={{ text: 'Indonesia Statistic', style: { color: '#fff',fontWeight:'bold' } }}
                containerStyle={{
                    backgroundColor:'#1f1f1f',
                    borderColor:'#1f1f1f'
                }}
                barStyle="light-content"
            />

                <Card 
                    containerStyle={styles.cardContainer}
                >
                    <Text style={styles.styleText}>Indonesia Summary</Text>
                       <FlatList
                            horizontal
                            data={this.state.indoSum}
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
                        onPress={() => Linking.openURL('https://covid19.mathdro.id/api/countries/Indonesia/og')}
                    />

                    <Text style={{color:'#999999',fontSize:12,marginTop:10}}>*Pull Screen to Refresh Data</Text>

                </Card>
                

                    <Text style={styles.styleText}>Indonesia Province Statistic</Text>
                    
               
                    <FlatList
                        data={this.state.province}
                        keyExtractor={({provinsi}, index) => provinsi}
                        renderItem={this.renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />

                <Card containerStyle={styles.cardContainer}
                    title="Tips from Kementrian Kesehatan Indonesia"
                    titleStyle={{color:'#84DFE2'}}
                    dividerStyle={{backgroundColor:'#1f1f1f'}}
                >

                    <Image 
                        source={require('../assets/tips_kemkes.png')}
                        style={{ width: 300, height: 300 }}
                        resizeMode='contain'
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
    dataContainer:{
        padding:10,
        borderBottomWidth:1,
        borderColor:'#999999',
        flex:1,
        flexDirection:'row',
        borderRadius:10,
        backgroundColor:'#1f1f1f'
    },
    dataContainerStatus:{
        flex:1,
        alignItems:'center',
        borderRadius:10,
        flexDirection:'row-reverse'
    },
    dataContainerStatRed:{
        alignItems:'center',
        backgroundColor:'#EF9A9A',
        borderRadius:8,
        padding:3,
        width:45,
        marginHorizontal:10
    },
    dataContainerStatYellow:{
        alignItems:'center',
        backgroundColor:'#FFE082',
        borderRadius:8,
        padding:3,
        width:45
        
    },
    dataContainerStatRecovered:{
        alignItems:'center',
        backgroundColor:'#A5D6A7',
        borderRadius:8,
        padding:3,
        width:45
       
    },
  });




export default IndonesiaStatScreen