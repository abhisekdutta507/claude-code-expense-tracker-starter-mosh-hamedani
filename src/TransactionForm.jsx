import { useState } from 'react'
import { CATEGORIES } from './CATEGORIES.js'

function TransactionForm({ onAdd }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("food");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    const newErrors = {};
    if (!description.trim()) newErrors.description = "Description is required.";
    if (!amount) newErrors.amount = "Amount is required.";
    else if (isNaN(parsedAmount) || parsedAmount <= 0) newErrors.amount = "Amount must be a positive number.";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      description,
      amount: parsedAmount,
      type,
      category,
      date: new Date().toISOString().split('T')[0],
    });

    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("food");
    setErrors({});
  };

  const errorList = Object.entries(errors).filter(([, v]) => v);

  return (
    <div className="add-transaction">
      <h2>Add Transaction</h2>
      {errorList.length > 0 && (
        <div className="form-errors">
          {errorList.map(([field, msg]) => (
            <div key={field} className="form-error-item">
              <span className="form-error-dot" />
              {msg}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="Description"
            value={description}
            className={errors.description ? 'input-error' : ''}
            onChange={(e) => { setDescription(e.target.value); setErrors(prev => ({ ...prev, description: undefined })); }}
          />
        </div>
        <div className="field">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            className={errors.amount ? 'input-error' : ''}
            onChange={(e) => { setAmount(e.target.value); setErrors(prev => ({ ...prev, amount: undefined })); }}
            min="0.01"
            step="0.01"
          />
        </div>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;
