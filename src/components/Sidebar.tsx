import React from "react";
import { Box, List, ListItemButton, ListItemText, Typography } from "@mui/material";

const Sidebar: React.FC = () => {
  const links = ["Dashboard", "Transactions", "Wallets", "Users", "Settings"];
  return (
    <Box width={240} bgcolor="#1976d2" color="white" p={2}>
      <Typography variant="h6" mb={4}>Fintech Admin</Typography>
      <List>
        {links.map((link) => (
          <ListItemButton key={link}>
            <ListItemText primary={link} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
