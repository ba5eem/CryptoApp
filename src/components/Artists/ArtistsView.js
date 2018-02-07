import React, {Component} from 'react';
import { connect } from 'react-redux';
import {loadArtists} from '../../Actions/artists-actions';
import { View, Text, Image, StyleSheet,ScrollView, TextInput } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { Card, ListItem, Button } from 'react-native-elements';
import {Search} from './Search';
import { AppHeader } from '../Header/AppHeader';
import { data } from '../Art/data.js';


class ArtistsView extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: false,
      obj: {},
      query: ''
    };

  }

  componentWillMount() {
    //this.props.loadArtists();
  }


  checkthis(){
    console.log('ssss')
  }




  renderList(){
    return(
      <View>
        <AppHeader/>
        <ScrollView  >

         <Card containerStyle={{padding: 0}} >
          {
            data.map((u, i) => {
              return (
                <ListItem
                  onPress={()=>this.setState({view: true, obj: u})}
                  key={i}
                  roundAvatar
                  title={u.name}
                  titleStyle={{fontFamily: 'MarkerFelt-Wide'}}
                  avatar={{uri:u.photo}}
                />
              );
            })
          }
        </Card>
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
    const {view,obj} = this.state;
    switch(view){
      case false:
        return (
              <View>
                {this.renderList()}
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

const ConnectedArtistsView = connect(
  mapStateToProps,
  {loadArtists}
)(ArtistsView)


export default ConnectedArtistsView;