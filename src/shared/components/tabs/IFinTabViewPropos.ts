import { ComponentType } from "react";
import { Route } from "react-native-tab-view"

export interface IFinTabViewProps {
  routes: Array<Route>;
  scenes: {[key: string]: ComponentType<unknown>}
}
