import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image, TextInput } from 'react-native';
import ArtPageComponent from '../Art/ArtPage';
import MapPageComponent from '../Map/MapPage';
import CommunityPageComponent from '../Community/CommunityPage';
import ArtistsPageComponent from '../Artists/ArtistsPage';

const link = {uri: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/search-128.png'}
const size = {width: 35, height: 35, marginRight: 10, marginLeft:10};

export const MapPage = ({elem}) => {
  return (
      <MapPageComponent elem={elem} />
    )
}

export const ArtPage = ({elem}) => {
  return (
      <ArtPageComponent elem={elem} />
    )
}

export const CommunityPage = ({elem}) => {
  return (
      <CommunityPageComponent elem={elem} />
    )
}

export const ArtistsPage = ({elem}) => {
  return (
      <ArtistsPageComponent elem={elem} />
    )
}

export const Tab = ({title}) => {
  return (
      <Text selectedIconStyle={selectedIconStyle} name="art">{title}
      </Text>
      )
}

export const SearchBar = () => {
  return (
        <KeyboardAvoidingView behavior="padding" style={keyboardContainer}>
          <View style={formContainer}>
          <Image source={link} style={size}/>
          <TextInput
            placeholder="search artwork"
            placeholderTextColor='black'
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={input}/>
          <Image source={link} style={size}/>
          </View>
        </KeyboardAvoidingView>
        )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
    borderColor: '#d6d7da',

  },
  formContainer: { 
    marginTop: 30, 
    flexDirection:'row',
    justifyContent: 'center',


       
  },
  selectedIconStyle: {
    borderTopWidth:2,
    borderTopColor:'#66949C'
  }
});

const { keyboardContainer, input, selectedIconStyle, formContainer } = styles;