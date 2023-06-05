import { ReactElement } from "react";
import { FinModal } from "../../shared/components/modal/finModal.component";

export function modalsStateReducer(
  state: Array<{ modalName: string; content: ReactElement }> = [],
  action: {
    type: string;
    modal: { name: string; content: ReactElement | undefined };
  }
) {
  switch (action.type) {
    case "OPEN_MODAL": {
      const newState = [...state];
      if (!newState.some((e) => e.modalName == action.modal.name)) {
        newState.push({
          modalName: action.modal.name,
          content: action.modal.content,
        });
      }
      return newState;
    }
    case "CLOSE_MODAL": {
      const newState = [...state];
      const stateToDelete = state.findIndex(
        (e) => e.modalName == action.modal.name
      );
      if (stateToDelete >= 0) {
        newState.splice(stateToDelete, 1);
      }

      return newState;
    }
    default:
      return state;
  }
}
