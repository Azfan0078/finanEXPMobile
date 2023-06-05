export interface IUserIdState {
  userId: string;
}
export function userIdStateReducer(
  state = {} as IUserIdState,
  action: { type: string; userId: string }
) {
  switch (action.type) {
    case "SET_USER_ID": {
      const newState = {
        userId: action.userId,
      } as IUserIdState;

      return newState;
    }
    default:
      return state;
  }
}
