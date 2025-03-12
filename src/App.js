import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import NotificationBell from './components/Notifications/NotificationBell';
import Login from './components/Login/Login';
import MainApp from './components/Accounting/MainApp';

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => setIsAuthenticated(false);

  return (
    <Box sx={{
      height: "100vh", // Full viewport height
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 2, // Add padding for responsiveness
    }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          {/* Left Section: Title */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home Grown Accounting
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Button variant="outlined" onClick={handleLogout} >Log Out</Button>
            <NotificationBell
              iconColor="black"
              badgeContent={4}
            />
          </Box>

        </Toolbar>
      </AppBar>
      {isAuthenticated ?
        (
          <MainApp onLogout={handleLogout} />
        )
        :
        (
          <Login onLogin={handleLogin} />
        )
      }
    </Box>
  );



};

export default App;
