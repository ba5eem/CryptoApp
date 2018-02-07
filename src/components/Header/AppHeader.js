import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native';
import { Header, Divider } from 'react-native-elements';


const headLeft = { icon: 'menu', color: '#fff' };
const headCenter = { text: 'PowWow!', style: {fontFamily: 'MarkerFelt-Wide',color: 'black', fontSize: 30 } };
const headRight = { icon: 'home', color: '#fff' };
const imgSrc = 'http://powwowhawaii.com/wp-content/themes/powwow/images/logo.png';

export const PowWowTitle = () => {
  return(
      <Image
      style={{width: 40, height: 40}}
      source={{uri: imgSrc}}/>
    )
}




export const AppHeader = () => {


  

  return(

      <Header
      statusBarProps={{ barStyle: 'light-content' }}
      centerComponent={<PowWowTitle/>}
      outerContainerStyles={{backgroundColor: 'white' }}
      innerContainerStyles={{justifyContent: 'space-around',}}
/>

        )
}