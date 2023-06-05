import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthenticationComponent from "../authentication.component"

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthenticationStackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Screen
        name="auth"
        component={AuthenticationComponent}>

      </Screen>
    </Navigator>
  )
}