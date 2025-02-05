// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, useStore } from 'react-redux';

import {
  SessionComponentDispatch,
  SessionComponentRootState,
  SessionComponentStore,
} from '../stores/SessionComponentStore';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useSessionComponentDispatch =
  useDispatch.withTypes<SessionComponentDispatch>();
export const useSessionComponentSelector =
  useSelector.withTypes<SessionComponentRootState>();
export const useSessionComponentStore =
  useStore.withTypes<SessionComponentStore>();
