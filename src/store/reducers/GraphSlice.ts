import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface GraphState {
    graphVertices: number[];
    pair: number[][];
    connections: { [key: number]: [number, number][] };
    shortestEdges: number[],
    shortestVertices: number[]
    isLoading: false,
    error: string
  }
  
  const initialState: GraphState = {
    graphVertices: [],
    pair: [],
    connections: {},
    shortestEdges: [],
    shortestVertices: [],
    isLoading: false,
    error: ''
  };

  export const graphSlice = createSlice({
    name: "graph",
    initialState,
    reducers: {
      addGraphVertex(state, action: PayloadAction<number>){
        return {
          ...state,
          graphVertices: [...state.graphVertices, action.payload],
        };
      },
      
      addConnection(state, action: PayloadAction<[number, number, number]>) {
        const [vertex1, vertex2, weight] = action.payload

        const newConnections = { ...state.connections };
        const connectionsForVertex1 = newConnections[vertex1] || [];
        newConnections[vertex1] = [...connectionsForVertex1, [vertex2, weight]];
        const connectionsForVertex2 = newConnections[vertex2] || [];
        newConnections[vertex2] = [...connectionsForVertex2, [vertex1, weight]];

        return {
          ...state,
          connections: newConnections
        };
      },

      addPair(state, action: PayloadAction<[number, number]>){
        return{
          ...state,
          pair: [...state.pair, action.payload]
        }
      },

      addToShortestVertices(state, action: PayloadAction<number[]>){
        return{
          ...state,
          shortestVertices: action.payload
        }
      },

      updatePair(state, action: PayloadAction<number[][]>){
        return{
          ...state,
          pair: action.payload
        }
      },

      updateConnectionWeight(state, action: PayloadAction<[number, number, number]>) {
        const [vertex1, vertex2, weight] = action.payload;
      
        const newConnections = { ...state.connections };
    
        newConnections[vertex1] = (newConnections[vertex1] || []).map(([v, w]) => {
          if (v === vertex2) {
            return [v, weight];
          }
          return [v, w];
        });
        newConnections[vertex2] = (newConnections[vertex2] || []).map(([v, w]) => {
          if (v === vertex1) {
            return [v, weight];
          }
          return [v, w];
        });
      
        return {
          ...state,
          connections: newConnections,
        };
      },

      deleteGraphVertex(state, action: PayloadAction<number>){
        const indexToRemove = state.graphVertices.findIndex(vertex => vertex === action.payload);

        if (indexToRemove !== -1) {
          const updatedPair = state.pair.filter(pair => pair[indexToRemove] !== indexToRemove);
          return {
            ...state,
            graphVertices: [...state.graphVertices.slice(0, indexToRemove), ...state.graphVertices.slice(indexToRemove + 1)],
            shortestVertices: [...state.shortestVertices.slice(0, indexToRemove), ...state.shortestVertices.slice(indexToRemove + 1)],
            pair: updatedPair
          };
        }
      
        return state;
      },

      deleteConnectionsByVertex(state, action: PayloadAction<number>){
        const vertexId = action.payload
        const newConnections = {...state.connections};
        Object.keys(newConnections).forEach(vertex => {
          const vertexNumber: number = parseInt(vertex);
          newConnections[vertexNumber] = newConnections[vertexNumber].filter(([v, _]) => v !== vertexId);
        });

        delete newConnections[vertexId]

        return{
          ...state,
          connections: newConnections
        }
      }

  }

  

})

  export default graphSlice.reducer;