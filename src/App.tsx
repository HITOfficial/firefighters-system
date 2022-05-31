import React from "react";
import { basicTheme } from "./styles/themes";
import { Box, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TeamMembers from "./pages/TeamMembers/TeamMembers";
import AddTeamMember from "./pages/TeamMembers/AddTeamMember/AddTeamMember";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={basicTheme}>
        <BrowserRouter>
          <Layout></Layout>
          <Box sx={{ paddingLeft: "16rem", paddingTop: "4rem" }}>
            <Routes>
              <Route path="" element={<AddTeamMember />} />
              <Route path="team-members/list" element={<TeamMembers />} />
              <Route path="team-members/add" element={<AddTeamMember />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
