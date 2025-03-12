import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Typography } from '@mui/material';
import GlHome from '../../pages/GeneralLedger/glHome';

const Home = () => <Typography variant="h4">Welcome to Home!</Typography>;
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="generalledger" element={<GlHome />} />
        </Routes>
    )
}

export default AppRoutes;
