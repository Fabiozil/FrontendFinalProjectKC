//Libraries imports
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

//Components imports
import { Home } from "../Home";
import { Login } from "../Login";
import { Register } from "../Login/Register";
import { Navbar } from "../Navbar";
import { Randomizer } from "../Randomizer";
import { Copyright } from "../Copyright";
import { Container } from "../Container";

//Functions definition
const theme = createTheme({
    typography: {
        fontFamily: ["Roboto", "sans-serif"].join(","),
    },
    palette: {
        primary: {
            500: "#1DB954",
        },
        // secondary: { A400: "#1DB954" },
        error: { 500: "#E60023" },
        warning: { 500: "#FF9900" },
        mode: "dark",
    },
});

//App definition
function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route exact path="/" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route
                            exact
                            path="/randomizer"
                            element={<Randomizer />}
                        />
                        <Route exact path="/home" element={<Home />} />
                    </Routes>
                </Container>
                <Copyright />
            </Router>
        </ThemeProvider>
    );
}

//Exports
export { App };
