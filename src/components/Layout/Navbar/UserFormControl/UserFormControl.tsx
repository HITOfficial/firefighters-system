import {
  Avatar,
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useState } from "react";
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

export const UserBox = styled(Box)({
  width: 150,
  display: "flex",
  alignItems: "center",
});
export const UserAvatar = styled(Avatar)({
  marginRight: "1rem",
  width: "1.5rem",
  height: "1.5rem",
});

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
