import { BASE_URL } from "@env";
import { ResponseDto } from "../../shared/classes/responseDto";
import axios, { AxiosResponse } from 'axios'
import { CommonServices } from "../../shared/services/commonServices.service";
import { HomeOutput } from "../../core/dtos/home/homeOutput";

export class HomeProxy {
  private basePath = `${BASE_URL}/home`
  private commonServices = new CommonServices();

  public async getMainValues(): Promise<AxiosResponse<ResponseDto<HomeOutput>>> {
    const headers = await this.commonServices.getHeaders()

    return axios.get(`${this.basePath}`, { headers});
  }
}
