import { SessionEndpoints } from '@/shared/api/redux/endpoints/sessionEndpoints';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import edgeReducer from './reducers/EdgeSlice';
import graphReducer from './reducers/GraphSlice';
import vertexReducer from './reducers/VertexSlice';

// import PQReducer from './reducers/PriorityQueueSlice'

const rootReducer = combineReducers({
  graphReducer,
  vertexReducer,
  edgeReducer,
  // PQReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(SessionEndpoints.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
