import { IEdge } from "../Graph/Edge";
import { IVertex } from "../Graph/Vertex";

export interface ISession{
    id: number,
    structType: string,
    vertices: IVertex[]
    edges: IEdge[]
    pair: number[][];
    shortestVertices: []
}