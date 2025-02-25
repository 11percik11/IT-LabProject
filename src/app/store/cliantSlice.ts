import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ClientState {
  id: string;
  fullName: string;
  company: string;
  group: string;
  presence: boolean;
}

const initialState: ClientState[] = [];

const searchSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    addClient: {
      reducer: (state, action: PayloadAction<ClientState>) => {
        state.push(action.payload);
      },
      prepare: (client: Omit<ClientState, "id">) => ({
        payload: { ...client, id: nanoid() },
      }),
    },
    updateClient: (state, action: PayloadAction<ClientState>) => {
      const index = state.findIndex((a) => a.id === action.payload.id);
      state[index] = action.payload;
    },
    deleteClient: (state, action: PayloadAction<string>) => {
      return state.filter((client) => client.id !== action.payload);
    },
  },
});

export const selectClientById = (state: RootState, clientId: string) =>
  state.client.find((client) => client.id === clientId);

export const selectPresentClientsCount = (state: RootState) =>
  state.client.filter((client) => client.presence === true).length;

export const selectAbsentClientsCount = (state: RootState) =>
  state.client.filter((client) => client.presence === false).length;

export const { addClient, updateClient, deleteClient } = searchSlice.actions;
export default searchSlice.reducer;
