import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/actions";

export interface Action {
  _id?: string;
  vehicles: string;
  date?: string;
  distance: string;
  location: string;
  equipment: string;
  type: string;
  moves: string;
  participants: string,
}

export interface updateActionProps {
  id: string;
  field: string;
  value: string;
}

const initialState: {
  actions: Action[];
  status: "idle" | "loading" | "successed" | "failed";
} = { actions: [], status: "idle" };

export const fetchActions = createAsyncThunk(
  "actions/fetchActions",
  async () => {
    return fetch(POST_URL).then((res) => res.json());
  }
);

export const addAction = createAsyncThunk(
  "actions/addAction",
  async (action: Action, { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/add", action);
      return response.data;
    } catch (error) {
      console.log("POST new action ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const updateAction = createAsyncThunk(
  "actions/updateAction",
  async ({ id, field, value }: updateActionProps, { rejectWithValue }) => {
    try {
      const updateData = { _id: id, field: field, value: value };
      const response = await axios.post(POST_URL + "/update", updateData);
      return response.data;
    } catch (error) {
      console.log("POST update action ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const deleteActions = createAsyncThunk(
  "actions/deleteActions",
  async (actions: string[], { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/delete", actions);
      return response.data;
    } catch (error) {
      console.log("POST DELETE actions ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

const ActionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActions.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchActions.fulfilled, (state, action) => {
      state.actions = action.payload;
      state.status = "successed";
    });
    builder.addCase(fetchActions.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(addAction.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST NEW");
    });
    builder.addCase(updateAction.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(updateAction.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(deleteActions.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
    builder.addCase(deleteActions.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
  },
});

export default ActionsSlice.reducer;
