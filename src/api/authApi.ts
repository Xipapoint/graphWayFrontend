import { AxiosResponse } from "axios";
import { authHttp } from "../axios/api";
import { IJwtUserResponseDto } from "../dto/response/auth/JwtUserResponseDTO.dto";


export class AuthApi{
    static registerUser = async (username: string, email: string, password: string): Promise<AxiosResponse<IJwtUserResponseDto>> => {
      console.log(authHttp);
      return authHttp.post<IJwtUserResponseDto>('/register', {
        username,
        password,
        email,
      });
    };

    static loginUser = async (email: string, password: string): Promise<AxiosResponse<IJwtUserResponseDto>> => {
      console.log(authHttp);
      return authHttp.post<IJwtUserResponseDto>('/login', {
        email,
        password,
      });
    };

    static logout = async() => {
      console.log("logging out");
      
      return authHttp.post('/logout')
    }
}
