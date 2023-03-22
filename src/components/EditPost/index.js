import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { EditPostForm } from "./EditPostForm";

function EditPost() {
    const [result, setResult] = useState([]);

    return (
        <>
            <Box
                sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" color="primary">
                            Edit Post
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">
                            Please modify the desired fields and click edit to
                            edit the post, if no image is provided then the
                            existing will not be overwrited
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <EditPostForm />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export { EditPost };
