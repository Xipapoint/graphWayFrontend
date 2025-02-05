import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { SessionSessionComponentSlice } from '../slices/session-components/SessionComponentSlice';

const rootReducer = combineReducers({
  [SessionSessionComponentSlice.reducerPath]:
    SessionSessionComponentSlice.reducer,
});

export type SessionComponentRootState = ReturnType<typeof rootReducer>;

export const persistSessionComponentsConfig = {
  key: 'session-components',
  storage,
};

const persistedReducer = persistReducer(
  persistSessionComponentsConfig,
  rootReducer,
);

export const makeSessionComponentStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({ serializableCheck: false }).concat();
    },
  });
};

export type SessionComponentStore = ReturnType<
  typeof makeSessionComponentStore
>;
export type SessionComponentDispatch = SessionComponentStore['dispatch'];
export type SessionComponentThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  SessionComponentRootState,
  unknown,
  Action
>;
