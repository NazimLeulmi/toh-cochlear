import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import SignIn from "./pages/signin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bf6",
      light: "#28acff",
    },
    secondary: {
      main: "#f67b00",
      light: "#ffa625",
    },
    error: {
      main: "#f6007b",
    },
    success: {
      main: "#00f6f6",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
