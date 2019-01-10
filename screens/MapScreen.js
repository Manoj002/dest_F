import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card, Icon, SearchBar } from 'react-native-elements';
import { Permissions } from 'expo';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { connect } from 'react-redux';
import { regionChanged, getLocation, showDirection } from '../actions';
import Axios from 'axios';

const g_api_key = 'AIzaSyA4JT0AoX6pNp0MpLyCW_SGjq4ZN9AIV7c';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=';

class MapScreen extends React.Component {

    // static navigationOptions = {

    //     header: null

    // }

    componentDidMount() {

        this._getLocation();

    }

    // componentWillReceiveProps(nextProps) {

    //     this.props.showDirection(nextProps);

    // }

    _getLocation = async() => {

        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if( status === 'granted') {

            navigator.geolocation.getCurrentPosition(position => {

                this.props.getLocation(position);

            })

        } else {

            alert('Enable GPS Services for better performance.')

        }

    }

    onRegionChange = ({ latitude, longitude, latitudeDelta, longitudeDelta }) => {

        this.props.regionChanged({ latitude, longitude, latitudeDelta, longitudeDelta });

    }

    onMapPress (event) {

        return(

            <MapView.Marker
                coordinate={event.nativeEvent.coordinate}
            />
        )

    }

    goNextScreen = async (str) => {

        let key;

        if( str === 'restaurant') {

            key = 'veg'

        } else {

            key = str

        }

        let obj = await Axios.post(`${ROOT_URL}${this.props.currentLocation.coords.latitude},${this.props.currentLocation.coords.longitude}&radius=1500&type=${str}&keyword=${key}&key=${g_api_key}`)
        
        this.props.navigation.navigate('last', { obj });
    }

    render() {

        return(

            <View style={{flex: 1}}>

                <SearchBar
                    style={styles.containerStyle}
                    lightTheme
                    round
                    placeholder="Search Places"
                    placeholderTextColor="#708090"
                />

                {/* <GooglePlacesAutocomplete 
                    placeholder="Search here"
                    autofocus={false}
                    listViewDisplayed={false}
                /> */}

                <MapView 
                    style={{flex: 1}}
                    initialRegion={this.props.region}
                    onRegionChangeComplete={this.onRegionChange}
                    mapType='standard'
                    loadingEnabled
                    loadingBackgroundColor='#FFFFFF'
                    loadingIndicatorColor='#007aff'
                    moveOnMarkerPress
                    // onPress={event => {
                    //     console.log(event.nativeEvent.coordinate)
                    // }}
                    provider={'google'}
                    showsBuildings
                    showsCompass
                    //showsTraffic
                    //showsUserLocation
                    showsScale
                    //showsMyLocationButton
                    showsPointsOfInterest
                    showsIndoors
                    showsIndoorLevelPicker
                    scrollEnabled
                    //zoomControlEnabled
                    zoomEnabled
                    rotateEnabled
                    //pitchEnabled
                    //toolbarEnabled
                >
                    
                    <Marker 
                        coordinate={{ 
                            latitude: this.props.currentLocation.coords.latitude,
                            longitude: this.props.currentLocation.coords.longitude
                        }}
                        title="You are here"
                    />

                </MapView>

                <View style={styles.containerStyle}>

                    <Card containerStyle={{flex: 1, borderRadius: 3}}>

                        <Text style={{fontSize: 17, fontWeight: '200'}}>
                            SEARCH NEARBY
                        </Text>

                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                            <View>

                                <Icon 
                                    name="restaurant"
                                    reverse
                                    containerStyle={{backgroundColor: '#23c0ce'}}
                                    onPress={() => this.goNextScreen('restaurant', 'veg')}
                                />

                                <Text style={styles.iconTextStyle}>
                                    Restaurants
                                </Text>

                            </View>

                            <View>

                                <Icon
                                    reverse
                                    name='institution'
                                    type="font-awesome"
                                    containerStyle={{backgroundColor: '#ce23bc'}}
                                    onPress={() => this.goNextScreen('hospital')}
                                />

                                <Text style={styles.iconTextStyle}>
                                    Hospitals
                                </Text>

                            </View> 

                            <View>

                                <Icon
                                    reverse
                                    name='shopping-basket'
                                    containerStyle={{backgroundColor: '#ce8623'}}
                                    onPress={() => this.goNextScreen('petrol')}
                                />

                                <Text style={styles.iconTextStyle}>
                                    Petrol
                                </Text>

                            </View>

                            <View>

                                <Icon
                                    reverse
                                    name='bubble-chart'
                                    containerStyle={{backgroundColor: '#08700e'}}
                                    onPress={() => this.goNextScreen('bank')}
                                />

                                <Text style={styles.iconTextStyle}>
                                    Bank
                                </Text>

                            </View>

                        </View>

                    </Card>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    containerStyle: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        flex: 1
    },
    
    iconTextStyle: {
        fontSize: 12,
        textAlign: 'center'
    }

})

const mapStateToProps = ({ Map }) => {

    const { currentLocation, region } = Map
    
    return { currentLocation, region }
}

export default connect(mapStateToProps, { 
    regionChanged,
    getLocation
 })(MapScreen);