import { Icon, Modal, Stack } from "native-base";
import React, { Component } from "react";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Platform, Pressable } from "react-native";
import { FinModal } from "../../../shared/components/modal/finModal.component";
import { FinButton } from "../../../shared/components/buttons/finButton.component";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authenticationFormActions from '../../actions/authenticationFormActions'
import { FinInput } from "../../../shared/components/inputs/finInput.component";
import validator from 'validator'
import { ModalsControlService } from "../../../shared/services/modalsControl.service";
import { AuthenticationModals } from "../../authentication-modals";
import { AuthenticationService } from "../../services/authentication.service";
import { UserInput } from "../../../core/dtos/user/userInput";

interface ILoginAuthenticationComponent {
  loginModalVisible?: boolean;
  toggleLoginModal?: (close: boolean) => { type: string, value: boolean };
}

class LoginAuthenticationComponent extends Component<ILoginAuthenticationComponent> {
  private modalsControlService = new ModalsControlService();
  private authenticationService = new AuthenticationService();

  public state = {
    email: '',
    password: '',
    showPassword: false
  }

  private get canSave(): boolean {
    return this.validateInputRequired()
      && validator.isEmail(this.state.email)

  }
  private validateInputRequired(): boolean {
    return validator.contains(this.state.email)
      && validator.contains(this.state.password)
  }

  private save() {
    if (!this.canSave) {
      return;
    }
    this.authenticationService.authenticateUser({
      email: this.state.email,
      password: this.state.password
    } as UserInput)
  }
  private closeModal() {
    this.modalsControlService.closeModal(AuthenticationModals.loginFormModal)
  }
  public render() {
    return (
      <FinModal
        name='registerModalVisible'
        closeModal={this.closeModal.bind(this)}
      >
        <Modal.Header>Entrar</Modal.Header>
        <Modal.Body>
          <Stack space={5}>
            <FinInput
              label="Email"
              type="text"
              value={this.state.email}
              onChangeText={(email: string) => this.setState({ email })}
              variant="underlined"
              placeholder="example@ex.com"
            />
            <FinInput
              label="Senha"
              type={this.state.showPassword ? "text" : "password"}
              onChangeText={(password: string) => this.setState({ password })}
              variant="underlined"
              placeholder="Senha"
              inputRightElement={
                <Pressable onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                  <Icon as={<MaterialIcons name={this.state.showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
              }
            />
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <FinButton
            label="Salvar"
            disabled={!this.canSave}
            colorScheme={this.canSave ? 'info' : 'trueGray'}
            onPress={this.save.bind(this)}
            rightIcon={<Icon as={Ionicons}
              name={Platform.OS ? 'send' : 'send'}
              size="5"
              color="white" />} />
        </Modal.Footer>
      </FinModal>
    )
  }
}
const mapStateToProps =
  state => {
    return ({
      loginModalVisible: state.authenticationFormReducer.loginModalVisible
    })
  }

const mapDispatchToProps = dispatch =>
  bindActionCreators(authenticationFormActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthenticationComponent)