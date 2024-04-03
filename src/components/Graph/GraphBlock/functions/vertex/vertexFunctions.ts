import { IVertex } from "../../../../../entities/Graph/interfaces/IVertex.interface";
import { IVertexCoordinates } from "../../../../../entities/Graph/interfaces/IVertexCoordinates.interface";

export function addVertex(vertex: IVertex): IVertex{

    const newVertex:IVertex = {
        id: vertex.id,
        xPos: vertex.xPos,
        yPos: vertex.yPos,
        pair: vertex.pair,
        isShortest: vertex.isShortest
    };

    return newVertex;
}

export function deleteVertex(localstate: IVertex[], index: number): IVertex[]{
    if (index !== -1) {
        return localstate.filter(vertex => vertex.id !== index)
            //lastVertexId: localstate.lastVertexId-1
    }
    return localstate
}


export function updateVertexPosition(localstate: IVertex[], coordinates: IVertexCoordinates): IVertex[] {
    const { id, xPos, yPos } = coordinates;
    return localstate.map(vertex =>vertex.id === id ? { ...vertex, xPos, yPos } : vertex)
}
