import { Component } from "react";
import { IComponentBaseProps } from "../../interfaces/iComponentBaseProps";
import { Modal } from "native-base";
import { Keyboard } from "react-native";

export interface IFinModalProps extends IComponentBaseProps {
  name: string;
  children?: JSX.Element[];
  hideCloseButton?: boolean;
  closeModal: () => void;
}
export class FinModal extends Component<IFinModalProps> {
  public state = {
    keyBoardVisible: false
  }
  constructor(props: IFinModalProps) {
    super(props)
  }
  componentDidMount() {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        this.setState({ keyBoardVisible: true });
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        this.setState({ keyBoardVisible: false });
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }
  public render() {
    return (
      <Modal
        zIndex={1}
        isOpen={true}
        onClose={() => this.props.closeModal()}
        pb={this.state.keyBoardVisible ? '50%' : '0'}>
        <Modal.Content maxWidth="400px">
          {this.props.hideCloseButton ? <></> : <Modal.CloseButton />}
          {this.props.children}
        </Modal.Content>
      </Modal>
    )
  }
}