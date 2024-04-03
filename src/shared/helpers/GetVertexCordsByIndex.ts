import { IVertexCoordinates } from "../../entities/Graph/interfaces/IVertexCoordinates.interface";

export function getVertexCoordsByIndex(vertices:IVertexCoordinates[], id: number): IVertexCoordinates{
    const findVertexId = vertices.findIndex(vertex => vertex.id === id);
    return vertices[findVertexId]
  }