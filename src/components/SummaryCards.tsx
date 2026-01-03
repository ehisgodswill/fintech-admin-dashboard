import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import type { Transaction, Wallet } from "../types";

type Props = {
  wallets: Wallet[];
  transactions: Transaction[];
};

const SummaryCards: React.FC<Props> = ({ wallets, transactions }) => {
  const totalBalance = wallets.reduce((acc, w) => acc + w.balance, 0);
  const pendingCount = transactions.filter((t) => t.status === "pending").length;
  const approvedCount = transactions.filter((t) => t.status === "approved").length;

  const metrics = [
    { label: "Total Balance", value: `$${totalBalance}` },
    { label: "Pending Transactions", value: pendingCount },
    { label: "Approved Transactions", value: approvedCount },
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {metrics.map((m) => (
        <Grid size={{ xs: 12, md: 4 }} key={m.label}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2">{m.label}</Typography>
              <Typography variant="h6">{m.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
