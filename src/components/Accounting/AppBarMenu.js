import React from 'react'
import NotificationBell from '../Notifications/NotificationBell';
import {Button} from "@mui/material";

const AppBarMenu = ({handleLogout}) => {
    return (
        <div>
            <Button variant="outlined" onClick={handleLogout} >Log Out</Button>
            <NotificationBell
                iconColor="black"
                badgeContent={4}
            />
        </div>

    )
}

export default AppBarMenu
