import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface SessionStructureSliceState {
  id: string;
}

const sessionStructureAdapter = createEntityAdapter<SessionStructureSliceState>(
  {},
);

const initialState = sessionStructureAdapter.getInitialState();

export const sessionStructureSlice = createSlice({
  name: 'sessionStructure',
  initialState,
  reducers: {
    structureAdded: sessionStructureAdapter.addOne,
    deleteStructure: sessionStructureAdapter.removeOne,
  },
});

export const { structureAdded, deleteStructure } =
  sessionStructureSlice.actions;
