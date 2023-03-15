import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, FormProvider } from "react-hook-form";
import { TextInput } from "../TextInput";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Smite it
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function Register() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    const onError = (error) => {
        console.error(error);
    };

    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
            repeatPassword: "",
        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Register
                </Typography>
                <FormProvider {...form}>
                    <Box
                        component="form"
                        onSubmit={form.handleSubmit(onSubmit, onError)}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextInput
                            name={"email"}
                            label="Email Address"
                            rules={{
                                required: "Required Field!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address",
                                },
                            }}
                            autoComplete="email"
                            autoFocus
                            id="email"
                            required
                        />
                        <TextInput
                            name={"username"}
                            label="Username"
                            rules={{ required: "Required Field!" }}
                            id="username"
                            required
                        />
                        <TextInput
                            name={"password"}
                            label="Password"
                            rules={{ required: "Required Field!" }}
                            autoComplete="current-password"
                            id="password"
                            required
                            type="password"
                        />
                        <TextInput
                            name={"repeatPassword"}
                            label="Repeat Password"
                            rules={{ required: "Required Field!" }}
                            id="repeatPassword"
                            required
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="/" variant="body2">
                                    {"Have an account? Log in"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </FormProvider>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    );
}

export { Register };

function undefined({}) {
    return (
        <Avatar
            sx={{
                m: 1,
                bgcolor: "secondary.main",
            }}
        >
            <LockOutlinedIcon />
        </Avatar>
    );
}
