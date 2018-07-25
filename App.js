import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navbar from './src/containers/NavContainer'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <AppContainer />
        </View>
      </Provider>
    );
  }
}