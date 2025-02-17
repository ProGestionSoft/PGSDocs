import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';
import clsx from 'clsx';

const Invoice = () => {
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Non payé');
  const [invoices, setInvoices] = useState([]);
  const [invoicePreview, setInvoicePreview] = useState(null);

  const generateInvoicePreview = (e) => {
    e.preventDefault();
    if (clientName.trim() && amount.trim() && !isNaN(amount)) {
      setInvoicePreview({
        clientName,
        amount,
        date,
        status,
      });
    }
  };

  const addInvoice = () => {
    if (invoicePreview) {
      setInvoices([...invoices, { ...invoicePreview, id: Date.now() }]);
      setClientName('');
      setAmount('');
      setDate('');
      setStatus('Non payé');
      setInvoicePreview(null);
    }
  };

  const updateInvoiceStatus = (id, newStatus) => {
    setInvoices(invoices.map((inv) => (inv.id === id ? { ...inv, status: newStatus } : inv)));
  };

  const totalDue = invoices
    .filter((inv) => inv.status === 'Non payé')
    .reduce((sum, inv) => sum + parseFloat(inv.amount), 0);

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de facture</h2>

      <form onSubmit={generateInvoicePreview} className={styles.formGroup}>
        <div className={styles.formGroup}>
          <label htmlFor="clientName">Nom du client :</label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="amount">Montant (francs CFA) :</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="status">Statut :</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Non payé">Non payé</option>
            <option value="Payé">Payé</option>
          </select>
        </div>
        <button type="submit" className={styles.PgCompBtn}>Voir la facture</button>
      </form>

      {invoicePreview && (
        <div className={styles.preview}>
          <h2>Aperçu</h2>
          <p>
            <strong>Nom du client :</strong> {invoicePreview.clientName}
          </p>
          <p>
            <strong>Montant :</strong> {invoicePreview.amount}  francs CFA
          </p>
          <p>
            <strong>Date :</strong> {invoicePreview.date}
          </p>
          <p>
            <strong>Statut :</strong> {invoicePreview.status}
          </p>
          <button onClick={addInvoice} className={styles.PgCompBtn}>Ajouter à la liste des factures</button>
        </div>
      )}

      <div className={styles.invoiceList}>
        <h2>Liste des factures</h2>
        <ul>
          {invoices.map((inv) => (
            <li key={inv.id}>
              <span
                className={clsx(styles.invName, {
                  [styles.paid]: inv.status === 'Payé',
                  [styles.unpaid]: inv.status === 'Non payé',
                })}
              >
                {inv.date} : {inv.clientName} - {inv.amount} francs CFA ({inv.status})
              </span>
              <select
                value={inv.status}
                onChange={(e) => updateInvoiceStatus(inv.id, e.target.value)}
              >
                <option value="Non payé">Non payé</option>
                <option value="Payé">Payé</option>
              </select>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.inlineResult}>
        <h3>Total à payer : {totalDue.toFixed(0)}  francs CFA</h3>
      </div>
    </div>
  );
};

export default Invoice;
