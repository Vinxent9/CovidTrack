import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';

class BasicIndonesiaData extends React.Component {
    constructor() {
        super()
        this.state = {
            province:[],
            refreshing : false
        }
    }

    renderItem = ({item}) => (
        <View style={styles.dataContainer}>
            
            <Text>
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
    


    componentDidMount = () => {
       this.getApiProvinsi()
     }

    onRefresh = () => {
        this.getApiProvinsi()
    }

     getApiProvinsi = async () => {
        this.setState({refreshing:true})
        const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
        const json = await response.json()
        this.setState({province: json.data,refreshing:false})
    }

    render(){
        return(
            <View style={styles.container}>
                
                <Text style={styles.styleJudul}>Indonesia</Text>
                   
                <FlatList
                    data={this.state.province}
                    keyExtractor={({provinsi}, index) => provinsi}
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
      backgroundColor: '#E9EBFA',
    //   alignItems: 'center',
    //   justifyContent: 'center',
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
    dataContainerStatRed:{
        alignItems:'center',
        backgroundColor:'#FE180B',
        borderRadius:8,
        padding:3,
        width:45,
        marginHorizontal:10
    },
    dataContainerStatYellow:{
        alignItems:'center',
        backgroundColor:'#FAAD14',
        borderRadius:8,
        padding:3,
        width:45
        
    },
    dataContainerStatRecovered:{
        alignItems:'center',
        backgroundColor:'#52C41A',
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

export default BasicIndonesiaData