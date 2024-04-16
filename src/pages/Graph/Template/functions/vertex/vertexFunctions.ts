import { IVertex } from "../../../../../entities/Graph/IVertex.interface";
import { IVertexCoordinates } from "../../../../../entities/Graph/IVertexCoordinates.interface";

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
    //const indexToRemove = localstate.findIndex(vertex => vertex.id === index);
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

export function moveByPixel(vertices: IVertex[], index: number): IVertex[] {
    if (index >= 0 && index < vertices.length) {
        const updatedVertices = [...vertices];
        updatedVertices[index] = {
            ...updatedVertices[index],
            xPos: updatedVertices[index].xPos + 1
        };
        return updatedVertices;
    }
    return vertices;
}

export function updatePair(localstate: IVertex[], copyPair: number[][]): IVertex[]{
    
    for(let i = 0; i < copyPair.length; i++){
        localstate[i].pair[1] = copyPair[i][1];
        localstate[i].pair[2] = copyPair[i][2];
    }

    return localstate;
}

export function updateIsShortest(localstate: IVertex[], shortestWay: number[][], index: number): IVertex[]{
    const vertices: IVertex[] = [...localstate]
    const shortestPathVertices = shortestWay[index];
    for (let i = 0; i < localstate.length; i++) {
        const vertexId = vertices[i].id;
        vertices[i].isShortest = shortestPathVertices.includes(vertexId);
    }
    return vertices;
}