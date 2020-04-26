import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';

class IndonesiaData extends React.Component {
    constructor() {
        super()
        this.state = {
            positif: [],
            meninggal: [],
            sembuh:[],
            province:[],
            refreshing : false
        }
    }

    renderItem = ({item}) => (
        <View style={styles.dataContainer}>
            <Text>
                {item.provinsi}
            </Text>
            <Text>
                Positif:
                {item.kasusPosi}    
            </Text>
            <Text>
                Meninggal:
                {item.kasusMeni}  
            </Text>
            <Text>
                Sembuh:
                {item.kasusSemb}  
            </Text>
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
            <View>
                <Text>This is test</Text>
                
                <FlatList
                    data={this.state.province}
                    keyExtractor={item => item.fid.toString()}
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
        paddingRight:10,
        flex:1,
        alignItems:'flex-start'
    },
    dataContainerStat:{
        flex:1,
        alignItems:'flex-end'
    }
  });

export default IndonesiaData