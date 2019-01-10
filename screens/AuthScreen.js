import React from 'react';
import { 
  StyleSheet, 
  Text, 
  ScrollView, 
  View, 
  Image, 
  Dimensions 
} from 'react-native';
import { 
  Card, 
  Button, 
  SocialIcon 
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const height = (Dimensions.get('window').height);
const width = (Dimensions.get('window').width);

export default class AuthScreen extends React.Component {

  static navigationOptions = {
    title: 'Login',
  };
  
  render() {

    return (

      <ScrollView style={styles.container}>

        <Card 
          containerStyle={styles.innerCardsOuterContainerStyle}
        >

          <Button
            raised
            buttonStyle={styles.buttonStyle}
            textStyle={{fontSize: 18, fontWeight: '200'}}
            title="Generate OTP"
            onPress={() => this.props.navigation.navigate('otp')}
          />

          <View style={{paddingTop: height/10}}>

            <SocialIcon 
              title="Login With Facebook"
              type='facebook'
              button
            />

            <SocialIcon 
              title="Login With LinkedIn"
              type="linkedin"
              button
            />

            <SocialIcon 
              title="Login With Instagram"
              type="instagram"
              button
            />

            <SocialIcon 
              title="Login With Twitter"
              type="twitter"
              button
            />

          </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>

              <SocialIcon
                type='facebook'
              />

              <SocialIcon 
                type='linkedin'
              />

              <SocialIcon 
                type='instagram'
              />

              <SocialIcon 
                type='twitter'
              />

          </View>

        </Card>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  buttonStyle: {
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#007aff',
  },

  innerCardsOuterContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 60
  }
});
