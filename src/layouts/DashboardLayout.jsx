// src/layouts/DashboardLayout.jsx

import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  Box, Drawer, AppBar, Toolbar, List, Typography, Divider, IconButton,
  ListItem, ListItemButton, ListItemIcon, ListItemText, Link
} from '@mui/material';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const navItems = [
  { text: 'All CRM', icon: <AllInboxIcon />, path: '/dashboard' },
  { text: 'Create CRM', icon: <AddIcon />, path: '/create-crm' },
];

const DashboardLayout = ({ children }) => {
  const location = useLocation(); // Hook to get the current URL

  return (
    <Box sx={{ display: 'flex' }}>
      {/* AppBar (Header) remains the same */}
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#fff', color: '#000' }}
        elevation={1}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} />
          <IconButton><LightModeIcon /></IconButton>
          <IconButton><AccountCircleIcon /></IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) is now updated with functional links */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', borderRight: '1px solid rgba(0, 0, 0, 0.12)' },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" sx={{ pl: 2, fontWeight: 'bold' }}>Gold CRM</Typography>
        </Toolbar>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              {/* Each button is now a link that changes the URL */}
              <ListItemButton
                component={RouterLink}
                to={item.path}
                selected={location.pathname === item.path} // Highlights the current page
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f4f6f8', p: 3, minHeight: '100vh' }}>
        <Toolbar /> {/* Spacer */}
        {children}
      </Box>
    </Box>
  );
};

export default DashboardLayout;