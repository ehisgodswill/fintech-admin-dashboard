import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  actionType: "approve" | "reject";
  transactionId: string;
};

const ConfirmDialog: React.FC<Props> = ({ open, onClose, onConfirm, actionType, transactionId }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{actionType === "approve" ? "Approve Transaction?" : "Reject Transaction?"}</DialogTitle>
      <DialogContent>
        <Typography>Transaction ID: {transactionId}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} color={actionType === "approve" ? "primary" : "error"}>
          {actionType === "approve" ? "Approve" : "Reject"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
