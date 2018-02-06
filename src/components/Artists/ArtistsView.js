import React, {Component} from 'react';
import { View, Text, Image, StyleSheet,ScrollView } from 'react-native'
import { Card, ListItem, Button, SearchBar } from 'react-native-elements'
import { AppHeader } from '../Header/AppHeader';

const person = {uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"};


const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]



class ArtistsView extends Component {
  constructor(props){
    super(props);
    this.state = {page:'community'};


  }









  render() {

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
            users.map((u, i) => {
              return (
                <ListItem
                  key={i}
                  roundAvatar
                  title={u.name}
                  avatar={{uri:u.avatar}}
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

export default ArtistsView;