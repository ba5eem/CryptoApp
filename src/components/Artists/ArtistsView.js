import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadArtists} from '../../Actions/artists-actions';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import { Card, ListItem, Button, SearchBar } from 'react-native-elements'
import { AppHeader } from '../Header/AppHeader';



class ArtistsView extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};


  }

  componentWillMount() {
    this.props.loadArtists();
  }







  render() {
    const {artists} = this.props;
    return (
      <View>
        <AppHeader/>
        <SearchBar
          lightTheme
          onChangeText={()=>console.log('change text')}
          onClearText={()=>console.log('clear text')}
          icon={{ type: 'font-awesome', name: 'search' }}
          showLoading
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder='Search' />
        <ScrollView  >

         <Card containerStyle={{padding: 0}} >
          {
            artists.map((u, i) => {
              return (
                <ListItem
                  onPress={()=>console.log('see the artist')}
                  key={i}
                  roundAvatar
                  title={u.name}
                  titleStyle={{fontFamily:'Permanent Marker'}}
                  avatar={{uri:u.photo}}
                />
              );
            })
          }
        </Card>
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

const ConnectedArtistsView = connect(
  mapStateToProps,
  {loadArtists}
)(ArtistsView)


export default ConnectedArtistsView;