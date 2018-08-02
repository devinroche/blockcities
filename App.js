import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import AppContainer from './src/containers/AppContainer';
import store from './src/redux/store';
import ProfileContainer from './src/containers/ProfileContainer';
import SearchContainer from './src/containers/SearchContainer';
import SettingsContainer from './src/containers/SettingsContainer'
import MarketplaceContainer from './src/containers/MarketplaceContainer';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Navigator />
                </View>
            </Provider>
        );
    }
}

const Navigator = createStackNavigator({
    Home: { screen: AppContainer },
    Profile: { screen: ProfileContainer },
    Search: { screen: SearchContainer },
    Settings: { screen: SettingsContainer },
    Marketplace: { screen: MarketplaceContainer }
}, {
    initialRouteName: 'Home',
    headerMode: 'none',
});
