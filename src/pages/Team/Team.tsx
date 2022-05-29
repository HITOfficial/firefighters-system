import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import {
  DataGrid,
  GridColumns,
  GridRowsProp,
  GridCellEditStopParams,
  GridCellEditStopReasons,
  MuiEvent,
} from "@mui/x-data-grid";

const columns: GridColumns = [
  { field: "id", headerName: "ID", width: 180 },
  { field: "fullName", headerName: "Full Name", width: 180 , editable:true},
  { field: "age", headerName: "Age", width: 180, editable:true },
  { field: "location", headerName: "Location", width: 180, editable:true },
  { field: "phone", headerName: "Phone", width: 180 , editable:true},
  { field: "sex", headerName: "Sex", width: 180 , editable:true},
  { field: "rank", headerName: "Rank", width: 180 , editable:true},
  { field: "equipment", headerName: "Equipment", width: 180 , editable:true},
  { field: "drivingLicence", headerName: "Driving Licence", width: 180 , editable:true},
  { field: "healthInsurance", headerName: "Health Insurance", width: 180 , editable:true},
  { field: "additionalInfo", headerName: "Additional Info", width: 180 , editable:true},
];

const rows: GridRowsProp = [
  {
    id: "121323312",
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
  const x= 3;
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", padding: 2 }}>
        <Box sx={{ height: 400, display: "flex" }}>
          <DataGrid
              rows={rows}
              columns={columns}
              experimentalFeatures={{ newEditingApi: true }}
              onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
                if (params.reason === GridCellEditStopReasons.cellFocusOut) {
                  event.defaultMuiPrevented = true;
                }
              }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
