import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const NotificationBell = ({ iconColor, badgeContent }) => {
    const newNotifications=`You have ${badgeContent} notifications`;
    const noNotifications="You have no notifications";
    return (
        <Tooltip title={badgeContent ? newNotifications : noNotifications}>

            <IconButton color={iconColor}>
                <Badge badgeContent={badgeContent} color="error">
                    <NotificationsIcon sx={{color:iconColor}} />
                </Badge>
            </IconButton>
        </Tooltip>

    )
}

export default NotificationBell
