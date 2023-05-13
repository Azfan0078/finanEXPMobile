import { NavigationContainer } from "@react-navigation/native";
import { HomeStackRoutes } from "./home/routes/home.stack.routes";
import { AuthenticationStackRoutes } from "./authentication/routes/authentication.stack.routes";
import { Component } from "react";

export class IndexComponent extends Component {
  private isAuthenticated = false;
  render() {
    return (
      <NavigationContainer>
        {this.isAuthenticated ? <HomeStackRoutes /> : <AuthenticationStackRoutes />}
      </NavigationContainer>
    );
  }
}