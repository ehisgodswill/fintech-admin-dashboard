import React from "react";
import { Snackbar, Alert } from "@mui/material";

type Props = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info";
  onClose: () => void;
};

const Notification: React.FC<Props> = ({ open, message, severity, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
