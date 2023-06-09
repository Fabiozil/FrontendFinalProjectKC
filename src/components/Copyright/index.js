import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 8, mb: 4 }}
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Crack Coders
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export { Copyright };
