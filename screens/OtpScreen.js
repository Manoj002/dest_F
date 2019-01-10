import React, { Component } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Keyboard, 
  KeyboardAvoidingView 
} from 'react-native';
import { Card, Button, FormInput } from 'react-native-elements';
import { connect } from 'react-redux';
import { phoneChanged, codeChanged } from '../actions';

class OtpScreen extends React.Component {

  static navigationOptions = {
      title: 'OTP',
  };

  onPhoneChange = (text) => {
    this.props.phoneChanged(text)
  }

  onCodeChange = (text) => {
    this.props.codeChanged(text);
  }
  
  render () {

    return(

      <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}
      >

        <Card>

          <Text style={styles.textStyle}>
            Phone
          </Text>

          <FormInput
            placeholderTextColor="#007aff"
            keyboardType="numeric"
            onBlur={Keyboard.dismiss}
            containerStyle={{borderRadius: 10, borderWidth: 1, borderColor: "#007aff"}}
            inputStyle={{color: '#007aff', fontSize: 18, paddingLeft: 8}}
            underlineColorAndroid="transparent"
            value={this.props.phone}
            onChangeText={this.onPhoneChange}
            placeholder="Enter phone"
          />

          <Text style={styles.textStyle}>
            OTP
          </Text>

          <FormInput
            placeholderTextColor="#007aff"
            keyboardType="numeric"
            onBlur={Keyboard.dismiss}
            containerStyle={{borderRadius: 10, borderWidth: 1, borderColor: "#007aff"}}
            inputStyle={{color: '#007aff', fontSize: 18, paddingLeft: 8}}
            underlineColorAndroid="transparent"
            value={this.props.code}
            onChangeText={this.onCodeChange}
            placeholder="Enter OTP"
          />

          <Button
            title="Verify"
            textStyle={{color: '#fff'}}
            buttonStyle={{backgroundColor: '#007aff', borderRadius: 10, marginTop: 30}}
            color='#007aff'
            onPress={() => this.props.navigation.navigate('map')}
          />

        </Card>

        <View style={{height: 60}}/>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textStyle: {
    fontSize: 20,
    fontWeight: '400',
    paddingBottom: 20,
    marginTop: 20,
    paddingLeft: 15,
    color: '#007aff'
  }

})

const mapStateToProps = ({ Otp }) => {

  const { phone, code } = Otp;

  return { phone, code };

}

export default connect(mapStateToProps, {
  phoneChanged,
  codeChanged
})(OtpScreen);