import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
import { Header } from 'react-native-elements'


const headLeft = { icon: 'menu', color: '#fff' };
const headCenter = { text: 'PowWow!', style: { color: '#fff' } };
const headRight = { icon: 'home', color: '#fff' };


export const AppHeader = () => {
  return(<Header
        leftComponent={headLeft}
        centerComponent={headCenter}
        rightComponent={headRight}
        />)
}