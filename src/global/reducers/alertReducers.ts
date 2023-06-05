export interface IAlertState {
   name: string;
   message:string;
   success:boolean
}
export function alertsStateReducer(
  state: Array<IAlertState> = [],
  action: { type: string; alert: IAlertState }
) {
  switch (action.type) {
    case "OPEN_ALERT": {
      const newState = [...state];
      if (!newState.some((e) => e.name == action.alert.name)) {
        newState.push({ name: action.alert.name, message: action.alert.message, success:action.alert.success });
      }
      return newState;
    }
    case "CLOSE_ALERT": {
      const newState = [...state];
      const stateToDelete = state.findIndex(e => e.name == action.alert.name)
      newState.splice(stateToDelete, 1)

      return newState;
    }
    default:
      return state;
  }
}
