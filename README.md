# **Fintech Admin Dashboard – Transaction Approval System**

## Overview

This project is a **React-based admin dashboard** designed for managing user transactions, wallet balances, and approval workflows in a fintech or SaaS context. It simulates a real-world internal tool where accurate transaction handling, backend synchronization, and clear UI feedback are critical for operational reliability.

The dashboard demonstrates:

* Role-based admin actions
* Real-time transaction management
* Pixel-perfect Figma-to-code implementation
* Responsive, production-ready UI

---

## Business Problem

Fintech platforms and internal business tools often struggle with **inconsistent UI state** when performing sensitive actions like approving, rejecting, or rolling back transactions. Without a clear and reliable interface, admins can make errors that affect user balances, create confusion, or delay workflows.

This dashboard was designed to solve these issues by:

* Providing real-time, backend-synced transaction updates
* Clearly distinguishing pending, approved, and rejected transactions
* Giving admins confirmation before performing sensitive actions

---

## Solution

The dashboard is built with **React** and **MUI** (with Emotion styling), following a **component-driven architecture**. Every UI element is modular and reusable, including:

* **Wallet Cards**: Display user balances and recent activity
* **Transaction Table**: Shows all transactions with Approve/Reject actions
* **Confirm Dialog**: Ensures admins confirm sensitive actions
* **Notifications**: Inform users of successful or failed operations
* **Responsive Layout**: Works across desktop, tablet, and mobile

All interactions are powered by **mock API data** to simulate real backend integration. This structure allows the dashboard to **mimic a live production system** while remaining fully self-contained.

---

## Key Features

* **Wallet Overview**: Cards showing balances and recent transactions
* **Transaction Management**: Table listing all transactions with status badges
* **Approval Workflow**: Approve or reject transactions with confirm dialog
* **Loading & Error States**: Simulates real-world API delays and failures
* **Notifications / Snackbars**: Provide feedback after every action
* **Responsive Design**: Optimized for multiple screen sizes
* **Figma/XD to Code Accuracy**: UI closely matches modern design files

---

## Tech Stack

* **Front-End**: React, TypeScript
* **UI Library**: MUI, Emotion
* **Data Handling**: Mock JSON API
* **Charts / Metrics**: Recharts for metrics display
* **Development Tools**: Vite

---

## Component Structure

```md
src/
  components/
    AppLayout.tsx
    Sidebar.tsx
    Header.tsx
    SummaryCards.tsx
    WalletCard.tsx
    TransactionsTable.tsx
    ConfirmDialog.tsx
    Notification.tsx
  pages/
    DashboardPage.tsx
  mock-data/
    wallets.ts
    transactions.ts
  types/
    index.ts
  utils/
    api.ts
```

---

### Key Components Description

| Component               | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| AppLayout               | Wraps pages, provides sidebar, header, footer                           |
| Sidebar                 | Navigation links to Dashboard, Transactions, Wallets                    |
| Header                  | App name, user avatar, notifications                                    |
| DashboardPage           | Combines summary cards, transactions table, wallet cards                |
| SummaryCards            | Displays metrics like total balance, pending and completed transactions |
| WalletCard              | Shows individual wallet balance & recent activity                       |
| TransactionsTable       | Table with transactions and approve/reject actions                      |
| ConfirmDialog           | Modal dialog for confirming sensitive actions                           |
| Notification / Snackbar | Feedback after transaction actions                                      |

---

## Mock Data

```ts
// Wallets
const wallets = [
  { id: 'w1', name: 'User 1', balance: 1200 },
  { id: 'w2', name: 'User 2', balance: 500 },
];

// Transactions
const transactions = [
  { id: 't1', user: 'User 1', amount: 200, status: 'pending', date: '2026-01-01' },
  { id: 't2', user: 'User 2', amount: 150, status: 'approved', date: '2026-01-02' },
  { id: 't3', user: 'User 1', amount: 300, status: 'rejected', date: '2026-01-03' },
];
```

---

## Getting Started

1. Clone the repository

    ```bash
    git clone https://github.com/ehisgodswill/fintech-admin-dashboard.git
    ```

2. Install dependencies

    ```bash
    npm install
    ```

3. Run the development server

    ```bash
    npm run dev
    ```

4. Open `http://localhost:5173` to view the dashboard

---

## Notes

* All data is **mocked**; no real financial data is used
* The project is designed to **simulate real internal fintech workflows**
* Figma/XD design fidelity is maintained for UI components
* Perfect for use as a **portfolio project** or **Upwork showcase**

---

## Outcome / Impact

* Demonstrates professional React front-end skills
* Shows ability to convert **designs into production-ready code**
* Highlights ability to build **data-driven dashboards** and admin panels
