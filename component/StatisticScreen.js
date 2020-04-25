import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView,FlatList } from 'react-native';
import {Header,Avatar,Card,ListItem} from 'react-native-elements'

class StatisticScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            daftar: [],
            refreshing : false
        }
    }

    renderItem = ({item}) => [
        <View style={{padding:90}}>
            <Text>
               {item.value}
            </Text>
        </View>
    ]

    componentDidMount = () => {
       this.getApi()
    }

    onRefresh = () => {
        this.getApi()
    }
 
    getApi = () => {
        fetch('https://covid19.mathdro.id/api')
        .then(response => response.json())
        .then(json => this.setState({daftar: json.confirmed}))
        .catch((error) => {
            console.error(error);
          })
    }

    render(){
       // console.log(this.state.daftar)
        return(
            <View style={styles.container}>
                <Text>This is test</Text>
                <FlatList
                    data={[this.state.daftar]}
                    keyExtractor={item => toString()}
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
  });

export default StatisticScreen