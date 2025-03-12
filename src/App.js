import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";

import Login from './components/Login/Login';
import MainApp from './components/Accounting/MainApp';
import AppBarMenu from "./components/Accounting/AppBarMenu";
import { useNavigate } from "react-router-dom";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const navigate=useNavigate();
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/', {replace : true});
  }
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
            {isAuthenticated ?
              (
                <AppBarMenu handleLogout={handleLogout}/>
              )
              : null
            }
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
