import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Avatar, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="default" sx={{ boxShadow: "none", borderBottom: 1, borderColor: "divider" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">Dashboard</Typography>
        <Box display="flex" alignItems="center">
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <Avatar sx={{ ml: 2 }}>A</Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
