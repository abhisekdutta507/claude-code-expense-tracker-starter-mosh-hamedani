import { useMemo } from 'react'

function Summary({ transactions }) {
  const { totalIncome, totalExpenses, balance } = useMemo(() => {
    const { totalIncome, totalExpenses } = transactions.reduce(
      (acc, t) => {
        if (t.type === 'income') acc.totalIncome += t.amount;
        else acc.totalExpenses += t.amount;
        return acc;
      },
      { totalIncome: 0, totalExpenses: 0 }
    );
    return { totalIncome, totalExpenses, balance: totalIncome - totalExpenses };
  }, [transactions]);

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
