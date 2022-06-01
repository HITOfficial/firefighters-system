import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/fuelings";

export interface Fueling {
  _id?: string;
  vehicleRegistration: string;
  date: number;
  fuelType: string;
  liters: string;
  cost: string;
  sellerDetails: string;
  buyerDetails: string;
}

export interface updateFuelingProps {
  id: string;
  field: string;
  value: string;
}

const initialState: {
  fuelings: Fueling[];
  status: "idle" | "loading" | "successed" | "failed";
} = { fuelings: [], status: "idle" };

export const fetchFuelings = createAsyncThunk(
  "fuelings/fetchFuelings",
  async () => {
    return fetch(POST_URL).then((res) => res.json());
  }
);

export const addFueling = createAsyncThunk(
  "fuelings/addFueling",
  async (teamMember: Fueling, { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/add", teamMember);
      return response.data;
    } catch (error) {
      console.log("POST new fueling ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const updateFueling = createAsyncThunk(
  "fuelings/updateFueling",
  async ({ id, field, value }: updateFuelingProps, { rejectWithValue }) => {
    try {
      const updateData = { _id: id, field: field, value: value };
      const response = await axios.post(POST_URL + "/update", updateData);
      return response.data;
    } catch (error) {
      console.log("POST update fueling ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const deleteFuelings = createAsyncThunk(
  "fuelings/deleteFuelings",
  async (fuelings: string[], { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/delete", fuelings);
      return response.data;
    } catch (error) {
      console.log("POST DELETE fuelings ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

const fuelingsSlice = createSlice({
  name: "fuelings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFuelings.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchFuelings.fulfilled, (state, action) => {
      state.fuelings = action.payload;
      state.status = "successed";
    });
    builder.addCase(fetchFuelings.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(addFueling.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST NEW");
    });
    builder.addCase(updateFueling.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(updateFueling.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(deleteFuelings.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
    builder.addCase(deleteFuelings.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
  },
});

export default fuelingsSlice.reducer;
