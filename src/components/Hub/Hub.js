import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from 'react-native-tabs';
import { MapPage, ArtPage, ArtistsPage, CommunityPage } from './Hub.components';


const RenderPage = ({elem}) => {
  if(elem === 'map'){ 
    return ( <MapPage elem={elem} /> ) }
  if(elem === 'art'){ 
    return ( <ArtPage elem={elem} /> ) }
  if(elem === 'community'){ 
    return ( <CommunityPage elem={elem} /> ) }
  if(elem === 'artists'){ 
    return ( <ArtistsPage elem={elem} /> ) }
}



class Hub extends Component {
  constructor(props){
    super(props);
    this.state = {page:'map'};

  }










  render() {
    const {page} = this.state;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            
            <Text name="art">Art</Text>
            
            <Text name="map" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Map</Text>
            
            <Text name="community">Community</Text>
            
            <Text name="artists" selectedStyle={{color:'green'}}>Artists</Text>
        </Tabs>

        <RenderPage elem={this.state.page} />

          


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Hub;