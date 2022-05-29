import React from "react";
import { basicTheme } from "./styles/themes";
import { Box, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Team from "./pages/Team/Team";
import TeamUserDescription from "./pages/Team/TeamUserDescription/TeamUserDescription";
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
              <Route path="" element={<TeamUserDescription />} />
              <Route path="team" element={<Team />} />
              <Route path="team/:id" element={<TeamUserDescription />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
