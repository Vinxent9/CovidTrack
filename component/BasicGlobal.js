import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Icon} from 'react-native-elements'

class BasicGlobal extends React.Component {
    constructor() {
        super()
        this.state = {
            dataCovid:[],
            refreshing : false
        }
    }


    renderItemCovid = ({item}) => (
        <View style={{
            flex:1,
            padding:15,
            marginVertical:10,
            marginHorizontal:12,
            justifyContent: 'center',
            alignItems:'center',
            backgroundColor:item[3],
            height:80,
            borderRadius:8,
        }}>
            <Icon 
                name={item[2]}
                type='ionicon'
                color='white'
            />
            <Text style={{color:'white'}}>
                {item[0]}
            <Text style={{color:'white',fontWeight:'bold'}}>
                {item[1]}
            </Text>
            </Text>
        </View>
    )


    componentDidMount = () => {
       this.getApiCovid()
    }

    onRefresh = () => {
        this.getApiCovid()
    }

    getApiCovid = async () => {
        this.setState({refreshing:true})
        const response = await fetch('https://covid19.mathdro.id/api')
        const json = await response.json()
        const confirmed = ["Confirmed \n",json.confirmed.value,"ios-alert","#FAAD14"]
        const deaths = ["Deaths \n",json.deaths.value,"ios-heart-dislike","#FE180B"]
        const recovered = ["Recovered \n",json.recovered.value,"ios-pulse","#52C41A"]
        const totalData = [confirmed,deaths,recovered]
        this.setState({dataCovid:totalData,refreshing:false})
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.styleJudul}>Global</Text>
                    <FlatList
                        horizontal
                        data={this.state.dataCovid}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={this.renderItemCovid}
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    styleJudul:{
        fontSize:20,
        fontWeight:'bold',
        alignItems:'center',
        textAlign:'center'
    }
  });

export default BasicGlobal