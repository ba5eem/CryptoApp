import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MapPageComponent extends Component {
  constructor(props){
    super(props);


  }



  render(){
    return (
      <View> 
        <Text> current Map page: {this.props.elem}</Text> 
      </View>
    )
  }
}

export default MapPageComponent;