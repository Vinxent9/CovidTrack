import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Icon} from 'react-native-elements'



import MaintenanceScreen from './component/MaintenanceScreen'
import HomeScreen from './component/HomeScreen'
import StatisticScreen from './component/StatisticScreen'
import QuickViewScreen from './component/QuickViewScreen'
import GlobalStatScreen from './component/GlobalStatScreen'
import IndonesiaStatScreen from './component/IndonesiaStatScreen'
import TipsScreen from './component/TipsScreen'
import NewsScreen from './component/NewsScreen'
import SeaCountriesList from './component/SeaCountriesList'
import ThailandStatScreen from './component/ThailandStatScreen'
import SingaporeStatScreen from './component/SingaporeStatScreen'
import MalayStatScreen from './component/MalayStatScreen'
import PhilippinesStatScreen from './component/PhilippinesStatScreen'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();


const StatisticStack = () => {
  return(
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name = "Statistic" component = {StatisticScreen} />
      <Stack.Screen name = "Quick" component = {QuickViewScreen} />
      <Stack.Screen name = "Global" component = {GlobalStatScreen} />
      <Stack.Screen name = "Indonesia" component = {IndonesiaStatScreen} />
      <Stack.Screen name = "Sea" component = {SeaCountriesList} />
      <Stack.Screen name = "Thai" component = {ThailandStatScreen} />
      <Stack.Screen name = "Singa" component = {SingaporeStatScreen} />
      <Stack.Screen name = "Malay" component = {MalayStatScreen} />
      <Stack.Screen name = "Philip" component = {PhilippinesStatScreen} />
      <Stack.Screen name = "Maintenance" component = {MaintenanceScreen} />
  </Stack.Navigator>
  )
}

const App = () => {
  
  return( 
    <NavigationContainer>
       <Drawer.Navigator 
          initialRouteName = "Home"
          drawerStyle={{
            backgroundColor: '#292929',
            color:'white'
          }}
          drawerContentOptions={{
            activeTintColor: '#A4ADE9',
            inactiveTintColor:'white'
          }}
      >

      <Drawer.Screen 
        
        name = "Home" component = {HomeScreen}  
        options={{drawerIcon:({activeTintColor}) => (
        <Icon 
          name='ios-home'
          type='ionicon'
          color='#A4ADE9'
        />
      )}} 


      />
      <Drawer.Screen 
        name = "Statistic" 
        component = {StatisticStack} 
        options={{drawerIcon:({tintColor}) => (
          <Icon 
            name='ios-stats'
            type='ionicon'
            color='#A4ADE9'
          />
        )}} 
        
      />

      <Drawer.Screen 
        name = "News Update" 
        component = {NewsScreen} 
        options={{drawerIcon:({tintColor}) => (
          <Icon 
            name='ios-today'
            type='ionicon'
            color='#A4ADE9'
          />
        )}} 
    
      />

      <Drawer.Screen 
        name = "Info and Tips" 
        component = {TipsScreen} 
        options={{drawerIcon:({tintColor}) => (
          <Icon 
            name='ios-happy'
            type='ionicon'
            color='#A4ADE9'
          />
        )}} 
    
      />

      </Drawer.Navigator>
      
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28293D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;