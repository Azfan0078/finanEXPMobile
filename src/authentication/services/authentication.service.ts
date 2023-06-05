import { AxiosError, AxiosResponse } from "axios";
import { UserProxy } from "../../api/userProxy/userProxy";
import { UserInput } from "../../core/dtos/user/userInput";
import { ResponseDto } from "../../shared/classes/responseDto";
import { AlertsControlService } from "../../shared/services/alertsControl.service";
import { ModalsControlService } from "../../shared/services/modalsControl.service";
import { AuthenticationModals } from "../authentication-modals";
import { AuthenticationProxy } from "../../api/authenticationProxy/authentication.proxy";
import AsyncStorage  from '@react-native-async-storage/async-storage'
import store from '../../store'
import { setIsAuthenticate } from "../actions/authenticationActions";
import { setUserId } from "../../global/actions/userIdActions";

export class AuthenticationService {
  private jwtTokenKey = '@FinanEXP:fSSIdtkn'
  private userProxy = new UserProxy();
  private authenticationProxy = new AuthenticationProxy();
  private alertsControlService = new AlertsControlService();
  private modalsControlService = new ModalsControlService();
  
  public createNewUser(user: UserInput) {
    return this.userProxy
      .createNewUserRequest(user)
      .then((response: AxiosResponse<ResponseDto>) => {
        this.modalsControlService.closeModal(AuthenticationModals.registerModal)
        this.authenticateUser(user);
      })
      .catch((error: AxiosError) => {
        this.modalsControlService.closeModal(AuthenticationModals.registerModal)
        this.alertsControlService.openAlert('registerUserFail', 'Falha ao registrar usuário', { success:false })
      });
  }
  public authenticateUser(user:UserInput) {
    return this.authenticationProxy.authUser(user).then((response:AxiosResponse<ResponseDto>) => {
      this.modalsControlService.closeModal(AuthenticationModals.loginFormModal)
      AsyncStorage.multiSet([
        [this.jwtTokenKey, response.data.content]
      ])
      store.dispatch(setIsAuthenticate(true))
    })
    .catch((error:AxiosError) => {
      this.modalsControlService.closeModal(AuthenticationModals.loginFormModal)
      this.alertsControlService.openAlert('registerUserFail', 'Email ou senha incorreto', { success:false })
    });
  }
  public async verifyToken(): Promise<void> {
    const userId = (await this.authenticationProxy.verifyToken()).data.content;

    if(userId != null) {
      store.dispatch(setUserId(userId));
      store.dispatch(setIsAuthenticate(true))
    }
    
  }
}