import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CommunityPageComponent extends Component {
  constructor(props){
    super(props);


  }



  render(){
    return (
      <View> 
        <Text> current community page: {this.props.elem}</Text> 
      </View>
    )
  }
}

export default CommunityPageComponent;