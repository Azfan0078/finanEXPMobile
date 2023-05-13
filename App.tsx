import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import { loadAsync } from 'expo-font';
import AppLoading from 'expo-app-loading';
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';
import theme from './src/global/styles/theme';
import { IndexComponent } from './src';
import { Box, NativeBaseProvider } from 'native-base';

class App extends Component {
  state = {
    fontsLoaded: false,
  };
  async componentDidMount() {
    await loadAsync({
      Roboto_300Light,
      Roboto_400Regular,
      Roboto_500Medium
    })
    this.setState({ fontsLoaded: true });
  }
  render() {
    const { fontsLoaded } = this.state;

    if (!fontsLoaded) {
      return <AppLoading />
    }
    return (
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          <IndexComponent />
        </NativeBaseProvider>
      </ThemeProvider>
    );
  }
}

export default App;

