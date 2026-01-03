import React, { type ReactNode } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = { children: ReactNode };

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box flex={1} display="flex" flexDirection="column">
        <Header />
        <Box flex={1} p={3} bgcolor="#f5f5f5">
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
