import { IAlertState } from "../reducers/alertReducers";

export function openAlert(alert: IAlertState) {
  return {
    type: 'OPEN_ALERT',
    alert
  };
}
export function closeAlert(alert: { name: string }) {
  return {
    type: 'CLOSE_ALERT',
    alert
  };
}