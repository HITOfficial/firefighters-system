import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      const response = await fetch("http://localhost:3001/team-members", {
        method: "POST",
        body: JSON.stringify(teamMember),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue("Cannot post data");
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
    builder.addCase(addTeamMember.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(addTeamMember.fulfilled, (state, action) => {
      state.teamMembers = action.payload;
      state.status = "successed";
    });
    builder.addCase(addTeamMember.rejected, (state, action) => {
      state.status = "failed";
      console.log("fail with post new team member: ", action.payload);
    });
  },
});

export default teamMembersSlice.reducer;
