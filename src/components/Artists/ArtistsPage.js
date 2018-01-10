import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
 
var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

const data = [
  {title: 'BOX1'}, {title: 'BOX2'}, {title: 'BOX3'}, {title: 'BOX4'}, {title: 'BOX5'}, {title: 'BOX6'}
]
 
class ArtistsPageComponent extends Component {




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
            {data.map(this.renderArtView)}
        </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
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
      flex: 10,
      backgroundColor: '#8BC34A'
  },
  //footer
  box3: {
      flex: .5,
      backgroundColor: '#e3aa1a'
  }
});


export default ArtistsPageComponent;
