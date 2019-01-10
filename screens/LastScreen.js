import React, { Component } from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    Platform, 
    UIManager, 
    LayoutAnimation 
} from 'react-native';
import { Card, Divider, Rating } from 'react-native-elements';
import { connect } from 'react-redux';
import { showDescription } from '../actions';
 
class LastScreen extends React.Component {

    componentDidMount() {

        if(Platform.OS === 'android') {

            UIManager.setLayoutAnimationEnabledExperimental(true);

        }

    }

    componentWillUpdate() {

        LayoutAnimation.easeInEaseOut();

    }

    renderView(o) {

        console.log(o[1].geometry.location);

        if(this.props.id === o[1].id) {

            if(this.props.show){

                return(

                    <View>

                        <Card
                            containerStyle={{ borderRadius: 5, borderColor: '#007aff', borderWidth: 1 }}
                        >

                            <View
                                style={{flex: 1, justifyContent: 'space-around'}}
                            >

                                <Text
                                    style={{flex: 1, fontSize: 15, fontWeight: '600'}}
                                >
                                    {o[1].vicinity}
                                </Text>

                                <Divider 
                                    style={{ backgroundColor: '#666666', marginTop: 5, marginBottom: 5 }} 
                                />

                                <View
                                    style={{marginTop:10, justifyContent: 'space-around', alignItems: 'center'}}
                                >

                                    <Rating
                                        type="heart"
                                        startingValue={o[1].rating}
                                        readonly
                                        imageSize={30}
                                        style={{ paddingVertical: 10 }}
                                    />

                                    <Text
                                        style={{fontSize: 14, alignSelf: 'center', marginTop: 10}}
                                    >
                                        Ratings
                                    </Text>

                                </View>

                                 <Divider 
                                    style={{ backgroundColor: '#666666', marginTop: 5, marginBottom: 5 }} 
                                />

                                <View
                                    style={{marginTop:10, justifyContent: 'space-around', alignItems: 'center'}}
                                >

                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('map', o[1].geometry.location)}
                                    >

                                        <Image
                                            style={{height: 40, width: 40, alignSelf: 'center'}}
                                            source={require('./dir1.png')}
                                        />

                                    </TouchableOpacity>
                                    
                                    <Text
                                        style={{fontSize: 14, alignSelf: 'center', marginTop: 10}}
                                    >
                                        Get Directions
                                    </Text>

                                </View>

                            </View>

                        </Card>

                    </View>
                )
            }
        }

    }

    renderOpen(o) {

        let text='';

        try {

            if(o[1].opening_hours.open_now) {

                text = 'OPEN NOW' 
            
            } else {

                text = "CLOSED"

            }

            return text;

        } catch(e) {

            text = "CLOSED"

            return text;

        }        
        
    }

    renderImage(o) {

        let uri;

        try {
            
            if(o[1].photos[0].photo_reference) {

                return{

                    uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&maxheight=100&photoreference=${o[1].photos[0].photo_reference}&key=AIzaSyA4JT0AoX6pNp0MpLyCW_SGjq4ZN9AIV7c`
                
                }

            }
            
        } catch(e) {

            return require('./two.jpg');

        }
    }

    renderCards(obj) {

        return(
            
            Object.entries(obj).map((o, index) => {
                
                return(

                    <Card
                        containerStyle={{borderRadius: 5, paddingBottom: 5}}
                        key={index}
                    >

                        <TouchableOpacity
                            activeOpacity={1.0} 
                            onPress={() => this.props.showDescription(this.props.show, o[1].id)}
                        >

                        <View>

                            <View
                                style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}
                            >

                                <Image
                                    style={{flex: 1, height: 100, width: 100, borderRadius: 10}}
                                    source={this.renderImage(o)}
                                />

                                <View 
                                    style={{flex: 2, justifyContent: 'space-around'}}
                                >

                                    <Text 
                                        style={{fontSize: 16, flex: 1, marginLeft: 10, color: '#007aff'}}
                                    >
                                        {o[1].name}
                                    </Text>

                                    <View 
                                        style={{flex: 2, flexDirection: 'row', justifyContent: 'space-around'}}
                                    >

                                        <Text
                                            style={{alignContent:'flex-start', fontSize: 14 }}
                                        >
                                            {this.renderOpen(o)}
                                        </Text>

                                        <Image 
                                            style={{width: 20, height: 20, alignContent: 'flex-end'}}
                                            source={{uri: `${o[1].icon}`}}
                                        />

                                    </View>

                                </View>

                            </View>

                            {this.renderView(o)}

                            </View>

                        </TouchableOpacity>

                    </Card>

                )

            })

        ) 

    }

    render() {

        const obj = this.props.navigation.state.params.obj.data.results;
        
        return (

            <ScrollView 
                style={{ backgroundColor: '#FFFFFF', marginTop: 25, paddingBottom: 10 }}
            >

                {this.renderCards(obj)}

            </ScrollView>

        )
    }
}

const mapStateToProps = ({ last }) => {

    const { show, id } = last

    return { show, id };
}

export default connect(mapStateToProps, { showDescription })(LastScreen);