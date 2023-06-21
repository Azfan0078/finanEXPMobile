import { AxiosResponse } from "axios";
import { HomeProxy } from "../../api/homeProxy/home.proxy";
import { ResponseDto } from "../../shared/classes/responseDto";
import { HomeOutput } from "../../core/dtos/home/homeOutput";
import store from "../../store";
import { setMainValues } from "../actions/mainValuesActions";

export class HomeService {
  private homeProxy = new HomeProxy();
  public getMainValues():void {
    this.homeProxy.getMainValues().then((response:AxiosResponse<ResponseDto<HomeOutput>>) => {
      store.dispatch(setMainValues(response.data.content))
    });
  }
} 