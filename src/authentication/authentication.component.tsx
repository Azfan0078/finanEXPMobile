import { Component } from "react";
import { Box, Center, Icon, Image, Text } from "native-base";
import LoginAuthenticationComponent from "./forms/loginForm/loginForm.component";
import RegisterAuthenticationComponent from "./forms/registerForm/registerForm.component";
import { FinButton } from "../shared/components/buttons/finButton.component";
import { Ionicons } from '@expo/vector-icons';
import { bindActionCreators } from "redux";
import * as authenticationFormActions from './actions/authenticationFormActions'
import { connect } from 'react-redux'
import { Platform } from "react-native";
import { ModalsControlService } from "../shared/services/modalsControl.service";
import { AuthenticationModals } from "./authentication-modals";
import { AuthenticationService } from "./services/authentication.service";

interface IAuthenticationComponentProps {
  toggleRegisterModal: (close: boolean) => { type: string, value: boolean };
  toggleLoginModal: (close: boolean) => { type: string, value: boolean };
}
class AuthenticationComponent extends Component<IAuthenticationComponentProps> {
  public state = {
    isLoading: true
  }
  private modalsControlService = new ModalsControlService();
  private authenticationService = new AuthenticationService();

  public componentDidMount() {
    this.authenticationService.verifyToken().finally(() => {
      this.setState({ isLoading: false })
    })
    
  }

  private openRegisterModal = () => {
    this.modalsControlService.openModal(AuthenticationModals.registerModal, <RegisterAuthenticationComponent />)

  }

  private openLoginModal = () => {
    this.modalsControlService.openModal(AuthenticationModals.loginFormModal, <LoginAuthenticationComponent />)
  }

  public render() {
    if (this.state.isLoading) {
      return null;
    }

    return (
      <Box
        backgroundColor={"primary.50"}
        height={"full"}>
        <Box>
          <Center
            height={"1/2"}>
            <Box
              height={100}
              width={"full"}
              margin={10}>
              <Center>
                <Image
                  source={require("../assets/images/finanEXP-logo.png")}
                  alt="Logo"
                  size="xl"
                  width={280} />
              </Center>
            </Box>

            <Box
              height={200}
              width={"full"}>
              <Center>
                <Image
                  source={require('../assets/images/login-img.png')}
                  alt="Imagem complementar"
                  size={180}
                  borderRadius={70}
                  opacity={0.7}></Image>
                <Text
                  color={"authenticationTitle"}
                  fontFamily={"fredokaRegular"}
                  fontSize={30}>
                  Sua jornada começa aqui!
                </Text>
              </Center>
            </Box>
          </Center>
          <Box
            height={'1/2'}
            flexDirection='row'
            justifyContent='space-around'
            alignItems='flex-end'
            padding='5'
          >
            <FinButton
              onPress={this.openRegisterModal}
              label="Registrar"
              colorScheme='info'
              leftIcon={<Icon
                as={Ionicons}
                name={Platform.OS ? 'person-circle-outline' : 'person-circle-outline'}
                size="5"
                color="white" />}>
            </FinButton>
            <FinButton
              onPress={this.openLoginModal}
              label="Entrar"
              colorScheme='info'
              leftIcon={<Icon
                as={Ionicons}
                name={Platform.OS ? 'arrow-forward-circle-outline' : 'arrow-forward-circle-outline'}
                size="5"
                color="white" />}>
            </FinButton>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(authenticationFormActions, dispatch)

export default connect(null, mapDispatchToProps)(AuthenticationComponent)