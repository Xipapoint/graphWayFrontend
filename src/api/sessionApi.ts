import { sessionHttp } from "../axios/api";
import { IGetSessionTypesResponseDTO } from "../dto/response/session/GetSessionTypesResponseDTO";
import { useQuery } from "@tanstack/react-query";

export class SessionApi{
    private fetchSessionTypes = async () => {
        const response = await sessionHttp.get<IGetSessionTypesResponseDTO[]>('/getsessiontypes')
        return response.data
    }

    public getSessionTypes = () => {
        return useQuery({
            queryKey: ['sessionTypes'], 
            queryFn: this.fetchSessionTypes,
              staleTime: Infinity
                  
          });
      };
}
