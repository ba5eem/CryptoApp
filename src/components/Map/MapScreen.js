import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Modal,
  Button
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import { AppHeader } from '../Header/AppHeader';
import {loadArtists} from '../../Actions/artists-actions';
import { MapView } from 'expo';
import { data } from '../Art/data.js';

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
  constructor(props){
    super(props);
    this.state = {
      isVisible: true
    }
  }





  render() {
    const {artists} = this.props;
    return (
        <View style={styles.container}>
        <AppHeader/>
        
          <MapView
            minZoomLevel={13}
            style={{ flex: 1 }}
            showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={initRegion}>
            {data.map((elem,i) => {
              return(
                <MapView.Marker
                  key={elem.id}
                  identifier={`${elem.id}`}
                  onPress={e => console.log('on press maker')}
                  coordinate={{latitude: elem.lat, longitude: elem.lng}}>
                  <MapView.Callout>
                    <Avatar
                      large
                      square
                      source={elem.ftarturl && {uri: elem.ftarturl}}
                      onPress={() => console.log('show me artist page!')}/>
                  </MapView.Callout>
                </MapView.Marker>
                )
            })}

          </MapView>
          
        
        </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    height: 100,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  };
}

const ConnectedMapScreen = connect(
  mapStateToProps,
  {loadArtists}
)(MapScreen)


export default ConnectedMapScreen;