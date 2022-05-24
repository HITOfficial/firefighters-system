import React from "react";
import { basicTheme } from "./styles/themes";
import { Box, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout/Layout";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Team from "./pages/Team/Team";

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <BrowserRouter>
        <Layout></Layout>
        <Box sx={{ paddingLeft: "16rem", paddingTop: "4rem" }}>
          <Routes>
            <Route path="" />
            <Route path="team" element={<Team />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
