import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';

class IndonesiaData extends React.Component {
    constructor() {
        super()
        this.state = {
            positif: [],
            meninggal: [],
            sembuh:[],
            province:[{pid:'prov'},],
            refreshing : false
        }
    }

    renderItem = ({item}) => (
        <View style={styles.dataContainer}>
            
            <Text>
                {item.provinsi}
            </Text>

            <View style={styles.dataContainerStatus}>
                
                <View style={styles.dataContainerStatYellow}>
                    <Text>                
                        {item.kasusPosi}
                    </Text>
                </View> 
                
                <View style={styles.dataContainerStatRed}>
                    <Text>                
                        {item.kasusMeni}
                    </Text>
                </View>

                <View style={styles.dataContainerStatRecovered}>
                    <Text>                
                        {item.kasusSemb}
                    </Text>
                </View> 

            </View>
        </View>
    )
    


    componentDidMount = () => {
       this.getApiProvinsi()
     }

    onRefresh = () => {
        this.getApiProvinsi()
    }

     getApiProvinsi = () => {
        this.setState({refreshing:true})
        fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        .then(response => response.json())
        .then(json => this.setState({province: json.data,refreshing:false}))
    }

    render(){
        return(
            <View style={{flex:1}}>
                
                <Text style={styles.styleJudul}>Data Covid 19 Indonesia</Text>
                
                <View style={{width:10,height:10,backgroundColor:'red',borderRadius:8}}></View>
                <Text>meninggal</Text>
                <View style={{width:10,height:10,backgroundColor:'green',borderRadius:8}}></View>
                <Text>Sembuh</Text>
                <View style={{width:10,height:10,backgroundColor:'yellow',borderRadius:8}}></View>
                <Text>Positif</Text>
                
                <FlatList
                    data={this.state.province}
                    keyExtractor={item => item.pid}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                />
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dataContainer:{
        padding:10,
        borderBottomWidth:1,
        flex:1,
        flexDirection:'row',
    },
    dataContainerStatus:{
        flex:1,
        alignItems:'center',
        borderRadius:10,
        flexDirection:'row-reverse'
    },
    dataContainerStat:{
        flex:1,
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:10
    },
    dataContainerStatRed:{
        alignItems:'center',
        backgroundColor:'red',
        borderRadius:8,
        padding:3,
        width:45,
        marginHorizontal:10
    },
    dataContainerStatYellow:{
        alignItems:'center',
        backgroundColor:'yellow',
        borderRadius:8,
        padding:3,
        width:45
        
    },
    dataContainerStatRecovered:{
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:8,
        padding:3,
        width:45
       
    },
    styleJudul:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center'
    }
  });

export default IndonesiaData