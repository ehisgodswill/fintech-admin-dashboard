import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import type { Wallet } from "../types";

type Props = { wallet: Wallet };

const WalletCard: React.FC<Props> = ({ wallet }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="subtitle2">{wallet.name}</Typography>
        <Typography variant="h6">${wallet.balance}</Typography>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
