import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native';
 
var { height } = Dimensions.get('window');
var box_count = 4;
var box_height = height / box_count;
const link = {uri: 'http://powwowhawaii.com/wp-content/uploads/2016/03/pwh2016-Luke-McCabe.jpg'}
const size = {width: 35, height: 35, marginRight: 10, marginLeft:10};

 
class CommunityPageComponent extends Component {




  renderArtView(elem,i){
    return (
          <View key={i} style={[styles.box, styles.box1]}>
            <Text>{elem.title}</Text>
          </View>
          )
  }


  render() {
    return (

        <ScrollView style={styles.container}>
            <View style={[styles.box, styles.box1]}>
              <Text>Map Animation goes here</Text>
            </View>
            <View style={[styles.chatView, styles.box2]}>
              <Image source={link} style={size}/>
              <View style={styles.messages}>
                <Text>chat goes here - time</Text>
                <Image source={link} style={size}/>
              </View>
              <Image source={link} style={size}/>

            </View>
        </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: "100%",
  },
  box: {
    height: box_height,
    borderTopWidth:2,
    borderTopColor:'#66949C'
  },
//header
  box1: {
      flex: 1,
      backgroundColor: '#2196F3'
  },
  //content
  box2: {
      flex: 1,
      backgroundColor: '#8BC34A'
  },
  //footer
  box3: {
      flex: .5,
      backgroundColor: '#e3aa1a'
  },
  chatView: {
    flexDirection:'row',
    justifyContent: "space-around"

  },
  messages: {

  }
});


export default CommunityPageComponent;
