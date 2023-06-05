import AsyncStorage  from '@react-native-async-storage/async-storage'
import { AxiosHeaders } from 'axios';

export class CommonServices {
  private jwtTokenKey = '@FinanEXP:fSSIdtkn'

  public async getHeaders() {
    const token = await AsyncStorage.getItem(this.jwtTokenKey)

    const httpHeaders: AxiosHeaders = new AxiosHeaders({ Authorization: `Bearer ${token}` });
    return httpHeaders;
  }
  public trimValidator(value:string):boolean {
    return value?.trim() === '' || value?.endsWith(' ') || value?.startsWith(' ') ? false : true;
  }
}