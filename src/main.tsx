import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import DashboardPage from "./pages/DashboardPage";

import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <AppLayout>
      <DashboardPage />
    </AppLayout>
  </React.StrictMode>
);
