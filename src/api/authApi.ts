import { AxiosResponse } from "axios";
import { authHttp } from "../components/http/api";
import { IJwtUserResponseDto } from "../dto/response/auth/JwtUserResponseDTO.dto";


export class AuthApi{
     static registerUser = async (firstName: string, email: string, password: string): Promise<AxiosResponse<IJwtUserResponseDto>> => {
        return authHttp.post<IJwtUserResponseDto>('/register', {
          firstName,
          email,
          password,
        });
      };
}
