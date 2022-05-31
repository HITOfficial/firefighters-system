import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/team-members";

export interface TeamMember {
  _id?: string;
  fullName: string;
  age: number;
  location: string;
  phone: string;
  sex: string;
  rank: string;
  equipment: string;
  drivingLicence: string;
  healthInsurance: string;
  additionalInfo: string;
}

export interface updateTeamMemberProps {
  id: string;
  field: string;
  value: string;
}

const initialState: {
  teamMembers: TeamMember[];
  status: "idle" | "loading" | "successed" | "failed";
} = { teamMembers: [], status: "idle" };

export const fetchTeamMembers = createAsyncThunk(
  "teamMembers/fetchTeamMembers",
  async () => {
    return fetch(POST_URL).then((res) => res.json());
  }
);

export const addTeamMember = createAsyncThunk(
  "teamMembers/addTeamMember",
  async (teamMember: TeamMember, { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/post", teamMember);
      return response.data;
    } catch (error) {
      console.log("POST new team memeber ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const updateTeamMember = createAsyncThunk(
  "teamMembers/updateTeamMember",
  async ({ id, field, value }: updateTeamMemberProps, { rejectWithValue }) => {
    try {
      const updateData = { _id: id, field: field, value: value };
      const response = await axios.post(POST_URL + "/update", updateData);
      return response.data;
    } catch (error) {
      console.log("POST update team memeber ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

export const deleteTeamMembers = createAsyncThunk(
  "teamMembers/deleteTeamMembers",
  async (teamMembers: string[], { rejectWithValue }) => {
    try {
      const response = await axios.post(POST_URL + "/delete", teamMembers);
      return response.data;
    } catch (error) {
      console.log("POST DELETE team memebers ERROR:", error);
      return rejectWithValue(error);
    }
  }
);

const teamMembersSlice = createSlice({
  name: "teamMembers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamMembers.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTeamMembers.fulfilled, (state, action) => {
      state.teamMembers = action.payload;
      state.status = "successed";
    });
    builder.addCase(fetchTeamMembers.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(addTeamMember.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST NEW");
    });
    builder.addCase(updateTeamMember.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(updateTeamMember.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST UPDATE");
    });
    builder.addCase(deleteTeamMembers.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
    builder.addCase(deleteTeamMembers.rejected, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "idle";
      console.log("POST DELETE");
    });
  },
});

export default teamMembersSlice.reducer;
