import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import Tabs from 'react-native-tabs';
import { StackNavigator } from 'react-navigation';
import { AppHeader } from '../Header/AppHeader';







class CommunityView extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};


  }









  render() {

    return (
      <View>
        <AppHeader/>
        <Text>CommunityView Page</Text>
      </View>
    );
  }
}


export default CommunityView;