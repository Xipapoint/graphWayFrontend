import { combineReducers, configureStore } from "@reduxjs/toolkit";
import graphReducer from './reducers/GraphSlice'
import GraphSlice from "./reducers/GraphSlice";
import vertexReducer from './reducers/VertexSlice'
import edgeReducer from './reducers/EdgeSlice'
// import PQReducer from './reducers/PriorityQueueSlice'

const rootReducer = combineReducers({
    graphReducer,
    vertexReducer,
    edgeReducer,
    // PQReducer
    
})

export const setupStore = () =>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']