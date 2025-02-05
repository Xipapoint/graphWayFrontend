'use client';

import { setupListeners } from '@reduxjs/toolkit/query';
import type { ReactNode } from 'react';
import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import type { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import {
  SessionComponentStore,
  makeSessionComponentStore,
} from '../stores/SessionComponentStore';

interface Props {
  readonly children: ReactNode;
}

export const SessionComponentStoreProvider = ({ children }: Props) => {
  const storeRef = useRef<SessionComponentStore | null>(null);
  const persistorRef = useRef<Persistor>({} as Persistor);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeSessionComponentStore();
    persistorRef.current = persistStore(storeRef.current);
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);

  return (
    <Provider store={storeRef.current}>
      <PersistGate persistor={persistorRef.current}>{children}</PersistGate>
    </Provider>
  );
};
