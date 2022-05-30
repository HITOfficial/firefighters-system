import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { AppDispatch, RootState } from "../../redux/store";

import {
  DataGrid,
  GridColumns,
  GridRowsProp,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
  GridCellEditCommitParams,
  GridCallbackDetails,
  GridRowId,
  GridCellMode,
  GridEditRowsModel,
} from "@mui/x-data-grid";
import { useCallback, useEffect, useState } from "react";
import {
  addTeamMember,
  fetchTeamMembers,
  updateTeamMember,
} from "../../redux/slices/TeamMembersSlice";
import { useDispatch, useSelector } from "react-redux";

const columns: GridColumns = [
  { field: "_id", headerName: "ID", width: 180 },
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

const rows: GridRowsProp = [
  {
    _id: "121323312",
    fullName: "Jack Brown",
    age: 33,
    location: "willy streeet",
    phone: "2131 123 123",
    sex: "male",
    rank: "firefighter",
    equipment: "basic equipment",
    drivingLicence: "B",
    healthInsurance: "basic",
    additionalInfo: "some extra info",
  },
];

interface EnhancedTableToolbarProps {
  numSelected: number;
}

export default function Team() {
  const dispatch: AppDispatch = useDispatch();
  const teamMembers = useSelector((state: RootState) => state.teamMembers);

  useEffect(() => {
    if (teamMembers.status === "idle") {
      dispatch(fetchTeamMembers());
    }
  }, []);

  useEffect(() => {
    console.log(teamMembers);
  }, [teamMembers]);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", padding: 2 }}>
        <div onClick={() => dispatch(addTeamMember(rows[0]))}> HEHER </div>
        <div> {JSON.stringify(rows)} </div>
        <Box sx={{ height: 400, display: "flex" }}>
          {teamMembers.status === "successed" ? (
            <DataGrid
              getRowId={(row) => row._id}
              rows={teamMembers.teamMembers}
              columns={columns}
              // checkboxSelection
              onCellEditCommit={(params) => {
                console.log("XXX");
                dispatch(
                  updateTeamMember({
                    id: params.id.toString(),
                    field: params.field,
                    value: params.value,
                  })
                );
              }}
            />
          ) : (
            teamMembers.status
          )}
        </Box>
      </Paper>
    </Box>
  );
}
