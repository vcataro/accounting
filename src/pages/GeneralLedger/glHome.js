import React from 'react'
import { Grid2 } from '@mui/material';
import {Box} from '@mui/material';

const GlHome = () => {
  return (
    <Grid2 item sx={8}>
    <Box sx={{height: "100vh", // Full viewport height
                display: "flex"  }}>
        <h2>
            General Ledger Home
        </h2>
    </Box>
</Grid2>
  )
}

export default GlHome;
