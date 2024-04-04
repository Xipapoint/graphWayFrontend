import { IEdge } from "../Graph/IEdge.interface";
import { IVertex } from "../Graph/IVertex.interface";

export interface ISession{
    id: number,
    structType: string,
    vertices: IVertex[]
    edges: IEdge[]
    pair: number[][];
    shortestVertices: []
}