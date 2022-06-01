import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AppDispatch, RootState } from "../../redux/store";

import {
  DataGrid,
  GridCellEditCommitParams,
  GridColumns,
  GridSelectionModel,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {
  deleteTeamMembers,
  fetchTeamMembers,
  updateTeamMember,
} from "../../redux/slices/TeamMembersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { fetchFuelings } from "../../redux/slices/FuelingsSlice";

const columns: GridColumns = [
  { field: "_id", headerName: "Member ID", width: 180 },
  { field: "fullName", headerName: "Full Name", width: 180, editable: true },
  { field: "age", headerName: "Age", width: 180, editable: true },
  { field: "location", headerName: "Location", width: 180, editable: true },
  { field: "phone", headerName: "Phone", width: 180, editable: true },
  { field: "sex", headerName: "Sex", width: 180, editable: true },
  { field: "rank", headerName: "Rank", width: 180, editable: true },
  { field: "equipment", headerName: "Equipment", width: 180, editable: true },
  {
    field: "drivingLicence",
    headerName: "Driving Licence",
    width: 180,
    editable: true,
  },
  {
    field: "healthInsurance",
    headerName: "Health Insurance",
    width: 180,
    editable: true,
  },
  {
    field: "additionalInfo",
    headerName: "Additional Info",
    width: 180,
    editable: true,
  },
];

export default function TeamMembersList() {
  const dispatch: AppDispatch = useDispatch();
  const teamMembers = useSelector((state: RootState) => state.teamMembers);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [fetchTeamMembers]);

  const cellEditCommitHandler = (params: GridCellEditCommitParams) => {
    dispatch(
      updateTeamMember({
        id: params.id.toString(),
        field: params.field,
        value: params.value,
      })
    );
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchTeamMembers()), 500);
  };

  const removeTeamMembersHandler = () => {
    dispatch(deleteTeamMembers(selectionModel as string[]));
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchTeamMembers()), 500);
  };

  useEffect(() => {
    if (teamMembers.status === "idle") {
      dispatch(fetchTeamMembers());
    }
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        sx={{
          width: "100%",
        }}
      >
        <Box sx={{ height: 850 }}>
          {teamMembers.status === "successed" ? (
            <DataGrid
              sx={{ display: "flex" }}
              getRowId={(row) => row._id}
              rows={teamMembers.teamMembers}
              columns={columns}
              checkboxSelection
              // selection on only checkbox
              disableSelectionOnClick
              selectionModel={selectionModel}
              onSelectionModelChange={setSelectionModel}
              onCellEditCommit={cellEditCommitHandler}
            />
          ) : (
            teamMembers.status
          )}
          {selectionModel.length > 0 && (
            <Box>
              <Button variant="contained" onClick={removeTeamMembersHandler}>
                Remove Members
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
