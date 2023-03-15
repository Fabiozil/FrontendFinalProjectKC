import { React, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { RandomizerForm } from "./RandomizerForm";
import { RandomizerResult } from "./RandomizerResult";

function Randomizer() {
    const [result, setResult] = useState([]);

    return (
        <>
            <Box
                sx={{ flexGrow: 1, justifyContent: "center", display: "flex" }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center">
                            Welcome to the SmiteIt Randomizer!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle1" align="center">
                            Please provide at least the mandatory info to
                            generate a completly random build. Please use this
                            in normal queues, just for fun
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <RandomizerForm setResult={setResult} />
                    </Grid>
                    <RandomizerResult result={result} />
                </Grid>
            </Box>
        </>
    );
}

export { Randomizer };
