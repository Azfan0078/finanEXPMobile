import { Icon, Modal, Pressable, Stack, } from "native-base";
import { Component } from "react";
import { Platform } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FinInput } from "../../../shared/components/inputs/finInput.component";
import { FinButton } from "../../../shared/components/buttons/finButton.component";
import validator from 'validator'
import { FinModal } from "../../../shared/components/modal/finModal.component";
import { connect } from "react-redux";
import * as authenticationFormActions from '../../actions/authenticationFormActions'
import { bindActionCreators } from "redux";
import { AuthenticationService } from "../../services/authentication.service";
import { UserInput } from "../../../core/dtos/user/userInput";
import { ModalsControlService } from "../../../shared/services/modalsControl.service";
import { CommonServices } from "../../../shared/services/commonServices.service";

interface IErros {
  passwordNotEquals: string
}
interface IRegisterAuthenticationComponente {
  registerModalVisible?: boolean;
  toggleRegisterModal?: (close: boolean) => { type: string, value: boolean };
}
class RegisterAuthenticationComponent extends Component<IRegisterAuthenticationComponente> {
  constructor(props) {
    super(props)
  }
  private authenticationService = new AuthenticationService();
  private modalsControlService = new ModalsControlService();
  private commonServices = new CommonServices();
  
  public state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
    errors: {} as IErros
  }
  private get canSave(): boolean {
    return this.validateInputRequired()
      && this.validateInputLength()
      && validator.isEmail(this.state.email)
      && validator.isStrongPassword(this.state.password)
      && this.validateTrim()

  }
  private validateInputLength(): boolean {
    return validator.isLength(this.state.name, { min: 0, max: 25 })
      && validator.isLength(this.state.password, { min: 0, max: 30 })
  }
  private validateInputRequired(): boolean {
    return validator.contains(this.state.name)
      && validator.contains(this.state.email)
      && validator.contains(this.state.password)
      && validator.contains(this.state.confirmPassword)
  }
  private validateTrim():boolean {
    return this.commonServices.trimValidator(this.state.email) && this.commonServices.trimValidator(this.state.name)
  }
  private save() {
    if (!this.canSave || !this.validatePasswords()) {
      return;
    }
    const userInput = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    } as UserInput
    this.authenticationService.createNewUser(userInput)
  }
  private validatePasswords(): boolean {
    if (this.state.password != this.state.confirmPassword) {
      this.setState({
        errors: {
          ...this.state.errors,
          passwordNotEquals: 'As senhas não correspondem !'
        }
      })
      return false;
    } else {
      const errors = this.state.errors
      delete errors.passwordNotEquals
      this.setState({
        errors
      })
      return true;
    }
  }
  private closeModal() {
    this.modalsControlService.closeModal('registerFormModal')
  }
  public render() {
    return (
      <FinModal
        name='registerModalVisible'
        closeModal={this.closeModal.bind(this)}
      >
        <Modal.Header>Registrar</Modal.Header>
        <Modal.Body>
          <Stack space={2}>
            <FinInput
              isRequired={true}
              label="Nome"
              placeholder="Nome"
              variant="underlined"
              hint="O nome não pode conter espaços em branco desnecessários."
              type="text"
              value={this.state.name}
              onChangeText={(name: string) => this.setState({ name })}
            ></FinInput>
            <FinInput
              isRequired={true}
              label="Email"
              placeholder="Email"
              variant="underlined"
              type="text"
              value={this.state.email}
              onChangeText={(email: string) => this.setState({ email })}
            ></FinInput>
            <FinInput
              isInvalid={'passwordNotEquals' in this.state.errors}
              isRequired={true}
              label="Senha"
              variant="underlined"
              type={this.state.showPassword ? "text" : "password"}
              value={this.state.password}
              onChangeText={(password: string) => this.setState({ password })}
              placeholder="Senha"
              hint="Senha deve possuir no mínimo 8 caracteres, um caractere especial, uma letra maiúscula, uma letra minúscula e um número."
              inputRightElement={
                <Pressable onPress={() => this.setState({ showPassword: !this.state.showPassword })}>
                  <Icon as={<MaterialIcons name={this.state.showPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
              }
            ></FinInput>
            <FinInput
              isInvalid={'passwordNotEquals' in this.state.errors}
              isRequired={true}
              label="Confirmar senha"
              variant="underlined"
              type={this.state.showConfirmPassword ? "text" : "password"}
              value={this.state.confirmPassword}
              onChangeText={(confirmPassword: string) => this.setState({ confirmPassword })}
              placeholder="Confirmar senha"
              inputRightElement={
                <Pressable onPress={() => this.setState({ showConfirmPassword: !this.state.showConfirmPassword })}>
                  <Icon as={<MaterialIcons name={this.state.showConfirmPassword ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                </Pressable>
              }
            ></FinInput>
          </Stack>
        </Modal.Body>
        <Modal.Footer>
          <FinButton
            label="Salvar"
            disabled={!this.canSave}
            colorScheme={this.canSave ? 'info' : 'trueGray'}
            onPress={this.save.bind(this)}
            rightIcon={<Icon
              as={Ionicons}
              name={Platform.OS ? 'send' : 'send'}
              size="5"
              color="white" />}>
          </FinButton>
        </Modal.Footer>
      </FinModal>

    )
  }
}
const mapStateToProps = state => {
  return ({
    registerModalVisible: state.authenticationFormReducer.registerModalVisible as boolean
  })
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(authenticationFormActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAuthenticationComponent)