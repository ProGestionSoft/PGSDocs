import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Payslip = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [basicSalary, setBasicSalary] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [payslipPreview, setPayslipPreview] = useState(null);

  const calculatePayslip = (e) => {
    e.preventDefault();
    const grossSalary = parseFloat(basicSalary);
    const tax = grossSalary * (parseFloat(taxRate) / 100);
    const netSalary = grossSalary - tax;

    setPayslipPreview({
      employeeName,
      grossSalary,
      tax,
      netSalary,
    });
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de salaire</h2>
      <form onSubmit={calculatePayslip}>
        <div className={styles.formGroup}>
          <label htmlFor="employeeName">Nom de l'employé :</label>
          <input
            type="text"
            id="employeeName"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="basicSalary">Salaire de Base (francs CFA) :</label>
          <input
            type="number"
            id="basicSalary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="taxRate">Taux d'Imposition (%) :</label>
          <input
            type="number"
            id="taxRate"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.PgCompBtn}>Générer la fiche</button>
      </form>

      {payslipPreview && (
        <div className={styles.preview}>
          <h2>Aperçu</h2>
          <p>
            <strong>Nom de l'employé :</strong> {payslipPreview.employeeName}
          </p>
          <p>
            <strong>Salaire Brut :</strong> {payslipPreview.grossSalary.toFixed(2)}  francs CFA
          </p>
          <p>
            <strong>Impôts :</strong> {payslipPreview.tax.toFixed(2)}  francs CFA
          </p>
          <p>
            <strong>Salaire Net :</strong> {payslipPreview.netSalary.toFixed(2)}  francs CFA
          </p>
        </div>
      )}
    </div>
  );
};

export default Payslip;
