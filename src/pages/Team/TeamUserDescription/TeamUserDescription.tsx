import { Box, Grid, MenuItem, styled, TextField } from "@mui/material";
import { ReactComponent as DefaultAvatar } from "../../../images/icons/default_avatar.svg";
import { ChangeEvent, useState } from "react";

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

function TeamUserDescription(): JSX.Element {
  const [sex, setSex] = useState("man");
  const [rank, setRank] = useState("firefighter");
  const [equipment, setEquipment] = useState("basic equipment");
  const [drivingLicence, setDrivingLicence] = useState("B");
  const [healthInsurance, setHealthInsurance] = useState("basic");
  const [additionalInfo, setAdditionalInfo] = useState("Additional Info");

  const handleSex = (event: ChangeEvent<HTMLInputElement>) => {
    setSex(event.target.value);
  };
  const handleRank = (event: ChangeEvent<HTMLInputElement>) => {
    setRank(event.target.value);
  };
  const handleEuipment = (event: ChangeEvent<HTMLInputElement>) => {
    setEquipment(event.target.value);
  };
  const handleDrivingLicence = (event: ChangeEvent<HTMLInputElement>) => {
    setDrivingLicence(event.target.value);
  };
  const handleHealthInsurance = (event: ChangeEvent<HTMLInputElement>) => {
    setHealthInsurance(event.target.value);
  };
  const handleAdditionalInfo = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditionalInfo(event.target.value);
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
              <TextField label="Full Name" variant="filled" value="John Snow" />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField label="Age" variant="filled" value="56" />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField label="Location" variant="filled" value="Location 1" />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField label="Phone" variant="filled" value="Phone" />
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={gridStyle}>
              <TextField
                sx={{ width: "212px" }}
                id="filled-select-currency"
                select
                label="Sex"
                value={sex}
                onChange={handleSex}
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
                onChange={handleRank}
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
                onChange={handleEuipment}
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
                onChange={handleDrivingLicence}
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
                onChange={handleHealthInsurance}
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
                onChange={handleAdditionalInfo}
                variant="filled"
              />
            </Grid>
          </Grid>
        </TextFieldBox>
        <TextFieldBox></TextFieldBox>
      </TeamUserBox>
    </TeamUserContainer>
  );
}

export default TeamUserDescription;
