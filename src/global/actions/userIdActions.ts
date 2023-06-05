export function setUserId(userId: string) {
  return {
    type: "SET_USER_ID",
    userId,
  };
}
