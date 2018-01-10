import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hub } from './src/components';

import { Provider } from 'react-redux';
import Store from './src/Store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>

          <Hub/>

      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
