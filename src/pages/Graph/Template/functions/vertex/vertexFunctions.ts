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
    const indexToRemove = localstate.findIndex(vertex => vertex.id === index);
    if (indexToRemove !== -1) {
        return localstate.splice(indexToRemove, 1)
            //lastVertexId: localstate.lastVertexId-1
    }
    return localstate
}


// As an alternative approach but makes new copy of array

// export function deleteVertex(localstate: IVertex[], index: number): IVertex[]{
//     if (index !== -1) {
//         return localstate.filter(vertex => vertex.id !== index)
//             //lastVertexId: localstate.lastVertexId-1
//     }
//     return localstate
// }


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

export function updatePair(localstate: IVertex[], copyPair: number[][]){
    for(let i = 0; i < copyPair.length; i++){
        localstate[i].pair = copyPair[i];
    }

    return localstate;
}

export function updateIsShortest(localstate: IVertex[], shortestWay: number[][], index: number){
    for(let i = 0; i < localstate.length; i++){
        for(let j = 0; j < shortestWay.length; j++){
          if(shortestWay[index][j] === localstate[i].id) localstate[i].isShortest = true
        }
    }
}