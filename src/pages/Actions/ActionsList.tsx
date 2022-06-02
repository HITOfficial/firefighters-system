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
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {fetchActions, updateAction, addAction, deleteActions} from "../../redux/slices/ActionsSlice";

const columns: GridColumns = [
  { field: "_id", headerName: "Action ID", width: 180 },
  {
    field: "vehicles",
    headerName: "Vehicles",
    width: 180,
    editable: true,
  },
  { field: "date", headerName: "Date", width: 180, editable: true },
  { field: "distance", headerName: "Distance", width: 180, editable: true },
  { field: "location", headerName: "Location", width: 180, editable: true },
  { field: "equipment", headerName: "Equipment", width: 180, editable: true },
  {
    field: "type",
    headerName: "Type",
    width: 180,
    editable: true,
  },
  {
    field: "moves",
    headerName: "Moves",
    width: 180,
    editable: true,
  },
  {
    field: "participants",
    headerName: "Participants",
    width: 180,
    editable: true,
  },
];

function ActionsList(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const actions = useSelector((state: RootState) => state.actions);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

  const cellEditCommitHandler = (params: GridCellEditCommitParams) => {
    dispatch(
      updateAction({
        id: params.id.toString(),
        field: params.field,
        value: params.value,
      })
    );
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchActions()), 500);
  };

  useEffect(() => {
    dispatch(fetchActions());
  }, [fetchActions]);

  const removeActionsHandler = () => {
    dispatch(deleteActions(selectionModel as string[]));
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchActions()), 500);
  };

  useEffect(() => {
    console.log(actions.actions);
    if (actions.status === "idle") {
      dispatch(fetchActions());
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
          {actions.status === "successed" ? (
            <DataGrid
              sx={{ display: "flex" }}
              getRowId={(row) => row._id}
              rows={actions.actions}
              columns={columns}
              checkboxSelection
              // selection on only checkbox
              disableSelectionOnClick
              selectionModel={selectionModel}
              onSelectionModelChange={setSelectionModel}
              onCellEditCommit={cellEditCommitHandler}
            />
          ) : (
            actions.status
          )}
          {selectionModel.length > 0 && (
            <Box>
              <Button variant="contained" onClick={removeActionsHandler}>
                Remove Actions
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}

export default ActionsList;
