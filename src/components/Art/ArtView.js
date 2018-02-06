import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { List, ListItem, Avatar, Divider, Icon } from 'react-native-elements'
import Tabs from 'react-native-tabs';
import { StackNavigator } from 'react-navigation';
import { AppHeader } from '../Header/AppHeader';

import { data } from '../../Reducers/data.js';
const person = {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"};
const heart = {uri: "http://bit.ly/2E7uI2U"};
const star = {uri: "http://bit.ly/2nFjNrl"};


class ArtView extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};


  }









  render() {
    return (
      <View>
       <AppHeader/>
      <ScrollView style={{marginBottom: 50}}>
<List containerStyle={{marginBottom: 20}}>
  {
    data.map((elem, i) => (

      <View key={i}>

        <Image
          style={{width: '100%', height: 200}}
          source={{uri: elem.url}}/>
        <Divider style={{ height: 2,backgroundColor: 'black' }} />
        <View style={{width: '100%', height: 40, flexDirection: 'row'}}>
          <View style={{width: '15%', height: 40, margin: 3}}>
            <Avatar
              small
              rounded
              source={person}
              onPress={() => console.log("Load Artist Page!")}
              activeOpacity={0.7}/>
          </View>
          <View style={{width: '55%', height: 40}}>
            <Text style={{marginTop: 10, marginLeft: 5}}>{elem.title}</Text>
          </View>
          <View style={{width: '15%', height: 40,margin: 3}}>
            <Avatar
              small
              rounded
              source={heart}
              onPress={() => console.log("Heart!")}
              activeOpacity={0.7}/>
            
          </View>
          <View style={{width: '15%', height: 40,margin: 3}}>
          <Avatar
              small
              rounded
              source={star}
              onPress={() => console.log("Star!")}
              activeOpacity={0.7}/>
            
          </View>
          


        </View>
        <Divider style={{ height: 1,backgroundColor: 'black' }} />
      </View>

    ))
  }
</List>
</ScrollView>

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
    width: "100%",
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  formContainer: {  
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
  },
 
});

const { fontStyle, headerContainer, container, selectedIconStyle } = styles;

export default ArtView;