import { NavigationContainer } from "@react-navigation/native";
import { HomeStackRoutes } from "./home/routes/home.stack.routes";
import { AuthenticationStackRoutes } from "./authentication/routes/authentication.stack.routes";
import { Component, ReactElement } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as globalActions from './global/actions/alertActions'
import { FinAlert } from "./shared/components/alerts/finAlert.component";
import { IAlertState } from "./global/reducers/alertReducers";
import { View } from "native-base";

interface IIndexComponentProps {
  alerts: Array<IAlertState>
  modals: Array<{ modalName: string }>
  isAuthenticated: boolean
}

class IndexComponent extends Component<IIndexComponentProps> {
  private getAllAlerts(): Array<ReactElement> {
    const result = []
    this.props.alerts?.forEach((alert: IAlertState, i) => {
      result.push(<FinAlert 
        success={alert.success}
        name={alert.name}
        message={alert.message}
        key={i} />)
    })
    return result;
  }
  private getAllModals(): Array<ReactElement> {
    const result = []
    this.props.modals?.forEach((modal: { modalName: string, content: ReactElement }, i) => {
      result.push(<View key={i}>{modal.content}</View>)
    })
    return result
  }
  public render() {
    const alerts = this.getAllAlerts();
    const modals = this.getAllModals();

    return (
      <NavigationContainer>
        {modals}
        {alerts}
        {this.props.isAuthenticated ? <HomeStackRoutes /> : <AuthenticationStackRoutes />}
      </NavigationContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(globalActions, dispatch)

const mapStateToProps =
  state => {
    return ({
      alerts: state.alertsStateReducer,
      modals: state.modalsStateReducer,
      isAuthenticated: state.authenticationReducer.isAuthenticated
    })
  }
export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)