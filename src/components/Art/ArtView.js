import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { List, ListItem, Avatar, Divider, Icon,Card } from 'react-native-elements';
import { connect } from 'react-redux';
import {loadArtists} from '../../Actions/artists-actions';
import { Ionicons } from 'react-native-vector-icons';
import Tabs from 'react-native-tabs';
import { StackNavigator } from 'react-navigation';
import { AppHeader } from '../Header/AppHeader';
import { data } from './data.js';

const heart = {uri: "http://bit.ly/2E7uI2U"};
const star = {uri: "http://bit.ly/2nFjNrl"};


class ArtView extends Component {
  constructor(props){
    super(props);
    this.state = {
      hate: 'ios-heart-outline',
      like: 'ios-heart'
    };


  }









  render() {
    const {artists} = this.props; 
    const {like,hate} = this.state;
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
          activeOpacity={0.7}
          source={{uri: elem.ftarturl}}/>
          <List containerStyle={{marginTop:0}}>
          <ListItem
            key={i}
            title={elem.name}
            fontFamily={'MarkerFelt-Wide'}
            rightIcon={
              <Ionicons
                name={hate}
                size={35}
                onPress={() => console.log('i like it!')}/>
            }
            avatar={<Avatar
              rounded
              source={elem.photo && {uri: elem.photo}}
              title={elem.name}/>}
            />

          </List>
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

const mapStateToProps = (state) => {
  return {
    artists: state.artists
  };
}

const ConnectedArtView = connect(
  mapStateToProps,
  {loadArtists}
)(ArtView)


export default ConnectedArtView;