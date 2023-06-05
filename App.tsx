import React, { Component } from 'react';
import { loadAsync } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import {
  FredokaOne_400Regular
} from '@expo-google-fonts/fredoka-one'
import { theme } from './src/global/styles/theme';
import { NativeBaseProvider, View } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/store';
import * as SplashScreen from 'expo-splash-screen';
import IndexComponent from './src';



class App extends Component {
  state = {
    appIsReady: false,
  };
  public async componentDidMount() {
    try {
      await loadAsync({
        Roboto_300Light,
        Roboto_400Regular,
        Roboto_500Medium,
        FredokaOne_400Regular
      })
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ appIsReady: true });
    }
  }
  public onLayoutRootView = async () => {
    if (this.state.appIsReady) {
      await SplashScreen.hideAsync();
    }
  }

  public render() {
    const { appIsReady } = this.state;

    if (!appIsReady) {
      return null
    }
    return (
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <IndexComponent />
        </NativeBaseProvider>
      </Provider>
    );
  }
}

export default App;

