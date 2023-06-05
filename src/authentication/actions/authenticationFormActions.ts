export function toggleRegisterModal(isVisible:boolean) {
  return {
    type: 'TOGGLE_REGISTER_MODAL',
    isVisible
  };
}
export function toggleLoginModal(isVisible:boolean) {
  return {
    type: 'TOGGLE_LOGIN_MODAL',
    isVisible
  };
}