import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Font } from 'expo';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends React.Component {

    componentDidMount() {
        Font.loadAsync({
            'MarkPro-Medium': require('./MarkPro-Medium.ttf')
        })
    }

    renderLastSlide(index) {
        if(index === this.props.data.length - 1) {
            return (
                <Button 
                    raised
                    title="Let's Begin >>>"
                    textStyle={{color: '#007aff', fontSize: 20, fontWeight: '400'}}
                    buttonStyle={{backgroundColor: '#FFFFFF', borderRadius: 2}}
                    onPress={this.props.onComplete}
                />
            )
        }
    }

    renderSlides() {
        return this.props.data.map((slides, index) => {
            return (
                <View
                    key={slides.text}
                    style={[styles.slideStyle, {backgroundColor: slides.color}]}
                >
                    <Text style={styles.textStyle}>{slides.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            )
        })
    }

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{flex: 1}}
            >
                {this.renderSlides()}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: '#FFFFFF',
        paddingLeft: 10
    },
    slideStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: SCREEN_WIDTH
    }
})

export default Slides;