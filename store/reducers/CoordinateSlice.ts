import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVertexCoordinates } from "../../entities/Graph/IVertexCoordinates.interface";


interface coordinateState{
    Cords: IVertexCoordinates[],
}

const initialState: coordinateState = {
    Cords: [],
}
// id: number, xPos: number, yPos: number


export const vertexCoordinateSlice = createSlice({
    name: "Cords",
    initialState,
    reducers: {
        createCoordinates(state, action: PayloadAction<IVertexCoordinates>){
            state.Cords.push(action.payload)
        },

        updateCoordinates(state, action: PayloadAction<{vertexId: number, coordinates: IVertexCoordinates}>){
            const { vertexId, coordinates } = action.payload;
            const vertexIndex = state.Cords.findIndex(vertex => vertex.id === vertexId);
            if (vertexIndex !== -1 && vertexIndex) {
                const updatedCords = [...state.Cords];
                updatedCords[vertexIndex] = { ...updatedCords[vertexIndex], xPos: coordinates.xPos, yPos: coordinates.yPos  };
                return{
                    ...state,
                    Cords: updatedCords
                }
            }
            return state
        }
    }
})

export default vertexCoordinateSlice.reducer