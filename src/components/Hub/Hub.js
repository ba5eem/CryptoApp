import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Image,Button } from 'react-native';
import Tabs from 'react-native-tabs';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import CommunityView from '../Community/CommunityView';
import { Ionicons } from 'react-native-vector-icons';
import ArtView from '../Art/ArtView';
import MapScreen from '../Map/MapScreen';
import ArtistsView from '../Artists/ArtistsView';



const Screens = {
    
    Map: { screen: MapScreen },
    Art: { screen: ArtView },
    Artists: {screen: ArtistsView},
    Community: { screen: CommunityView }
    ,
  };



const Navigation = TabNavigator(
  Screens,
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Art') {
          iconName = `ios-color-palette${focused ? '' : '-outline'}`;
        } else if (routeName === 'Community') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Camera') {
          iconName = `ios-camera${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Map') {
          iconName = `ios-compass${focused ? '' : '-outline'}`;
        }
          else if (routeName === 'Artists') {
          iconName = `ios-flower${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);




class Hub extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};
  }









  render() {
    return (
      
      <Navigation/>
    );
  }
}


export default Hub;