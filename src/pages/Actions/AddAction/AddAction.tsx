import { Box, Button, Grid, MenuItem, styled, TextField } from "@mui/material";
import { ReactComponent as ActionIcon } from "../../../images/icons/news.svg";
import { ChangeEvent, useEffect, useState } from "react";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import {Action, addAction, fetchActions} from "../../../redux/slices/ActionsSlice";

const ActionContainer = styled(Box)({
  paddingTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "700px",
});

const ActionBox = styled(Box)({
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

const types = ["other", "fire", "accident", "trip"];


function AddAction(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [vehicles, setVehicles] = useState("KR 134021, KR 123123");
  const [date, setDate] = useState<Date | null>(new Date());
  const [distance, setDistance] = useState("15km");
  const [location, setLocation] = useState("New Street 123");
  const [equipment, setEquipment] = useState("fire extinguisher");
  const [type, setType] = useState("accident");
  const [moves, setMoves] = useState("the fire was extinguished and the area was secured");
  const [participants, setParticipants] = useState("John Brown, Lex Mihy");


  useEffect(() => {
    dispatch(fetchActions());
  }, [fetchActions]);

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



  const addActionHandler = () => {
    const action: Action = {
      _id: "not",
      vehicles: vehicles,
      date: date?.toString(),
      distance: distance,
      location: location,
      equipment: equipment,
      type: type,
      moves: moves,
      participants: participants,
    };
    dispatch(addAction(action));
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchActions()), 500);
  };

  return (
    <ActionContainer>
      <ActionBox>
        <BoxAvatar>
          <ActionIcon />
        </BoxAvatar>
        <TextFieldBox>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", minWidth: "500px", maxWidth: "700px" }}
          >
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
                  label="Action Type"
                  value={type}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChanges(event, setType)
                  }
                  variant="filled"
              >
                {types.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Vehicles"
                variant="filled"
                value={vehicles}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setVehicles)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Distance"
                variant="filled"
                value={distance}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setDistance)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                  label="Location"
                  variant="filled"
                  value={location}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChanges(event, setLocation)
                  }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Moves"
                variant="filled"
                value={moves}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setMoves)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                  label="Equipment"
                  variant="filled"
                  value={equipment}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      handleChanges(event, setEquipment)
                  }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Participants"
                variant="filled"
                value={participants}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setParticipants)
                }
              />
            </Grid>
          </Grid>
        </TextFieldBox>
        <TextFieldBox></TextFieldBox>
        <Box sx={{ padding: "1rem" }}>
          <Button variant="contained" onClick={addActionHandler}>
            Add Action
          </Button>
        </Box>
      </ActionBox>
    </ActionContainer>
  );
}
export default AddAction;
