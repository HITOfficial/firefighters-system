import Language from "./Language/Language";
import UserFormControl from "./UserFormControl/UserFormControl";
import { AppBar, Box, styled, Toolbar } from "@mui/material";

export const UserLanguageBox = styled(Box)({
  display: "flex",
});

export const TopToolbar = styled(Toolbar)({
  flexDirection: "row-reverse",
});

export const TopAppbar = styled(AppBar)({
  boxShadow: "0px 0px 4px 0px #0000001A",
  left: "16rem",
  width: "auto",
});

const Navbar = (): JSX.Element => (
  <TopAppbar>
    <TopToolbar>
      <UserLanguageBox>
        <UserFormControl />
        <Language />
      </UserLanguageBox>
    </TopToolbar>
  </TopAppbar>
);

export default Navbar;
