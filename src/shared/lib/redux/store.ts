import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { SessionEndpoints } from '../../api/redux/endpoints/sessionEndpoints';
import { sessionAlgorithmSlice } from './slices/SessionAlgorithmSlice';
import { sessionDataStructureSlice } from './slices/SessionDataStructureSlice';
import { sessionModeSlice } from './slices/SessionModeSlice';
import { sessionStructureSlice } from './slices/SessionStructureSlice';

const rootReducer = combineReducers({
  [sessionModeSlice.reducerPath]: sessionModeSlice.reducer,
  [sessionDataStructureSlice.reducerPath]: sessionDataStructureSlice.reducer,
  [sessionStructureSlice.reducerPath]: sessionStructureSlice.reducer,
  [sessionAlgorithmSlice.reducerPath]: sessionAlgorithmSlice.reducer,
  [SessionEndpoints.reducerPath]: SessionEndpoints.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false }).concat(
        // quotesApiSlice.middleware,
        SessionEndpoints.middleware,
      );
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
