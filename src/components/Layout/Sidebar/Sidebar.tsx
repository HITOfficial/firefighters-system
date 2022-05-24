import LogoContainer from "./LogoContainer/LogoContainer";
import NavList from "./NavList/NavList";
import { Box, styled } from "@mui/material";

const LeftBox = styled(Box)({
  width: "16rem",
  minHeight: "56.25rem",
  height: "100%",
  position: "fixed",
  zIndex: 1101,
  boxShadow: "0px 8px 10px 1px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f16363",
});

const Sidebar = () => (
  <LeftBox>
    <LogoContainer />
    <NavList />
  </LeftBox>
);

export default Sidebar;
