import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer'
import {Header} from 'react-native-elements'
import {Icon} from 'react-native-elements'
import Comp1 from './component/Comp1'
import HomeScreen from './component/HomeScreen'
import SettingScreen from './component/SettingScreen'
import StatisticScreen from './component/StatisticScreen'
import IndonesiaData from './component/IndonesiaData'


//detailscreen navigator function
const DetailScreen = ({navigation}) => {

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details again?"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )

}



// const SettingScreen = ({navigation}) => {
//   return(
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notification')}
//         title="Go to notifications"
//       />
//     </View>
//   )
// }

const NotificationScreen = ({navigation}) => {
  return(
   <Stack.Navigator initialRouteName = "Home"> 
     <Stack.Screen name = "Home" component = {HomeScreen} />
     <Stack.Screen name = "Details" component = {DetailScreen} />
   </Stack.Navigator>
  )
}

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();

const App = () => {
  
  return( 
    <NavigationContainer>

      {/* <Stack.Navigator 
        initialRouteName = "Home"
        screenOptions ={{
          headerStyle:{
            backgroundColor : '#f4511e'
          },
          headerTintColor : '#fff'
        }}
      >
        <Stack.Screen 
          name = "Home" 
          component = {HomeScreen} 
          options={{
            headerRight : () => (
              <Button 
                onPress={() => alert('This is a button!')}
                title="Next"
                color="#444444"
              />
            )
          }}
        />
        <Stack.Screen name = "Details" component = {DetailScreen} />
        </Stack.Navigator> */}
        <Drawer.Navigator initialRouteName = "Home">
          <Drawer.Screen name = "Home" component = {HomeScreen} />
          <Drawer.Screen name = "Setting" component = {SettingScreen} />
          <Drawer.Screen name = "Comp1" component = {Comp1} />
          <Drawer.Screen name = "Statistic" component = {StatisticScreen} />
          <Drawer.Screen name = "Indonesia" component = {IndonesiaData} />
        </Drawer.Navigator>
      
    </NavigationContainer>
  )
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;