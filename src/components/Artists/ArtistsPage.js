import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ArtistsPageComponent extends Component {
  constructor(props){
    super(props);


  }



  render(){
    return (
      <View> 
        <Text> current Artists page: {this.props.elem}</Text> 
      </View>
    )
  }
}

export default ArtistsPageComponent;