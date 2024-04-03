import { IEdge } from "../Graph/interfaces/IEdge.interface";
import { IVertex } from "../Graph/interfaces/IVertex.interface";

export interface ISession{
    id: number,
    structType: string,
    vertices: IVertex[]
    edges: IEdge[]
    pair: number[][];
    shortestVertices: []
}