import Navbar from '../navbar/navbar';
import { Grid2 } from '@mui/material';
import { Outlet } from 'react-router-dom';


import React from "react";
import {Toolbar,Box,} from "@mui/material";
import AppRoutes from '../navbar/appRoutes';


const drawerWidth = 240;

const MainApp = () => {
    return (
        <Box sx={{ display: "flex" }}>
            {/* Sidebar */}
            <Grid2 container>
                <Navbar />
                <Outlet />
            </Grid2>
            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: `${drawerWidth}px` }}>
                <Toolbar />
                <AppRoutes/>

            </Box>
        </Box>
    )
}

export default MainApp
