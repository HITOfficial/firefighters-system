import { ReactComponent as Logo } from "../../../../images/logo/logo.svg";
import { Box, styled, Typography } from "@mui/material";

const LogoBox = styled(Box)({
  width: "100%",
  height: "4rem",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LogoContainer = () => (
  <LogoBox>
    <Typography variant="h5" sx={{ fontWeight: 700, color: "white" }}>
      Firefighters system
    </Typography>
  </LogoBox>
);

export default LogoContainer;
