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
            daftar: [],
            meninggal: [],
            sembuh:[],
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
        .catch((error) => {
            console.error(error);
          })
    }
 
    getApiRecovered = () => {
        this.setState({refreshing:true})
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({sembuh: json.recovered,refreshing:false}))
        .catch((error) => {
            console.error(error);
          })
    }

    getApi = () => {
        this.setState({refreshing:true})
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({daftar: json.confirmed,refreshing:false}))
        .catch((error) => {
            console.error(error);
          })
    }

    render(){
       //console.log(this.state.meninggal)
        return(
            <View>
                <Text>This is test</Text>
                    <FlatList
                        horizontal
                        data={[this.state.daftar,this.state.meninggal,this.state.sembuh]}
                        keyExtractor={item => toString()}
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
        padding:20,
        marginHorizontal:10,
        flex:1,
        alignItems:'center'
    }
  });

export default StatisticScreen