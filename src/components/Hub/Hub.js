import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import Tabs from 'react-native-tabs';
import { MapPage, ArtPage, ArtistsPage, CommunityPage, SearchBar, Tab } from './Hub.components';




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
      <View style={container}>
        <SearchBar /> 
        <RenderPage elem={this.state.page} />



        <Tabs selected={this.state.page} 
              style={fontStyle}
              selectedStyle={{color:'#66949C'}} 
              onSelect={el=>this.setState({page:el.props.name})}>
            
          <Tab name="art" title="Art"/>
          <Tab name="map" title="Map"/>
          <Tab name="community" title="Community"/>
          <Tab name="artists" title="Artists"/>
           
        </Tabs>

        

          


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  keyboardContainer: {
    width: "70%",

  },
  input: {
    height: 40,
    color: "white",
    paddingHorizontal: 10,
    width: "100%",
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  formContainer: { 
    marginTop: 30, 
    flexDirection:'row',
    justifyContent: 'center',
       
  },
  selectedIconStyle: {
    borderTopWidth:2,
    borderTopColor:'#66949C'
  },
  fontStyle: {
    backgroundColor: "grey",
    borderWidth: 0.5,
    borderColor: 'black',
  }
});

const { fontStyle, container, selectedIconStyle } = styles;

export default Hub;