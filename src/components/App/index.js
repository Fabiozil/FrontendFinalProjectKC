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
import { NewPost } from "../NewPost";
import { Copyright } from "../Copyright";
import { Container } from "../Container";
import { useSelector } from "react-redux";
import { MyPosts } from "../MyPosts";
import { EditPost } from "../EditPost";
import { Contact } from "../Contact";

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
    const token = useSelector((state) => state.value);
    console.log(token);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Navbar />
                <Container>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={token ? <Home /> : <Login />}
                        />
                        <Route
                            exact
                            path="/register"
                            element={token ? <Home /> : <Register />}
                        />
                        <Route
                            exact
                            path="/new-post"
                            element={token ? <NewPost /> : <Login />}
                        />
                        <Route
                            exact
                            path="/edit-post"
                            element={token ? <EditPost /> : <Login />}
                        />
                        <Route
                            exact
                            path="/posts"
                            element={token ? <MyPosts /> : <Login />}
                        />
                        <Route
                            exact
                            path="/home"
                            element={token ? <Home /> : <Login />}
                        />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </Container>
                <Copyright />
            </Router>
        </ThemeProvider>
    );
}

//Exports
export { App };
