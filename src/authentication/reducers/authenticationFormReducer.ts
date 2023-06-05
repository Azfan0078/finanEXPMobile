export default function authenticationFormReducer(
  state = {} as {
    registerModalVisible: boolean;
    loginModalVisible:boolean;
  },
  action: { type: string; isVisible: boolean }
) {
  switch (action.type) {
    case "TOGGLE_REGISTER_MODAL":
      return {
        ...state,
        registerModalVisible: action.isVisible,
      };
    case "TOGGLE_LOGIN_MODAL":
      return {
        ...state,
        loginModalVisible: action.isVisible,
      };
    default:
      return state;
  }
}
