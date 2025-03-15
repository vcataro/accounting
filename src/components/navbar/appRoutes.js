import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Typography } from '@mui/material';
import GlHome from '../../pages/GeneralLedger/glHome';
import GlSetUp from '../../pages/GeneralLedger/GlSetUp';
import CompanyAdmin from '../../pages/CompanyAdministration/CompanyAdmin';

const Home = () => <Typography variant="h4">Welcome to Home!</Typography>;
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="companysetup" element={<CompanyAdmin />} />
            <Route path="glsetup" element={<GlSetUp />} />


        </Routes>
    )
}

export default AppRoutes;
