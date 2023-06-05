import { BASE_URL } from "@env";
import { UserInput } from "../../core/dtos/user/userInput";
import axios, { AxiosResponse } from 'axios'
import { ResponseDto } from "../../shared/classes/responseDto";
export class UserProxy {
  private basePath = `${BASE_URL}/users`;

  public createNewUserRequest(user: UserInput): Promise<AxiosResponse<ResponseDto>> {
    return axios.post(`${this.basePath}/add`, user)
  }
}
