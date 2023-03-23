import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../Storage/authSlice";
import axios from "axios";

function Login() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        if (!(data.email && data.password)) {
            alert("Please provide all the fields for the login");
        } else {
            try {
                const authResponse = await axios.post(
                    `${process.env.REACT_APP_BACKEND_HOST}/auth/login`,
                    { email: data.email, password: data.password },
                    {
                        headers: {
                            "x-api-key": process.env.REACT_APP_TOKEN_KEY,
                        },
                    }
                );

                if (authResponse.data.data.status === "error") {
                    alert(authResponse.data.data.message);
                } else {
                    dispatch(setAuthToken(authResponse.data.data.response[0]));
                    alert("Logged in successfully!");
                }
            } catch (err) {
                console.error(err);
                if (err.response.status === 400) {
                    alert(err.response.data.message[0]);
                } else {
                    alert("Error logging in");
                }
            }
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        {...register("email")}
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        {...register("password")}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                {...register("remember")}
                            />
                        }
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link
                                href="#"
                                variant="body2"
                                onClick={() => {
                                    alert("Not implemented yet!");
                                }}
                            >
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export { Login };
