import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  {text: '   Welcome to,\n Destiny Finder. \n\n\nGlad to see you here.', color: '#03A9F4'},
  {text: 'Now you can\n  search\n\n Anything\n you want\n\n   NEAR YOU!!!', color: '#3294ff'},
  {text: '     HAPPY\n\nSEARCHING!!!\n\n\n\n\n', color: '#007aff'}
]

class HomeScreen extends React.Component {
  
  static navigationOptions = {
    header: null
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  
  render () {

    return(

      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>              

      // <View>
      //   <Card
      //     containerStyle={styles.cardContainerStyle}
      //   >
      //     <View style={styles.container}>
      //     <Text style={[styles.textStyle, {paddingBottom: 10}]}>WELCOME TO,</Text>
      //     <Text style={[styles.textStyle, {paddingBottom: 50}]}>Destiny Finder</Text>
      //     </View>
      //     <Text style={{fontSize: 18, fontWeight:'200', color: '#FFFFFF', alignSelf: 'center', paddingBottom: 10}}>
      //       Search anything near you.
      //     </Text>
      //     <Text style={{fontSize: 18, fontWeight:'200', color: '#fff', alignSelf: 'center', paddingBottom: 100}}>
      //       Happy Searching!!!
      //     </Text>
      //     {/* <Button
      //       containerViewStyle={}
      //       raised
      //       rounded={true}
      //       title="Next"
      //       transparent={true}
      //       color='#007aff'
      //       onPress={() => this.props.navigation.navigate('auth')} 
      //     />   */}
      //   </Card>
      //     <Button 
      //       title="Let's begin  >>>  "
      //       buttonStyle={{borderRadius: 10, marginTop: 40, paddingLeft: 40, paddingRight: 40}}
      //       textStyle={[styles.textStyle, {color: '#007aff'}]}
      //       backgroundColor='rgba(0,0,0,0)'
      //       color='rgba(0, 122, 255, 1)'
      //       onPress={() => this.props.navigation.navigate('auth')}
      //     />
      // </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardContainerStyle: {
    borderRadius: 10,
    backgroundColor: "#007aff"
  },
  
  textStyle: {
    fontSize: 30,
    fontWeight: '400',
    color: '#FFFFFF'
  }
})

export default HomeScreen;