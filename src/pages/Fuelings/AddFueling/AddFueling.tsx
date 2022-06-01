import { Box, Button, Grid, MenuItem, styled, TextField } from "@mui/material";
import { ReactComponent as GasStationIcon } from "../../../images/icons/gas_station.svg";
import { ChangeEvent, useEffect, useState } from "react";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  addFueling,
  fetchFuelings,
  Fueling,
} from "../../../redux/slices/FuelingsSlice";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const FuelingContainer = styled(Box)({
  paddingTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "700px",
});

const FuelingBox = styled(Box)({
  paddingTop: "2rem",
  boxSizing: "border-box",
  width: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "0px 8px 10px 1px rgb(0 0 0 / 20%)",
  minWidth: "500px",
  maxWidth: "800px",
});

const TextFieldBox = styled(Box)({
  margin: "1rem 0",
  display: "flex",
  width: "100%",
  justifyContent: "space-around",
});

const BoxAvatar = styled(Box)({
  width: "100px",
  height: "100px",
  marginBottom: "1rem",
});

const gridStyle = {
  display: "flex",
  justifyContent: "center",
};

const fuelTypes = ["undefined", "CNG", "LPG", "Diesel", "Petrol"];

function AddFueling(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [vehicleRegistration, setVehicleRegistration] = useState("KR 134021");
  const [date, setDate] = useState<Date | null>(new Date());
  const [fuelType, setFuelType] = useState("Diesel");
  const [liters, setLiters] = useState("5");
  const [cost, setCost] = useState("100 $");
  const [sellerDetails, setSellerDetails] = useState("Seller 123");
  const [buyerDetails, setBuyerDetails] = useState("Buyer 123");

  useEffect(() => {
    dispatch(fetchFuelings());
  }, [fetchFuelings]);

  // One function as handle changes with ref to react setter
  const handleChanges = (
    event: ChangeEvent<HTMLInputElement>,
    Func_ref: (x: string) => void
  ) => {
    Func_ref(event.target.value);
  };

  const handleDate = (newValue: Date | null) => {
    setDate(newValue);
  };

  const addFuelingHandler = () => {
    const fueling: Fueling = {
      _id: "not",
      vehicleRegistration: vehicleRegistration,
      date: date?.toString(),
      fuelType: fuelType,
      liters: liters,
      cost: cost,
      sellerDetails: sellerDetails,
      buyerDetails: buyerDetails,
    };
    dispatch(addFueling(fueling));
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchFuelings()), 500);
  };

  return (
    <FuelingContainer>
      <FuelingBox>
        <BoxAvatar>
          <GasStationIcon />
        </BoxAvatar>
        <TextFieldBox>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", minWidth: "500px", maxWidth: "700px" }}
          >
            <Grid item xs={12} sx={gridStyle}>
              <TextField
                label="Vehicle Registration"
                variant="filled"
                value={vehicleRegistration}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setVehicleRegistration)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Date&Time"
                  value={date}
                  onChange={handleDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Fuel Type"
                value={fuelType}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setFuelType)
                }
                variant="filled"
              >
                {fuelTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Liters"
                variant="filled"
                value={liters}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setLiters)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Cost"
                variant="filled"
                value={cost}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setCost)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Seller Details"
                variant="filled"
                value={sellerDetails}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setSellerDetails)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Buyer Details"
                variant="filled"
                value={buyerDetails}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setBuyerDetails)
                }
              />
            </Grid>
          </Grid>
        </TextFieldBox>
        <TextFieldBox></TextFieldBox>
        <Box sx={{ padding: "1rem" }}>
          <Button variant="contained" onClick={addFuelingHandler}>
            Add Fueling
          </Button>
        </Box>
      </FuelingBox>
    </FuelingContainer>
  );
}

export default AddFueling;
