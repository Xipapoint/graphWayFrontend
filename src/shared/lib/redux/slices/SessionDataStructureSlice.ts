import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface SessionDataStructureSliceState {
  id: string;
}

const sessionDataStructureAdapter =
  createEntityAdapter<SessionDataStructureSliceState>({});

const initialState = sessionDataStructureAdapter.getInitialState();

export const sessionDataStructureSlice = createSlice({
  name: 'sessionDataStructure',
  initialState,
  reducers: {
    dataStructureAdded: sessionDataStructureAdapter.addOne,
    deleteDataStructure: sessionDataStructureAdapter.removeOne,
  },
});

export const { dataStructureAdded, deleteDataStructure } =
  sessionDataStructureSlice.actions;
