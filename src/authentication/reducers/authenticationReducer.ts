export default function authenticationReducer(
  state = {} as {
    isAuthenticated
  },
  action: { type: string; value: boolean }
) {
  switch (action.type) {
    case "SET_IS_AUTHENTICATED":
      return {
        
        ...state,
        isAuthenticated: action.value,
      };
    default:
      return state;
  }
}
