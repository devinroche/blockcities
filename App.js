import React from 'react';
import { View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { Font } from 'expo';
import store from './src/redux/store';
import AppContainer from './src/containers/AppContainer';
import ProfileContainer from './src/containers/ProfileContainer';
import SearchContainer from './src/containers/SearchContainer';
import SettingsContainer from './src/containers/SettingsContainer';
import MarketplaceContainer from './src/containers/MarketplaceContainer';
import StartContainer from './src/containers/StartContainer';
import LoginContainer from './src/containers/LoginContainer';
import CreateAccountContainer from './src/containers/CreateAccountContainer';
import CreateAccountNextContainer from './src/containers/CreateAccountNextContainer';


export default class App extends React.Component {
    state = {
        loaded: false,
    }

    async componentDidMount() {
        await Font.loadAsync({
            GBold: require('./assets/fonts/GreycliffCF-Bold.otf'),
            GDemi: require('./assets/fonts/GreycliffCF-DemiBold.otf'),
            GMedium: require('./assets/fonts/GreycliffCF-Medium.otf'),
            GRegular: require('./assets/fonts/GreycliffCF-Regular.otf'),
            GLight: require('./assets/fonts/GreycliffCF-Light.otf'),
        })
        this.setState({loaded: true});
    }
    render() {
        if (!this.state.loaded) {
            return <Text>loading</Text>;
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
}, {
    initialRouteName: 'Start',
    headerMode: 'none',
});
