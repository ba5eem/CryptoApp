import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ArtPageComponent extends Component {
  constructor(props){
    super(props);


  }



  render(){
    return (
      <View> 
        <Text> current Art page: {this.props.elem}</Text> 
      </View>
    )
  }
}

export default ArtPageComponent;