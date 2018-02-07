import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,ScrollView, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, ListItem, Button } from 'react-native-elements';



export const Search = () => {


  

  return(

<View style={{flexDirection:'row', width: window.width, margin: 10, padding:4, alignItems:'center', justifyContent:'center', borderWidth:4, borderColor:'#888', borderRadius:10, backgroundColor:'#fff'}}>
  <View style={{flex:4}}>
    <TextInput
        onChangeText = {(textEntry) => {this.setState({searchText: textEntry})}}
        style={{backgroundColor:'transparent'}}
        onSubmitEditing = {()=>{this.onSubmit(this.state.searchText)}}
      />
  </View>
  <View style={{flex:1}}>
    <Button onPress={ () => this.onSubmit(this.state.searchText) }>

    </Button>
  </View>
</View>

        )
}