import DashboardComponent from "../pages/dashboard/dashboard.component"
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function HomeDrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardComponent}/>
    </Drawer.Navigator>
  )
}