import React from 'react';
import { View, Text, Image} from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { Font, Asset, AppLoading } from 'expo';
import store from './src/redux/store';
import AppContainer from './src/containers/AppContainer';
import ProfileContainer from './src/containers/ProfileContainer';
import SearchContainer from './src/containers/Search/SearchContainer';
import SettingsContainer from './src/containers/SettingsContainer';
import MarketplaceContainer from './src/containers/MarketplaceContainer';
import StartContainer from './src/containers/Entry/StartContainer';
import LoginContainer from './src/containers/Entry/LoginContainer';
import CreateAccountContainer from './src/containers/Entry/CreateAccountContainer';
import CreateAccountNextContainer from './src/containers/Entry/CreateAccountNextContainer';
import BuildingContainer from './src/containers/BuildingContainer';
import FeaturedContainer from './src/containers/FeaturedContainer'
import {fonts2load, images2load} from './AssetsLoad'

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

export default class App extends React.Component {
    state = {
        loaded: false,
    }

    async _loadAssetsAsync() {
        await cacheImages(images2load);
        await Font.loadAsync(fonts2load);
        this.setState({loaded: true});
      }

    async componentDidMount(){
        console.disableYellowBox = true;
		this._loadAssetsAsync();
	}
    render() {
        if (!this.state.loaded) {
            return (
                <AppLoading />
            );
        }
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
    Marketplace: { screen: MarketplaceContainer },
    Start: { screen: StartContainer },
    Login: { screen: LoginContainer },
    CreateAccount: { screen: CreateAccountContainer },
    CreateAccountNext: { screen: CreateAccountNextContainer },
    BuildingPage: { screen: BuildingContainer },
    FeaturedPage: {screen: FeaturedContainer}
}, {
    initialRouteName: 'Start',
    headerMode: 'none',
});
