import { configureStore } from '@reduxjs/toolkit';
import client from './cliantSlice';
import filter from './FilterSlice';

const persistedClients = localStorage.getItem('clients');
const preloadedState = persistedClients 
  ? { client: JSON.parse(persistedClients) }
  : {};

export const store = configureStore({
  reducer: {
    client,
    filter
  },
  preloadedState
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;