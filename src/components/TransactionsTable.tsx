import React, { useState } from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Button, Chip } from "@mui/material";
import type { Transaction } from "../types";
import ConfirmDialog from "./ConfirmDialog";
import Notification from "./Notification";

type Props = { transactions: Transaction[] };

const TransactionsTable: React.FC<Props> = ({ transactions }) => {
  const [localTransactions, setLocalTransactions] = useState(transactions);
  const [selected, setSelected] = useState<Transaction | null>(null);
  const [actionType, setActionType] = useState<"approve" | "reject">("approve");
  const [notification, setNotification] = useState<{ open: boolean; message: string; severity: "success" | "error" }>({ open: false, message: "", severity: "success" });

  const handleActionClick = (transaction: Transaction, type: "approve" | "reject") => {
    setSelected(transaction);
    setActionType(type);
  };

  const handleConfirm = () => {
    if (!selected) return;
    setLocalTransactions((prev) =>
      prev.map((t) => (t.id === selected.id ? { ...t, status: actionType === "approve" ? "approved" : "rejected" } : t))
    );
    setNotification({ open: true, message: `Transaction ${actionType}d!`, severity: "success" });
    setSelected(null);
  };

  return (
    <>
      <Table sx={{ bgcolor: "white" }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {localTransactions.map((t) => (
            <TableRow key={t.id}>
              <TableCell>{t.id}</TableCell>
              <TableCell>{t.user}</TableCell>
              <TableCell>${t.amount}</TableCell>
              <TableCell>
                <Chip label={t.status} color={t.status === "pending" ? "warning" : t.status === "approved" ? "success" : "error"} />
              </TableCell>
              <TableCell>{t.date}</TableCell>
              <TableCell>
                {t.status === "pending" && (
                  <>
                    <Button size="small" onClick={() => handleActionClick(t, "approve")}>
                      Approve
                    </Button>
                    <Button size="small" color="error" onClick={() => handleActionClick(t, "reject")}>
                      Reject
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selected && (
        <ConfirmDialog
          open={!!selected}
          transactionId={selected.id}
          actionType={actionType}
          onClose={() => setSelected(null)}
          onConfirm={handleConfirm}
        />
      )}

      <Notification open={notification.open} message={notification.message} severity={notification.severity} onClose={() => setNotification({ ...notification, open: false })} />
    </>
  );
};

export default TransactionsTable;
