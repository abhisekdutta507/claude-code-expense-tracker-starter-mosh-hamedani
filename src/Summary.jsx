function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="summary">
      <div className="summary-card income-card">
        <div className="card-header">
          <em className="card-icon">↑</em>
          <h3>Income</h3>
        </div>
        <p className="income-amount">${totalIncome.toLocaleString()}</p>
      </div>
      <div className="summary-card expense-card">
        <div className="card-header">
          <em className="card-icon">↓</em>
          <h3>Expenses</h3>
        </div>
        <p className="expense-amount">${totalExpenses.toLocaleString()}</p>
      </div>
      <div className="summary-card balance-card">
        <div className="card-header">
          <em className="card-icon">◆</em>
          <h3>Balance</h3>
        </div>
        <p className="balance-amount">${balance.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Summary;
