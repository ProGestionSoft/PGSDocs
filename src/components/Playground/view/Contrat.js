import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Contrat = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [position, setPosition] = useState('');
  const [startDate, setStartDate] = useState('');
  const [salary, setSalary] = useState('');
  const [contractPreview, setContractPreview] = useState(null);

  const generateContract = (e) => {
    e.preventDefault();
    setContractPreview({
      employeeName,
      position,
      startDate,
      salary,
    });
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de Contrat</h2>
      <form onSubmit={generateContract}>
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
          <label htmlFor="position">Poste :</label>
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="startDate">Date de début :</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="salary">Salaire (francs CFA) :</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.PgCompBtn}>Générer le Contrat</button>
      </form>

      {contractPreview && (
        <div className={styles.preview}>
          <h2>Aperçu</h2>
          <p>
            <strong>Nom de l'employé :</strong> {contractPreview.employeeName}
          </p>
          <p>
            <strong>Poste :</strong> {contractPreview.position}
          </p>
          <p>
            <strong>Date de début :</strong> {contractPreview.startDate}
          </p>
          <p>
            <strong>Salaire mensuel :</strong> {contractPreview.salary} francs CFA
          </p>
          <p>
            Ce contrat confirme que <strong>{contractPreview.employeeName}</strong> sera employé(e) en tant que <strong>{contractPreview.position}</strong>, à partir du <strong>{contractPreview.startDate}</strong>, avec un salaire de <strong>{contractPreview.salary} francs CFA</strong> par mois.
          </p>
        </div>
      )}
    </div>
  );
};

export default Contrat;
