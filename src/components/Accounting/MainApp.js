import Navbar from '../navbar/navbar';
import { Grid2 } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Authentication from '../../pages/Authentication/authentication';
import { Routes, Route } from "react-router-dom";
import React from "react";
import {Toolbar,Typography,Box,} from "@mui/material";


const drawerWidth = 240;
const Home = () => <Typography variant="h4">Welcome to Home!</Typography>;
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="authentication" element={<Authentication />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default MainApp
