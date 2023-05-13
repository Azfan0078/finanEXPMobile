import { Component } from "react";
import { View, Text } from "react-native";
import  homeStyles from './home.styles'

export class HomeComponent extends Component {
  render() {
    return (
      <View style={homeStyles.container}>
        <Text>Home component</Text>
      </View>
    );
  }
}