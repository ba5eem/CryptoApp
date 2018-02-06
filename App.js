import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hub } from './src/components';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/Reducers'
import { Font } from 'expo';

//STORE--------------------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );





export default class App extends React.Component {
  constructor(){
    super();

    this.state = {
      font: ''
    }
  }

  componentDidMount() {
    Font.loadAsync({
      'Permanent Marker': require('./assets/PermanentMarker-Regular.ttf'),
    });
    this.setState({font: 'Permanent Marker'})
  }


  render() {
    let {font} = this.state;
    return (
      <Provider store={store}>
            <Hub font={font}/>


      </Provider>
    );
  }
}
