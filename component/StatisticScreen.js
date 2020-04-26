import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';
import {Header,Avatar,Card,ListItem} from 'react-native-elements'


const statusList = [
    {
        id:1,
        status:'Confirmed'
    },
    {
        id:2,
        status:'Death'
    },
    {
        id:3,
        status:'Recovered'
    }
]

class StatisticScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            daftar: [{gid : 'konfirm'},],
            meninggal: [{gid:'meninggal'},],
            sembuh:[{gid:'sembuh'},],
            refreshing : false
        }
    }

    renderItem = ({item}) => (
        <View style={styles.dataContainer}>
            <Text>
                {item.value}
            </Text>
        </View>
    )

    renderItemStatus = ({item}) => (
        <View style={styles.dataContainer}>
            <Text>
                {item.status}
            </Text>
        </View>
    )

    componentDidMount = () => {
       this.getApi()
       this.getApiDeath()
       this.getApiRecovered()
    }

    onRefresh = () => {
        this.getApi()
        this.getApiDeath()
        this.getApiRecovered()
    }

    getApiDeath = () => {
        this.setState({refreshing:true})
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({meninggal: json.deaths,refreshing:false}))
    }
 
    getApiRecovered = () => {
        this.setState({refreshing:true})
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({sembuh: json.recovered,refreshing:false}))
    }

    getApi = () => {
        this.setState({refreshing:true})
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({daftar: json.confirmed,refreshing:false}))
    }

    render(){
       //console.log(this.state.meninggal)
        return(
            <View>
                <Text>This is test</Text>
                    <FlatList
                        horizontal
                        data={[this.state.daftar,this.state.meninggal,this.state.sembuh]}
                        keyExtractor={item => item.gid}
                        renderItem={this.renderItem}
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                <FlatList 
                    horizontal
                    data={statusList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItemStatus}
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
        flex:1,
        padding:20,
        marginHorizontal:10,
        justifyContent: 'center',
        alignItems:'center'
    }
  });

export default StatisticScreen