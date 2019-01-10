import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import store from './store';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import LastScreen from './screens/LastScreen';
import BlankScreen from './screens/BlankScreen';
import OtpScreen from './screens/OtpScreen';

class App extends React.Component {
  render() {

    const MainNavigation = createStackNavigator({
      home: HomeScreen,
      auth: AuthScreen,
      blank: BlankScreen,
      otp: OtpScreen,
      main: createBottomTabNavigator({
        map: MapScreen,
        last: LastScreen
      },{
        navigationOptions: {
          tabBarVisible: false,
        }, 
        lazy: true
      })
    }, {
      lazy: true,
      initialRouteName: 'home',
      headerMode: 'none'
    })
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}

export default App;