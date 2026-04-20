import { useState } from 'react'
import { CATEGORIES } from './CATEGORIES.js'

function TransactionList({ transactions, onDelete }) {
  const [filterType, setFilterType] = useState("all");
  const [filterCategory, setFilterCategory] = useState("all");

  let filtered = transactions;
  if (filterType !== "all") filtered = filtered.filter(t => t.type === filterType);
  if (filterCategory !== "all") filtered = filtered.filter(t => t.category === filterCategory);

  return (
    <div className="transactions">
      <div className="transactions-header">
        <h2>Transactions</h2>
        <div className="filters">
          <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="all">All Types</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontSize: 14, padding: '16px 0' }}>
          No transactions match the current filters.
        </p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id}>
                <td className="date-cell">{t.date}</td>
                <td>{t.description}</td>
                <td><span className="category-badge">{t.category}</span></td>
                <td className={t.type === "income" ? "income-amount" : "expense-amount"}>
                  {t.type === "income" ? "+" : "−"}${t.amount.toLocaleString()}
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this transaction?"))
                        onDelete(t.id);
                    }}
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TransactionList;
