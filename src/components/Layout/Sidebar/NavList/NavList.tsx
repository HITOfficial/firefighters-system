import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  styled,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { ReactComponent as TeamIcon } from "../../../../images/icons/team_members.svg";
import { ReactComponent as AddTeamMemberIcon } from "../../../../images/icons/add_team_member.svg";
import { ReactComponent as LockIcon } from "../../../../images/icons/lock.svg";
import { ReactComponent as FuelingsIcon } from "../../../../images/icons/fuelings.svg";
import { ReactComponent as AddIcon } from "../../../../images/icons/add.svg";

const NavListBox = styled(Box)({
  paddingTop: "0.5rem",
});

const ActiveStyle = {
  "&": {
    color: "rgba(0, 0, 0, 0.6)",
    letterSpacing: "0.17px",
    fontWeight: 400,
    height: "48px",
    "svg path": {
      fill: "rgba(1,1,1,0.3)",
    },
  },
  "&.active, &:hover": {
    background: "transparent",
    color: "white",
    fill: "white",
    "& svg path": {
      fill: "white",
    },
  },
  "&.active": {
    letterSpacing: "0.1px",
    fontWeight: 700,
  },
  "&.active:after": {
    content: '""',
    position: "absolute",
    right: 0,
    top: "4px",
    backgroundColor: "#f16363",
    borderRight: "18px solid white",
    borderTop: "24px solid transparent",
    borderBottom: "24px solid transparent",
  },

  "& .MuiListItemIcon-root": {
    paddingLeft: "10px",
    minWidth: "36px",
  },
};

const CustomListSubheader = styled(ListSubheader)({
  fontWeight: 600,
  fontSize: "12px",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  color: "white",
  backgroundColor: "#f16363",
});

const NavList = () => (
  <NavListBox>
    <List
      component="nav"
      subheader={<CustomListSubheader>Our TeamMembers</CustomListSubheader>}
    >
      <ListItemButton
        component={NavLink}
        to="team-members/list"
        sx={ActiveStyle}
      >
        <ListItemIcon>
          <TeamIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="Team Members" />
      </ListItemButton>
      <ListItemButton
        component={NavLink}
        to="team-members/add"
        sx={ActiveStyle}
      >
        <ListItemIcon>
          <AddTeamMemberIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="New Team Member" />
      </ListItemButton>
    </List>
    <List
      component="nav"
      subheader={<CustomListSubheader>Fuelings List History</CustomListSubheader>}
    >
      <ListItemButton component={NavLink} to="fuelings/list" sx={ActiveStyle}>
        <ListItemIcon>
          <FuelingsIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="Check Fuelings List" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="fuelings/add-new" sx={ActiveStyle}>
        <ListItemIcon>
          <AddIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="New Fueling" />
      </ListItemButton>
    </List>
    <List
      component="nav"
      subheader={<CustomListSubheader>Actions history</CustomListSubheader>}
    >
      <ListItemButton component={NavLink} to="actions/list" sx={ActiveStyle}>
        <ListItemIcon>
          <LockIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="Check Actions List" />
      </ListItemButton>
      <ListItemButton component={NavLink} to="actions/add-new" sx={ActiveStyle}>
        <ListItemIcon>
          <LockIcon width="20px" />
        </ListItemIcon>
        <ListItemText primary="New Action" />
      </ListItemButton>
    </List>
  </NavListBox>
);

export default NavList;
