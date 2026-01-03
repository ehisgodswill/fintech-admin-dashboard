export type Wallet = {
  id: string;
  name: string;
  balance: number;
};

export type Transaction = {
  id: string;
  user: string;
  amount: number;
  status: "pending" | "approved" | "rejected";
  date: string;
};
