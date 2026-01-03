import type { Transaction } from "../types";

export const transactions: Transaction[] = [
  { id: 't1', user: 'User 1', amount: 200, status: 'pending', date: '2026-01-01' },
  { id: 't2', user: 'User 2', amount: 150, status: 'approved', date: '2026-01-02' },
  { id: 't3', user: 'User 1', amount: 300, status: 'rejected', date: '2026-01-03' },
  { id: "t4", user: "User 1", amount: 400, status: "pending", date: "2026-01-04" },
];
