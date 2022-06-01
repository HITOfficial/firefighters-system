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
} from "../../redux/slices/TeamMembersSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {fetchFuelings, updateFueling} from "../../redux/slices/FuelingsSlice";

const columns: GridColumns = [
    { field: "_id", headerName: "Invoice ID", width: 180 },
    { field: "vehicleRegistration", headerName: "Vehicle Registration", width: 180, editable: true },
    { field: "date", headerName: "Date", width: 180, editable: true },
    { field: "fuelType", headerName: "fuel Type", width: 180, editable: true },
    { field: "liters", headerName: "Liters", width: 180, editable: true },
    { field: "cost", headerName: "Cost", width: 180, editable: true },
    { field: "sellerDetails", headerName: "Seller Details", width: 180, editable: true },
    { field: "buyerDetails", headerName: "Buyer Details", width: 180, editable: true },
];

function FuelingsList():JSX.Element {
    const dispatch: AppDispatch = useDispatch();
    const fuelings = useSelector((state: RootState) => state.teamMembers);
    const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);

    const cellEditCommitHandler = (params: GridCellEditCommitParams) => {
        dispatch(
            updateFueling({
                id: params.id.toString(),
                field: params.field,
                value: params.value,
            })
        );
        // dont know how to refetch on use effect, from this reason setTimeout
        setTimeout(() => dispatch(fetchFuelings()), 100);
    };

    const removeFuelingsHandler = () => {
        dispatch(deleteTeamMembers(selectionModel as string[]));
        // dont know how to refetch on use effect, from this reason setTimeout
        setTimeout(() => dispatch(fetchFuelings()), 100);
    };

    useEffect(() => {
        if (fuelings.status === "idle") {
            dispatch(fetchFuelings());
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
                    {fuelings.status === "successed" ? (
                        <DataGrid
                            sx={{ display: "flex" }}
                            getRowId={(row) => row._id}
                            rows={fuelings.teamMembers}
                            columns={columns}
                            checkboxSelection
                            // selection on only checkbox
                            disableSelectionOnClick
                            selectionModel={selectionModel}
                            onSelectionModelChange={setSelectionModel}
                            onCellEditCommit={cellEditCommitHandler}
                        />
                    ) : (
                        fuelings.status
                    )}
                    {selectionModel.length > 0 && (
                        <Box>
                            <Button variant="contained" onClick={removeFuelingsHandler}>
                                Remove Fuelings
                            </Button>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Box>
    );
}

export default FuelingsList