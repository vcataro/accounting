import React from "react";
import { Button, TextField,Box,  Typography, Card, CardContent } from "@mui/material";

const Login = ({ onLogin }) => {
    return (
      <Box sx={{
        height: "100vh", // Full viewport height
        display: "flex",
        alignContent:"center",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Card sx={{
            width: 400, padding: 2,
            boxShadow: 5, // Material-UI shadow level
            borderRadius: 2, // Rounded corners
            backgroundColor: "#ffffff", // White background for the card
        }}>
            <CardContent>
                <Typography variant="h4" component={"div"}>Login</Typography>
                <TextField label="Username" variant="outlined" fullWidth />
                <TextField label="Password" type="password" variant="outlined" fullWidth />
                <Button variant="contained" color="primary" onClick={onLogin}>
                    Login
                </Button>
            </CardContent>
        </Card>
        </Box>
    );
};

export default Login
