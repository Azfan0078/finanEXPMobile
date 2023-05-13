import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { HomeComponent } from "../home.component"

const { Navigator , Screen } = createNativeStackNavigator()

export function HomeStackRoutes(){
  return (
    <Navigator>
      <Screen
      name="home"
      component={ HomeComponent }>
      </Screen>
    </Navigator>
  )
}