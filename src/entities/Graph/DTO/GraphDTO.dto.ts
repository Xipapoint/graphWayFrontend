import { IEdge } from "../IEdge.interface";
import { IVertex } from "../IVertex.interface";
export interface GraphDTO{
    DTOvertices: IVertex[]
    DTOedges: IEdge[]
    DTOconnections: Map<number, [number, number][]>;
}