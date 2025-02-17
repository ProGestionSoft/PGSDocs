import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Expense = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: 'Alimentation',
  });
  const [expenses, setExpenses] = useState([]);
  const [total, setTotal] = useState(0);

  const categories = ['Alimentation', 'Transport', 'Divertissement', 'Factures', 'Autre'];

  const handleAddExpense = () => {
    if (expense.description && expense.amount && !isNaN(expense.amount)) {
      const newExpense = { ...expense, id: Date.now() };
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setTotal(newExpenses.reduce((sum, item) => sum + parseFloat(item.amount), 0));
      setExpense({ description: '', amount: '', category: 'Alimentation' });
    } else {
      alert('Veuillez entrer des détails valides pour la dépense.');
    }
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de dépenses</h2>

      <div className={styles.expenseInput}>
        <input
          type="text"
          placeholder="Description"
          value={expense.description}
          onChange={(e) => setExpense({ ...expense, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Montant"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <select
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleAddExpense} className={styles.PgCompBtn}>Ajouter la dépense</button>
      </div>

      <div className={styles.expenseList}>
        <h2>Liste des dépenses</h2>
        <ul>
          {expenses.map((exp) => (
            <li key={exp.id}>
              <span>
                {exp.description} : {exp.amount} francs CFA ({exp.category})
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.inlineResult}>
        <h3>Total des dépenses : {total.toFixed(0)} francs CFA</h3>
      </div>
    </div>
  );
};

export default Expense;
