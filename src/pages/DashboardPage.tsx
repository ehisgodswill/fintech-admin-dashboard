import React from "react";
import SummaryCards from "../components/SummaryCards";
import WalletCard from "../components/WalletCard";
import TransactionsTable from "../components/TransactionsTable";
import { wallets } from "../mock-data/wallets";
import { transactions } from "../mock-data/transactions";
import { Grid, Box } from "@mui/material";

const DashboardPage: React.FC = () => {
  return (
    <>
      <SummaryCards wallets={wallets} transactions={transactions} />

      <Box mb={4}>
        <h3>Wallets</h3>
        <Grid container spacing={2}>
          {wallets.map((w) => (
            <Grid size={{ xs: 12, md: 4 }} key={w.id}>
              <WalletCard wallet={w} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <h3>Transactions</h3>
        <TransactionsTable transactions={transactions} />
      </Box>
    </>
  );
};

export default DashboardPage;
