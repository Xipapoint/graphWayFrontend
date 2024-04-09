import { IEdge } from "../IEdge.interface";
import { IVertex } from "../IVertex.interface";
export interface GraphDTO{
    DTOvertices: IVertex[]
    DTOedges: IEdge[]
    DTOconnections: { [key: number]: [number, number][] };
}