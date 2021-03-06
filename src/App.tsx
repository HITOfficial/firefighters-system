import React from "react";
import { basicTheme } from "./styles/themes";
import { Box, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamMembersList from "./pages/TeamMembers/TeamMembersList";
import AddTeamMember from "./pages/TeamMembers/AddTeamMember/AddTeamMember";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import FuelingsList from "./pages/Fuelings/FuelingsList";
import AddFueling from "./pages/Fuelings/AddFueling/AddFueling";
import ActionsList from "./pages/Actions/ActionsList";
import AddAction from "./pages/Actions/AddAction/AddAction";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={basicTheme}>
        <BrowserRouter>
          <Layout></Layout>
          <Box sx={{ paddingLeft: "16rem", paddingTop: "4rem" }}>
            <Routes>
              <Route path="" element={<AddTeamMember />} />
              <Route path="team-members/list" element={<TeamMembersList />} />
              <Route path="team-members/add" element={<AddTeamMember />} />
              <Route path="fuelings/list" element={<FuelingsList />} />
              <Route path="fuelings/add-new" element={<AddFueling />} />
              <Route path="actions/list" element={<ActionsList />} />
              <Route path="actions/add-new" element={<AddAction/>} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
