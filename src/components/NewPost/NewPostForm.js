import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, setAuthToken } from "../Storage/authSlice";
import { refreshAuthToken } from "../../common/refreshAuthToken";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NewPostForm() {
    const [photo, setPhoto] = useState(null);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.value);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(photo["0"]);

        if (!photo) {
            alert(
                "Please provide an image with a valid format (JEPG, PNG, JPG)"
            );
            return;
        }

        if (
            photo["0"].type !== "image/jpeg" &&
            photo["0"].type !== "image/jpg" &&
            photo["0"].type !== "image/png"
        ) {
            alert(
                "Please provide an image with a valid format (JEPG, PNG, JPG)"
            );
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("forSale", data.forSale);
            formData.append("photo", photo["0"]);
            const newToken = await refreshAuthToken(token);
            if (newToken) {
                dispatch(setAuthToken(newToken));
            } else {
                dispatch(logout());
                alert("Session caducated, please login again");
            }

            const postResponse = await axios.post(
                `${process.env.REACT_APP_BACKEND_HOST}/post?token=${token.token}`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "x-api-key": process.env.REACT_APP_TOKEN_KEY,
                    },
                }
            );
            console.log(postResponse);
            alert("Post created successfully!");
            navigate("/posts");
        } catch (err) {
            console.error(err);
            if (err.response.status === 403) {
                dispatch(logout());
                alert("Session caducated, please login again");
            } else {
                console.error(err);
                alert("Please provide a smaller image");
            }
        }
    };

    const onError = (error) => {
        console.error(error);
    };
    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit, onError)}
                noValidate
            >
                <Grid container spacing={3} sx={{ padding: 2 }}>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Post Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            {...register("name")}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="price"
                            label="Product Price"
                            name="price"
                            autoComplete="value"
                            type="number"
                            autoFocus
                            {...register("price")}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            onChange={(event) => {
                                setPhoto(event.target.files);
                            }}
                            accept="image/png, image/jepg, image/jpg"
                            required={true}
                            fullWidth={true}
                            type="file"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="primary"
                                    {...register("forSale")}
                                />
                            }
                            label="For Sale"
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sx={{ display: "flex", justifyContent: "end" }}
                    >
                        <Button variant="contained" type="submit">
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export { NewPostForm };
