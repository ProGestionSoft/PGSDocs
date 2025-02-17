import React, { useState, useEffect } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Employee = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Alice', presentDays: 20, absentDays: 2 },
    { id: 2, name: 'Bob', presentDays: 18, absentDays: 4 },
    { id: 3, name: 'Charlie', presentDays: 22, absentDays: 0 },
  ]);
  const [newEmployee, setNewEmployee] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [bestEmployee, setBestEmployee] = useState(null);

  useEffect(() => {
    if (employees.length > 0) {
      const best = employees.reduce((prev, current) => {
        const prevRatio = prev.presentDays / (prev.presentDays + prev.absentDays || 1);
        const currRatio = current.presentDays / (current.presentDays + current.absentDays || 1);
        return currRatio > prevRatio ? current : prev;
      });
      setBestEmployee(best);
    }
  }, [employees]);

  useEffect(() => {
    if (selectedEmployee) {
      const updatedEmployee = employees.find((emp) => emp.id === selectedEmployee.id);
      setSelectedEmployee(updatedEmployee);
    }
  }, [employees, selectedEmployee]);

  const addEmployee = () => {
    if (newEmployee.trim()) {
      setEmployees([
        ...employees,
        { id: Date.now(), name: newEmployee, presentDays: 0, absentDays: 0 },
      ]);
      setNewEmployee('');
    }
  };

  const updateAttendance = (id, type) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              presentDays: type === 'present' ? emp.presentDays + 1 : emp.presentDays,
              absentDays: type === 'absent' ? emp.absentDays + 1 : emp.absentDays,
            }
          : emp
      )
    );
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur Gesion employés</h2>

      <div className={styles.addEmployee}>
        <input
          type="text"
          placeholder="Entrez le nom de l'employé"
          value={newEmployee}
          onChange={(e) => setNewEmployee(e.target.value)}
        />
        <button onClick={addEmployee} className={styles.PgCompBtn}>Ajouter l'employé</button>
      </div>

      <div className={styles.employeeList}>
        <h2>Liste des employés</h2>
        <ul>
          {employees.map((emp) => (
            <li key={emp.id}>
              <span onClick={() => setSelectedEmployee(emp)}>{emp.name}</span>
              <div className={styles.attendanceActions}>
                <button onClick={() => updateAttendance(emp.id, 'present')}>+ Présent</button>
                <button onClick={() => updateAttendance(emp.id, 'absent')}>+ Absent</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {selectedEmployee && (
        <div className={styles.preview}>
          <h2>Aperçu de {selectedEmployee.name}</h2>
          <p>Jours présents : {selectedEmployee.presentDays}</p>
          <p>Jours absents : {selectedEmployee.absentDays}</p>
          <p>Total des jours : {selectedEmployee.presentDays + selectedEmployee.absentDays}</p>
        </div>
      )}

      {bestEmployee && (
        <div className={styles.employeeMessage}>
          <h2>🏆 Meilleur employé : {bestEmployee.name}</h2>
          <p>
            Félicitations {bestEmployee.name} ! Vous avez un total de {bestEmployee.presentDays}{' '}
            jours de présence contre {bestEmployee.absentDays} jours d'absence, atteignant un
            ratio de performance de{' '}
            {(
              (bestEmployee.presentDays /
                (bestEmployee.presentDays + bestEmployee.absentDays || 1)) *
              100
            ).toFixed(2)}
            %.
          </p>
        </div>
      )}
    </div>
  );
};

export default Employee;
