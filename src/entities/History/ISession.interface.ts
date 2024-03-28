import { IEdge } from "../Graph/models/interfaces/IEdge.interface";
import { IVertex } from "../Graph/models/interfaces/IVertex.interface";

export interface ISession{
    id: number,
    structType: string,
    vertices: IVertex[]
    edges: IEdge[]
    pair: number[][];
    shortestVertices: []
}