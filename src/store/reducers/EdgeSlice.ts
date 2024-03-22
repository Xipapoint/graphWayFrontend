import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IEdge } from "../../entities/Graph/models/interfaces/IEdge.interface";
import { IEdgeDetails } from "../../entities/Graph/models/interfaces/IEdgeDetails.interface";

interface edgeState{
    edges: IEdge[],
    isLoading: boolean,
    error: string,
    lastEdgeId: number

}

const initialState: edgeState = {
    edges: [],
    isLoading: false,
    error: "",
    lastEdgeId: 0
}

// id: number, xPos: number, yPos: number



export const edgeSlice = createSlice({
    name: "edge",
    initialState,
    reducers: {
        addEdge(state, action: PayloadAction<IEdge>){
            const newEdge: IEdge = {
                id: state.lastEdgeId,
                top: action.payload.top,
                left: action.payload.left,
                angle: action.payload.angle,
                weight: action.payload.weight,
                startVertex: action.payload.startVertex,
                endVertex: action.payload.endVertex,
                isShortest: false
            }

            return{
                ...state,
                edges: [...state.edges, newEdge],
                lastEdgeId: state.lastEdgeId + 1
            }
        },

        deleteEdge(state, action: PayloadAction<number>){
            const indexToRemove = state.edges.findIndex(edge => edge.id === action.payload)
            if (indexToRemove !== -1) {
                state.edges.splice(indexToRemove, 1);
            }
        },

        updateEdgePosition(state, action: PayloadAction<IEdgeDetails>){
            const {id, weight, angle, top, left} = action.payload
            return {
                ...state,
                edges: state.edges.map(edge =>
                    edge.id === id ? { ...edge, top, left, weight, angle} : edge
                )
            };
        },

        deleteEdgesByVertex(state, action: PayloadAction<number>) {
            state.edges = state.edges.filter(edge => edge.startVertex !== action.payload && edge.endVertex !== action.payload);
        }
    }
    
})

export default edgeSlice.reducer