import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
import { AppHeader } from '../Header/AppHeader';
import { MapView } from 'expo';

const { height } = Dimensions.get('window');
const box_count = 3;
const box_height = height / box_count;


export const kakaako = {
        lat: 21.296594,
        lng: -157.855613,
      };
export const cord = {
        longitude: -157.855613,
        latitude: 21.296594   
      };

export const initRegion = {
        latitude: kakaako.lat,
        longitude: kakaako.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
const artMarkers = [{title:'art', description: 'awesome', latlng: kakaako}]


 
class MapScreen extends Component {


  render() {
    return (
        <View style={container}>
        <AppHeader/>
          <MapView
            style={{ flex: 1 }}
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={initRegion}>
            <MapView.Marker
              coordinate={cord}/>

          </MapView>

        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
  },
  box: {
    height: box_height,
    borderTopWidth:2,
    borderTopColor:'#66949C'
  },
//header
  box1: {
      flex: 1,
      backgroundColor: '#2196F3'
  },
  //content
  box2: {
      flex: 10,
      backgroundColor: '#8BC34A'
  },
  //footer
  box3: {
      flex: .5,
      backgroundColor: '#e3aa1a'
  }
});

const { container } = styles;

export default MapScreen;