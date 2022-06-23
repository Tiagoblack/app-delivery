import React, { createContext, useReducer } from 'react';
import { initialState, reducerConfig } from '../UserReducers';

export const GlobalState = createContext();

export function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducerConfig, initialState);
  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
}
