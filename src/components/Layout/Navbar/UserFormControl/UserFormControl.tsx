import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useState } from "react";
import { UserBox, UserAvatar } from "./UserFormControl.style";
import { ReactComponent as DefaultAvatar } from "../../../../images/icons/default_avatar.svg";

const AvatarBox = styled(Box)({
  paddingRight: "8px",
});

const SelectStyle = {
  color: "white",
  "& .MuiSelect-icon": {
    color: "white",
  },
};

const UserFormControl = (): JSX.Element => {
  const [user, setUser] = useState("User1");
  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value);
  };

  return (
    <UserBox>
      <AvatarBox>
        <DefaultAvatar width="24px" />
      </AvatarBox>
      <FormControl variant="standard">
        <Select
          sx={SelectStyle}
          disableUnderline
          labelId="user-label"
          id="user-id"
          value={user}
          onChange={handleChange}
        >
          <MenuItem value="User1">User1</MenuItem>
          <MenuItem value="Logout">Logout</MenuItem>
        </Select>
      </FormControl>
    </UserBox>
  );
};

export default UserFormControl;
