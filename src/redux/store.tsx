import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import teamMembersSlice from "./slices/TeamMembersSlice";

export const store = configureStore({
  reducer: {
    teamMembers: teamMembersSlice,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
