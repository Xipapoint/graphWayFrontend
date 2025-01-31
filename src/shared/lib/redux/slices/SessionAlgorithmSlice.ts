import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface SessionAlgorithmSliceState {
  id: string;
}

const sessionAlgorithmAdapter = createEntityAdapter<SessionAlgorithmSliceState>(
  {},
);

const initialState = sessionAlgorithmAdapter.getInitialState();

export const sessionAlgorithmSlice = createSlice({
  name: 'sessionAlgorithm',
  initialState,
  reducers: {
    algorithmAdded: sessionAlgorithmAdapter.addOne,
    deleteAlgorithm: sessionAlgorithmAdapter.removeOne,
  },
});

export const { algorithmAdded, deleteAlgorithm } =
  sessionAlgorithmSlice.actions;
