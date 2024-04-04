import { IEdge } from "../IEdge.interface";
import { IEdgeDetails } from "../IEdgeDetails.interface";
import { IVertex } from "../IVertex.interface";
import { IVertexCoordinates } from "../IVertexCoordinates.interface";

export interface GraphDTO{
    vertices: IVertex[]
    edges: IEdge[]
    vertexCoordinate: IVertexCoordinates
    edgeDetails: IEdgeDetails
    graphVertices: number[];
    pair: number[][];
    connections: { [key: number]: [number, number][] };
    shortestEdges: number[],
    shortestVertices: number[]
}