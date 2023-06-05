import { ReactElement } from "react";
import { FinModal } from "../../shared/components/modal/finModal.component";

export function openModal(modal: { name: string; content: ReactElement }) {
  return {
    type: "OPEN_MODAL",
    modal,
  };
}

export function closeModal(modalName: string) {
  return {
    type: "CLOSE_MODAL",
    modal: { name: modalName },
  };
}
