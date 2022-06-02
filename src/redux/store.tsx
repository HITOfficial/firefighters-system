import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import teamMembersSlice from "./slices/TeamMembersSlice";
import fuelingsSlice from "./slices/FuelingsSlice";
import actionsSlice from "./slices/ActionsSlice";

export const store = configureStore({
  reducer: {
    teamMembers: teamMembersSlice,
    fuelings: fuelingsSlice,
    actions: actionsSlice,

  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
