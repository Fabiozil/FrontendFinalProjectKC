import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm, FormProvider } from "react-hook-form";
import { TextInput } from "../TextInput";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        alert("Contact email sent. Thanks! We'll be on touch");
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
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                    <EmailIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Contact Form
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
                            name={"cellphone"}
                            label="Contact Phone"
                            rules={{ required: "Required Field!" }}
                            id="contactPhone"
                            required
                        />
                        <TextInput
                            name={"tellUs"}
                            label="Tell Us"
                            rules={{ required: "Required Field!" }}
                            id="tellUs"
                            required
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Send email
                        </Button>
                    </Box>
                </FormProvider>
            </Box>
        </Container>
    );
}

export { Contact };
