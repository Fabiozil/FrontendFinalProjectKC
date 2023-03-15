import React from "react";
import Box from "@mui/material/Box";

function Container({ children }) {
    return (
        <Box
            sx={{
                width: 0.8,
                height: 1,
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
                padding: 4,
            }}
        >
            {children}
        </Box>
    );
}

export { Container };
