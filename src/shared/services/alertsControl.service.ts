import { closeAlert, openAlert } from '../../global/actions/alertActions'
import store from '../../store'

export class AlertsControlService {
  public openAlert(name:string, message:string, options:{success:boolean}) {
    store.dispatch(openAlert({name, message, success: options.success}));
    setTimeout(() => {
      store.dispatch(closeAlert({name}));
    }, 5000)
  }
  public closeAlert(name:string) {
    store.dispatch(closeAlert({name}));
  }
}
