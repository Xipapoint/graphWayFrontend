import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export interface SessionModeSliceState {
  id: string;
}

const sessionModeAdapter = createEntityAdapter<SessionModeSliceState>({});

const initialState = sessionModeAdapter.getInitialState();

export const sessionModeSlice = createSlice({
  name: 'sessionMode',
  initialState,
  reducers: {
    modeAdded: sessionModeAdapter.addOne,
    deleteMode: sessionModeAdapter.removeOne,
  },
});

export const { modeAdded, deleteMode } = sessionModeSlice.actions;
