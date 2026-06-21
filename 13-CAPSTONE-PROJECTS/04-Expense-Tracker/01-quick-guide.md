# Capstone Project 4: Expense Tracker

## Architecture Overview
A MERN stack finance manager featuring expense logs, category totals, and aggregate balance calculations.

## Folder Structure
```text
expense-tracker/
├── client/
│   ├── src/
│   │   ├── components/  # StatSummary, TransactionHistory, TransactionForm
│   │   └── App.jsx
│   └── package.json
└── server/
    ├── models/      # Transaction.js (desc, amount, category)
    ├── routes/      # transRoutes.js
    └── server.js    # Entry file
```

## Feature Checklist
*   ✅ Real-time balance calculations summing incomes and expenses.
*   ✅ Category filter sorting transactions lists.
*   ✅ Transaction form validating numeric entries.
*   ✅ Aggregation backend endpoints calculating category totals.
*   ✅ Delete transaction button updating balances instantly.

## Step-by-Step Build Roadmap
1.  **Phase 1**: Configure the Transaction mongoose schema with amount, category, and date.
2.  **Phase 2**: Build Express endpoints for /api/transactions.
3.  **Phase 3**: Build the React homepage displaying total balance, income, and expense stats.
4.  **Phase 4**: Connect form submissions to update backend transaction records.
5.  **Phase 5**: Implement the delete transaction route updating client balance states.

## Suggested Improvements
*   Add visual pie charts showing expense allocations by category.
*   Implement date range selectors to view transaction logs for specific months.

## Deployment Guide
*   Deploy Node app to Render. Configure Atlas connection strings.
*   Deploy React app to Vercel, whitelisting Vercel domain URLs in Express CORS settings.
