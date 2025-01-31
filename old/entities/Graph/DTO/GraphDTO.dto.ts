import { IEdge } from "../Edge";
import { IVertex } from "../Vertex";
export interface GraphDTO{
    DTOvertices: IVertex[]
    DTOedges: IEdge[]
    DTOconnections: Map<number, [number, number][]>;
}