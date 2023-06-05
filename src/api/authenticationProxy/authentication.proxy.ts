import { BASE_URL } from "@env";
import { UserInput } from "../../core/dtos/user/userInput";
import { ResponseDto } from "../../shared/classes/responseDto";
import axios, { AxiosResponse } from 'axios'
import { CommonServices } from "../../shared/services/commonServices.service";

export class AuthenticationProxy {
  private basePath = `${BASE_URL}/auth`
  private commonServices = new CommonServices();
  public authUser(user: UserInput): Promise<AxiosResponse<ResponseDto<string>>> {
    return axios.post(`${this.basePath}/user`, user);
  }

  public async verifyToken(): Promise<AxiosResponse<ResponseDto<string>>> {
    const headers = await this.commonServices.getHeaders()

    return axios.get(`${this.basePath}/verifyToken`, { headers, timeout:2000});
  }
}
