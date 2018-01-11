import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  ScrollView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadData} from '../../Actions/FetchData';
 
var { height } = Dimensions.get('window');
var { width } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;
const size = {width: "100%", height: 180};
 const link = {uri: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/search-128.png'}
class ArtPageComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: ''
    }
  }

  componentWillMount() {
    this.props.loadData();
  }



  renderArtView(elem,i){
    return (
          <View key={i} style={[styles.box, styles.box1]}>
            <Image source={{uri: elem.url}} style={size}/>
              <View style={styles.iconView}>
              <View style={styles.artView}>
                <Text style={styles.artTitle}>{elem.title}</Text>
                <Text style={styles.artTitle}>by {elem.Artist.name}</Text>
              </View>
              <View style={styles.iconView}>
                <Image source={{uri: elem.url}} style={{width: 20, height: 20}}/>
                <Image source={{uri: elem.url}} style={{width: 20, height: 20}}/>
              </View>
                
              </View>
          </View>
          )
  }


  render() {
    let {artwork} = this.props;
    return (

        <ScrollView style={styles.container}>
            {artwork.map(this.renderArtView)}
        </ScrollView>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    width: "100%",
    zIndex: 0

  },
  box: {
    height: box_height,
    borderTopWidth:2,
    borderTopColor:'#66949C',
    zIndex: 0
  },
  artTitle: {
    zIndex: 2
  },
  artView: {
    justifyContent: "space-around"
  },
  iconView: {
    flexDirection:'row',
    justifyContent: "space-around"
  }
});


function mapStateToProps(state){
  return{
    artwork: state.artwork
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    loadData: loadData
  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(ArtPageComponent);
