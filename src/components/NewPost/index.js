import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { NewPostForm } from "./NewPostForm";

function NewPost() {
    const [result, setResult] = useState([]);

    return (
        <>
            <Box
                sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="primary">
                            Create New Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">
                            Please provide all the information to generate a new
                            Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <NewPostForm />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export { NewPost };
