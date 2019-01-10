import React, { Component } from 'react';
import { View } from 'react-native';

class BlankScreen extends React.Component {
    render() {
        return(
            <View />
        )
    }
}

export default BlankScreen;

// import React, { Component } from 'react';
// import { Dimensions, View, StyleSheet, Keyboard } from 'react-native';     
// import MapView, { Marker } from 'react-native-maps';
// import { Permissions, Constants } from 'expo';
// import SoftButton from './SoftButton';
// import { SearchBar } from 'react-native-elements';
// import MapViewDirections from 'react-native-maps-directions';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import geolib from 'geolib';
// import axios from 'axios';

// const screenWidth = Dimensions.get('window').width;
// const screenHeight = Dimensions.get('window').height;

// export default class App extends React.Component {
//   state={
//     showPlacesList: "auto",
//     toolbarHeight: 0,
//     latitude: 19.2519886,
//     longitude: 72.8512778,
//     markers:[
//       {
//       id: 0,
//       title: 'Marker 1',
//       description: 'Location 1... Destination',
//       coordinate: {
//         latitude: 18.968535,
//         longitude: 72.825669
//       }
//       },
//       {
//         id: 1,
//         title: 'Marker 2',
//         description: 'Location 2... Destination',
//         coordinate: {
//           latitude: 19.1865773,
//           longitude: 72.8399304
//         }
//       }
//     ]
//   }

//   componentDidMount() {
//     this._getLocationAsync();
//   }

//   _getLocationAsync = async () => {
//     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== 'granted') {
//         alert('Enable location services')
//         return 0;
//     }
//     if (status === 'granted') {
//       navigator.geolocation.getCurrentPosition((position) => this.setState({
//         latitude: position.coords.latitude,
//         longitude: position.coords.longitude
//       }));
//     }
//     else {
//       IntentLauncherAndroid.startActivityAsync(
//       IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
//     );
//     }
//   };

//   onMarkerPress() {
//     return(
//       <View></View>
//     )
//   }

//   findDistance = () => {
//     console.log('in');
//     let distanceInMeters = geolib.getDistanceSimple(
//       {latitude: this.state.markers[0].coordinate.latitude, longitude: this.state.markers[0].coordinate.longitude},
//       {latitude: this.state.markers[1].coordinate.latitude, longitude: this.state.markers[1].coordinate.longitude }
//     )
//     console.log(distanceInMeters/1000);
//     //let obj = await axios.post(`https://maps.googleapis.com/maps/AIzaSyB5roJvGx-u49wYK6niNSC2e44N0JyvQes/distancematrix/json?origin=${this.state.latitude, this.state.longitude}&destinations=${this.state.markers[1].coordinate.latitude, this.state.markers[1].coordinate.longitude}`)
//     //console.log(obj);
//   }

//   render() {

//     const GOOGLE_MAPS_APIKEY = 'AIzaSyA4JT0AoX6pNp0MpLyCW_SGjq4ZN9AIV7c'

//     return (
//       <View style={{ flex: 1 }}>
//         <GooglePlacesAutocomplete
//           placeholder="Search"
//           minLenght={2}
//           autoFocus={false}
//           returnkKeyType={ 'search' }
//           enablePoweredByContainer={false}
//           listViewDisplayed="auto"
//           textInputProps={{
//             onFocus: () => console.log(this.state.showPlacesList), 
//               //this.setState({ showPlacesList: true}),
//             onBlur: () => this.setState({ showPlacesList: false })
//           }}
//           fetchDetails={true}
//           renderDescription={row => row.description}
//           onPress={(data, details = null) => {
//             // 'details' is provided when fetchDetails = true
//             Keyboard.dismiss(); 
//             console.log(data);
//             console.log(details);
//             this.setState({
//               markers:[
//                 {
//                 id: 0,
//                 title: 'Marker 1',
//                 description: 'Location 1... Destination',
//                 coordinate: {
//                   latitude: this.state.latitude,
//                   longitude: this.state.longitude
//                 }
//                 },
//                 {
//                   id: 1,
//                   title: 'Marker 2',
//                   description: 'Location 2... Destination',
//                   coordinate: {
//                     latitude: details.geometry.location.lat,
//                     longitude: details.geometry.location.lng
//                   }
//                 }
//               ]
//             })
//             console.log(details.geometry.location);
//           }}
//           getDefaultValue={() => {
//             return ''; // text input default value
//           }}
//           query={{
//             // available options: https://developers.google.com/places/web-service/autocomplete
//             key: GOOGLE_MAPS_APIKEY,
//             language: 'en', // language of the results
//             types: '(cities)', // default: 'geocode'
//             components: 'country:in'
//           }}
//           styles={{
//             description: {
//               fontWeight: 'bold'
//             },
//             predefinedPlacesDescription: {
//               color: '#000',
//             },
//           }}
//           //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
//           //currentLocationLabel="Current location"
//           nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
//           GoogleReverseGeocodingQuery={{
//             // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
//             key: GOOGLE_MAPS_APIKEY

//           }}
//           GooglePlacesSearchQuery={{
//             // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
//             key: GOOGLE_MAPS_APIKEY,
//             rankby: 'distance',
//             types: 'food',
//           }}
//           filterReverseGeocodingByTypes={[
//             'locality',
//             'administrative_area_level_3',
//           ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
//           debounce={200}
//           // renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
//           // renderRightButton={() => <Text>Custom text after the input</Text>}
//         />
//         <MapView
//           style={{flex: 1, height: 200 + this.state.toolbarHeight}}
//           mapType='standard'
//           loadingEnabled
//           loadingBackgroundColor='#FFFFFF'
//           loadingIndicatorColor='#007aff'
//           provider={'google'}
//           showsBuildings
//           showsCompass
//           showsTraffic
//           showsUserLocation
//           showsScale
//           showsMyLocationButton
//           showsPointsOfInterest
//           showsIndoors
//           showsIndoorLevelPicker
//           scrollEnabled
//           zoomControlEnabled
//           zoomEnabled
//           rotateEnabled
//           pitchEnabled
//           toolbarEnabled
//           initialRegion={{
//             latitude: this.state.latitude, 
//             longitude: this.state.longitude,
//             latitudeDelta:  0.5,
//             longitudeDelta: 0.5 * (screenWidth / screenHeight),
//           }}
//         >
//           {/* <Marker
//             onMarkerPress={() => this.onMarkerPress.bind(this)}
//             title={'Marker 1'}
//             description={'Location 1... Source'}
//             centerOffset={{ x: -18, y: -60 }}
//             anchor={{ x: 0.69, y: 1 }}
//             coordinate={{
//               latitude: this.state.markers[0].coordinate.latitude,
//               longitude: this.state.markers[0].coordinate.longitude
//           }}
//            */}
//           {this.state.markers.map((item, index) => (
//             <Marker
//               key='index'
//               title={this.state.markers[index].title}
//               description={this.state.markers[index].description}
//               coordinate={
//                 this.state.markers[index].coordinate
//               }
//             />
//           ))}
//           <MapViewDirections
//             mode='transit'
//             resetOnChange={true}
//             lineCap='round'
//             //waypoints={(this.state.markers[0].coordinate.length > 2) ? this.state.markers.coordinate.slice(1, -1): null}
//             origin={this.state.markers[0].coordinate}
//             destination={this.state.markers[1].coordinate}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={10}
//             strokeColor='hotpink'
//             onPress={this.findDistance}
//           />
//         </MapView>
//         <View style={styles.containerStyle}>
//           <SoftButton
//             onPress={() => {}}
//             buttonText='Start'
//           />
//           <SoftButton
//             onPress={() => {}}
//             buttonText='Stop'
//           />
//         </View>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   containerStyle: { 
//     position: 'absolute',
//     bottom: 50,
//     left: 0,
//     right: 0,
//     flexDirection: 'row'
//   }
// });
