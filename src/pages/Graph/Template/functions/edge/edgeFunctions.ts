import { IEdge } from "../../../../../entities/Graph/IEdge.interface";
import { IEdgeDetails } from "../../../../../entities/Graph/IEdgeDetails.interface";

export function addEdge(localstate: IEdge[], pushedEdge: IEdge): IEdge | number{
    const edgeExists = localstate.some(edge => 
        (edge.startVertex === pushedEdge.startVertex && edge.endVertex === pushedEdge.endVertex) ||
        (edge.startVertex === pushedEdge.endVertex && edge.endVertex === pushedEdge.startVertex)
    );

    if (edgeExists) {
        return -1
    }

    const newEdge: IEdge = {
        id: pushedEdge.id,
        top: pushedEdge.top,
        left: pushedEdge.left,
        angle: pushedEdge.angle,
        weight: pushedEdge.weight,
        startVertex: pushedEdge.startVertex,
        endVertex: pushedEdge.endVertex,
        isShortest: false
    }

    return newEdge
}


export function deleteEdge(localstate: IEdge[], index: number): IEdge[]{
    const indexToRemove = localstate.findIndex(edge => edge.id === index)
    if (indexToRemove !== -1) {
        return localstate.filter(edge => edge.id !== indexToRemove);
    }
    return localstate
}

export function updateEdgePosition(localstate: IEdge[], edgeDetails: IEdgeDetails){
    const {id, weight, angle, top, left} = edgeDetails
    return localstate.map(edge => edge.id === id ? { ...edge, top, left, weight, angle} : edge)
}

export function deleteEdgesByVertex(localstate: IEdge[], index: number): IEdge[] {
    return localstate.filter(edge => edge.startVertex !== index && edge.endVertex !== index);
}