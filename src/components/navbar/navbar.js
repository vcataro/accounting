import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
import { mainNavbarItems } from './consts/navbaritems';
import { navbarStyles } from './styles';
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from '@mui/icons-material'

const Navbar = () => {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});

  // Toggle the open state of an expandable item.
  const handleToggle = (id) => {
    setOpenItems(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleNavigation = (item) => {
    if (!item.subitems && item.route) {
      navigate(item.route); // Navigate if there are no subitems and a route is defined
    }
  };

  return (
    <Drawer
      sx={navbarStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map(item => (
          <React.Fragment key={item.id}>
            {item.subItems ? (
              <>
                {/* Expandable List Item */}
                <ListItem button onClick={() => handleToggle(item.id)}>
                  <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.label} />
                  {openItems[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openItems[item.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map(subItem => (
                      <ListItem
                        button
                        key={subItem.id}
                        onClick={() =>
                           handleNavigation(subItem)}
                      >
                        <ListItemButton>
                          <ListItemIcon sx={navbarStyles.icons}>
                            {subItem.icon}
                          </ListItemIcon>
                          <ListItemText sx={navbarStyles.text} primary={subItem.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              // Non-expandable List Item
              <ListItem
                button
                key={item.id}
                onClick={() =>
                  handleNavigation(item)}

              >
                <ListItemButton>
                  <ListItemIcon sx={navbarStyles.icons}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={navbarStyles.text} primary={item.label} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />

    </Drawer>
  )
}

export default Navbar
