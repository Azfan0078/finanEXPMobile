import { ReactElement } from "react";
import { closeModal, openModal } from "../../global/actions/modalActions";
import store from "../../store";

export class ModalsControlService {
  public openModal(modalName:string, modal: ReactElement) {
    store.dispatch(openModal({ name: modalName, content: modal }));
  }
  public closeModal(modalName:string) {
    store.dispatch(closeModal(modalName));
  }
}
