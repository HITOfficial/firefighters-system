import { Box, Button, Grid, MenuItem, styled, TextField } from "@mui/material";
import { ReactComponent as DefaultAvatar } from "../../../images/icons/default_avatar.svg";
import { ChangeEvent, useState } from "react";
import {
  addTeamMember,
  fetchTeamMembers,
  TeamMember,
} from "../../../redux/slices/TeamMembersSlice";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";

const TeamUserContainer = styled(Box)({
  paddingTop: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "700px",
});

const TeamUserBox = styled(Box)({
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

const sexTypes = ["man", "woman", "undefined"];

const rankTypes = [
  "probationary firefighter",
  "firefighter",
  "driver engineer",
  "lieutenant",
  "captain",
  "battalion chief",
  "assistant Chief",
  "fire chief,",
];

const eqiupmentTypes = [
  "basic equipment",
  "without equipment",
  "medium equipment",
  "full equipment",
];

const drivingLicenceTypes = ["None", "B", "B+C", "B+C+E", "C", "C+E", "E"];

const healthInsuranceTypes = [
  "None",
  "basic",
  "basic +",
  "medium ",
  "medium +",
  "full",
];

const gridStyle = {
  display: "flex",
  justifyContent: "center",
};

function AddTeamMember(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const [fullName, setFullName] = useState("John Snow");
  const [age, setAge] = useState("24");
  const [location, setLocation] = useState("Location 1");
  const [phone, setPhone] = useState("(+48) 18 24 18 111");
  const [additionalInfo, setAdditionalInfo] = useState("Additional Info");

  const [sex, setSex] = useState("man");
  const [rank, setRank] = useState("firefighter");
  const [equipment, setEquipment] = useState("basic equipment");
  const [drivingLicence, setDrivingLicence] = useState("B");
  const [healthInsurance, setHealthInsurance] = useState("basic");

  // One function as handle changes with ref to react setter
  const handleChanges = (
    event: ChangeEvent<HTMLInputElement>,
    Func_ref: (x: string) => void
  ) => {
    Func_ref(event.target.value);
  };

  const addTeamMemberHandler = () => {
    const newUser: TeamMember = {
      _id: "not",
      fullName: fullName,
      age: parseInt(age),
      location: location,
      phone: phone,
      sex: sex,
      additionalInfo: additionalInfo,
      rank: rank,
      equipment: equipment,
      drivingLicence: drivingLicence,
      healthInsurance: healthInsurance,
    };
    dispatch(addTeamMember(newUser));
    // dont know how to refetch on use effect, from this reason setTimeout
    setTimeout(() => dispatch(fetchTeamMembers()), 100);
  };

  return (
    <TeamUserContainer>
      <TeamUserBox>
        <BoxAvatar>
          <DefaultAvatar />
        </BoxAvatar>
        <TextFieldBox>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", minWidth: "500px", maxWidth: "700px" }}
          >
            <Grid item xs={12} sx={gridStyle}>
              <TextField
                label="Full Name"
                variant="filled"
                value={fullName}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setFullName)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                label="Age"
                variant="filled"
                value={age}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setAge)
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
                label="Phone"
                variant="filled"
                value={phone}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setPhone)
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Sex"
                value={sex}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setSex)
                }
                variant="filled"
              >
                {sexTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Rank"
                value={rank}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setRank)
                }
                variant="filled"
              >
                {rankTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Equipment"
                value={equipment}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setEquipment)
                }
                variant="filled"
              >
                {eqiupmentTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Driving Licence"
                value={drivingLicence}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setDrivingLicence)
                }
                variant="filled"
              >
                {drivingLicenceTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Health Insurance"
                value={healthInsurance}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setHealthInsurance)
                }
                variant="filled"
              >
                {healthInsuranceTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sx={gridStyle}>
              <TextField
                sx={{ width: "400px" }}
                id="filled-multiline-flexible"
                label="Additional Info"
                multiline
                maxRows={4}
                value={additionalInfo}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChanges(event, setAdditionalInfo)
                }
                variant="filled"
              />
            </Grid>
          </Grid>
        </TextFieldBox>
        <TextFieldBox></TextFieldBox>
        <Box sx={{ padding: "1rem" }}>
          <Button variant="contained" onClick={addTeamMemberHandler}>
            Add User
          </Button>
        </Box>
      </TeamUserBox>
    </TeamUserContainer>
  );
}

export default AddTeamMember;
