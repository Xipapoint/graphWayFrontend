import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { sessionComponentRoutes } from '../../../../constants/routeConstants';

export interface SessionComponentSliceState {
  sessionModeId: string;
  sessionDataStructureId: string;
  sessionStructureId: string;
  sessionAlgorithmId?: string;
  currentStep: number;
}

export type ComponentRoutesType = keyof typeof sessionComponentRoutes;

export type ComponentType = keyof SessionComponentSliceState;

export type ComponentIdType = Exclude<ComponentType, 'currentStep'>;

const updateSessionComponentId = (
  state: SessionComponentSliceState,
  componentType: ComponentIdType,
  id: string = '',
): void => {
  state[componentType] = id;
};

const updateSessionStep = (state: SessionComponentSliceState, step: number) => {
  state['currentStep'] += step;
};

const initialState: SessionComponentSliceState = {
  sessionModeId: '',
  sessionDataStructureId: '',
  sessionStructureId: '',
  currentStep: 0,
};

export const SessionSessionComponentSlice = createSlice({
  name: 'sessionComponents',
  initialState,
  reducers: {
    componentIdAdded(
      state,
      action: PayloadAction<{ componentType: ComponentIdType; id: string }>,
    ) {
      const { componentType, id } = action.payload;
      updateSessionComponentId(state, componentType, id);
      updateSessionStep(state, 1);
    },

    removeComponentIds(state, action: PayloadAction<number>) {
      const step = action.payload;
      Object.entries(state).forEach(([key], index) => {
        if (key !== 'currentStep' && index + 1 > step)
          state[key as ComponentIdType] = '';
      });
      state.currentStep = step;
    },

    componentIdRemoved(
      state,
      action: PayloadAction<{ componentType: ComponentIdType }>,
    ) {
      updateSessionComponentId(state, action.payload.componentType);
      updateSessionStep(state, -1);
    },
  },
  selectors: {
    selectCurrentStep: (state) => state.currentStep,
    selectDataStructureId: (state) => state.sessionDataStructureId,
    selectStructureId: (state) => state.sessionStructureId,
  },
});

export const { componentIdAdded, componentIdRemoved, removeComponentIds } =
  SessionSessionComponentSlice.actions;

export const { selectCurrentStep, selectDataStructureId, selectStructureId } =
  SessionSessionComponentSlice.selectors;
