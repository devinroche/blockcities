import React from 'react';
import { View } from 'react-native';
import AppContainer from './src/containers/AppContainer';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { createStackNavigator } from 'react-navigation';
import SearchContainer from './src/containers/SearchContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
            <Navigator />
        </View>
      </Provider>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {screen: AppContainer},
  Search: {screen: SearchContainer}
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})