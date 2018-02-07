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



class ArtView extends Component {
  constructor(props){
    super(props);
    this.state = {
      hate: 'ios-heart-outline',
      like: 'ios-heart',
      status: false,
      view: false,
      obj: {},
    };
  }

  renderFeatured(status, like, hate){
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
                      onPress={()=>this.setState({view: true, obj: elem})}
                      rightIcon={
                        <Ionicons
                          name={status ? like : hate}
                          size={35}
                          onPress={() => console.log('i like it, or hate it!')}/>
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
      )
  }

renderSingleArtist(elem){
    return(
        <ScrollView>
          <ListItem
          title={elem.name}
          titleStyle={{textAlign: 'center'}}
          fontFamily={'MarkerFelt-Wide'}
          onPress={() => this.setState({view: false})}
          hideChevron={true}
          leftIcon={<Ionicons
                      name={'ios-arrow-back'}
                      size={50}/>
                        }/>
          <Image
            style={{width: '100%', height: 200}}
            activeOpacity={0.7}
            source={{uri: elem.photo}}/>  
          <Text style={{fontFamily: 'MarkerFelt-Wide', fontSize: 20,textAlign: 'center', padding: 5}}>{elem.bio}</Text>   
          <Text style={{fontFamily: 'MarkerFelt-Wide', fontSize: 20,textAlign: 'center', color: 'blue', padding: 5, backgroundColor: 'powderblue'}}
            onPress={() => Linking.openURL(elem.website)}>
              Visit Artists Page
          </Text>     
          <Image
            style={{width: '100%', height: 200}}
            activeOpacity={0.7}
            source={{uri: elem.ftarturl}}/>              
        </ScrollView>
      )
  }





  render() {
    const {artists} = this.props; 
    const {like,hate,status,view, obj} = this.state;
    switch(view){
      case false:
        return (
              <View>
                {this.renderFeatured(status,like,hate)}
              </View>
            )
      case true:
        return (
              <View>
                <AppHeader/>
                {this.renderSingleArtist(obj)}
              </View>
              )
    }
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