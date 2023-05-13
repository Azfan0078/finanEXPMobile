import { Component } from "react";
import { View, Text } from "./styles";
import { Button } from "native-base";

class AuthenticationComponent extends Component {
  render() {
    return (
      <View>
        <Text testID="teste">Authentication component</Text>
        <Button>Click me</Button>
      </View>
    );
  }
}

export default AuthenticationComponent;