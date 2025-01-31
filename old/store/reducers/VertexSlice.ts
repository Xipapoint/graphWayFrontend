import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVertex } from "../../entities/Graph/Vertex";
import { IVertexCoordinates } from "../../entities/Graph/IVertexCoordinates.interface";


interface vertexState{
    vertices: IVertex[],
    isLoading: boolean,
    error: string
    lastVertexId: number;
}

const initialState: vertexState = {
    vertices: [],
    isLoading: false,
    error: "",
    lastVertexId: 0
}

// id: number, xPos: number, yPos: number


export const vertexSlice = createSlice({
    name: "vertex",
    initialState,
    reducers: {
        addVertex(state, action: PayloadAction<IVertex>){

            const newVertex:IVertex = {
                id: action.payload.id,
                xPos: action.payload.xPos,
                yPos: action.payload.yPos,
                pair: action.payload.pair,
                isShortest: action.payload.isShortest
              };
            return {
                ...state,
                vertices: [...state.vertices, newVertex],
                lastVertexId: state.lastVertexId + 1
            };
        },

        deleteVertex(state, action: PayloadAction<number>){
            const indexToRemove = state.vertices.findIndex(vertex => vertex.id === action.payload);
            
            if (indexToRemove !== -1) {
                return {
                    ...state,
                    vertices: [...state.vertices.slice(0, indexToRemove), ...state.vertices.slice(indexToRemove + 1)],
                    lastVertexId: state.lastVertexId-1
                };
            }
        },

        updateVertexPosition(state, action: PayloadAction<IVertexCoordinates>) {
            const { id, xPos, yPos } = action.payload;
            return {
                ...state,
                vertices: state.vertices.map(vertex =>
                    vertex.id === id ? { ...vertex, xPos, yPos } : vertex
                )
            };
        },

        updateIsShortest(state, action: PayloadAction<number>){
            
        },
        
        moveByPixel(state, action: PayloadAction<number>) {
            const vertexId = state.vertices.findIndex(vertex => vertex.id === action.payload);
            
            if (vertexId >= 0) {
                const updatedVertices = [...state.vertices];
        
                updatedVertices[vertexId] = {
                    ...updatedVertices[vertexId],
                    xPos: updatedVertices[vertexId].xPos + 1
                };
        
                return {
                    ...state,
                    vertices: updatedVertices 
                };
            }
            return state;
        }
    }
    
})



export default vertexSlice.reducer