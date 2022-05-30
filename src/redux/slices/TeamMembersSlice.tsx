import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "http://localhost:3001/team-members";

export interface TeamMember {
  _id: number;
  fullName: string;
  age: number;
  location: string;
  phone: string;
  sex: string;
  rank: string;
  equipment: string;
  drivingLicence: string;
  healthInsurance: string;
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
      console.log(teamMember);
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
      console.log("SLICE DATA", id, field, value);
      const updateData = { _id: id, field: field, value: value };
      console.log("UPDATE DATA TO BACKEND: ", updateData);
      const response = await axios.post(POST_URL + "/update", updateData);
      return response.data;
    } catch (error) {
      console.log("POST update team memeber ERROR:", error);
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
      state.status = "loading";
      console.log("POST NEW MAN");
    });
    builder.addCase(updateTeamMember.fulfilled, (state, action) => {
      // state.teamMembers = action.payload;
      state.status = "loading";
      console.log("POST UPDATE MAN");
    });
  },
});

export default teamMembersSlice.reducer;
