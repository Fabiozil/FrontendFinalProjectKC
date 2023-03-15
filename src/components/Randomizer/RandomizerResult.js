import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function RandomizerResult({ result }) {
    return result.map((god) => (
        <Grid item xs={4} key={god.name} sx={{ p: 2, border: 1 }}>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {god.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {god.title}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={god.godCardURL}
                    alt={god.name}
                />
            </Card>
        </Grid>
    ));
}

export { RandomizerResult };
