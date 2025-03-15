import React from 'react'
import Grid2 from '@mui/material/Grid2';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

const GlSetUp: React.FC = () => {
  return (
    <Grid2 size={{ xs: 8 }} >
      <Box sx={{
        height: "100vh", // Full viewport height
        width:"100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "solid",
        borderBlockWidth: "2px",
        borderBlockColor: "red"
      }}>

        <Card variant="outlined" sx={{
          width:"60%",
          maxHeight: 'max-content',
          mx: 'auto',
          // to make the demo resizable
          overflow: 'auto',
          resize: 'horizontal',
          backgroundColor: "#FFFFE2",
          boxShadow: 5, // Material-UI shadow level
          borderRadius: 2 // Rounded corners
        }}>
          <Typography variant="h4" align='center' padding={2} component={"div"}>G/L Setup</Typography>
          <CardContent >

            <TextField label="Username" variant="outlined" fullWidth />
            <TextField label="Password" type="password" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" >
              Login
            </Button>
          </CardContent>

        </Card>
      </Box>
    </Grid2>
  )
}

export default GlSetUp;
