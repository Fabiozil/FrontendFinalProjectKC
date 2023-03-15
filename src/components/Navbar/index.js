//Libraries imports
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { BrowserRouter, Route, Link } from "react-router-dom";

//Components Imports
import { AccountSettings } from "../AccountSettings";

function Navbar() {
    return (
        <>
            <Box sx={{ width: 1 }}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="Randomizer"
                        icon={<ShuffleIcon />}
                        href={"/randomizer"}
                    />
                    <BottomNavigationAction
                        label="Your Stats"
                        icon={<QueryStatsIcon />}
                        href={"stats"}
                    />
                    <BottomNavigationAction
                        label="Meta"
                        icon={<TrendingUpIcon />}
                        href={"meta"}
                    />
                    <BottomNavigationAction
                        label="Contact"
                        icon={<ContactSupportIcon />}
                        href={"/contact"}
                    />
                    <AccountSettings />
                </BottomNavigation>
            </Box>
        </>
    );
}

export { Navbar };
