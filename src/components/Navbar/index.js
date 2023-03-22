//Libraries imports
import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";

//Components Imports
import { AccountSettings } from "../AccountSettings";

function Navbar() {
    const token = useSelector((state) => state.value);
    return (
        <>
            <Box sx={{ width: 1 }}>
                <BottomNavigation showLabels>
                    <BottomNavigationAction
                        label="All Posts"
                        icon={<StoreMallDirectoryIcon />}
                        href={"/home"}
                    />
                    <BottomNavigationAction
                        label="My Posts"
                        icon={<InventoryIcon />}
                        href={"/posts"}
                    />
                    <BottomNavigationAction
                        label="New Post"
                        icon={<AddBusinessIcon />}
                        href={"/new-post"}
                    />
                    <BottomNavigationAction
                        label="Contact"
                        icon={<ContactSupportIcon />}
                        href={"/contact"}
                    />
                    {token ? (
                        <AccountSettings />
                    ) : (
                        <BottomNavigationAction
                            label="Login"
                            icon={<LoginIcon />}
                            href={"/"}
                        />
                    )}
                </BottomNavigation>
            </Box>
        </>
    );
}

export { Navbar };
