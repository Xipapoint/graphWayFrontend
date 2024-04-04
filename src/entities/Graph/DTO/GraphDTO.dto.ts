import { IEdge } from "../IEdge.interface";
import { IVertex } from "../IVertex.interface";
export interface GraphDTO{
    DTOvertices: IVertex[]
    DTOedges: IEdge[]
    DTOgraphVertices: number[];
    DTOpair: number[][];
    DTOconnections: { [key: number]: [number, number][] };
    DTOshortestVertices: number[][]
}