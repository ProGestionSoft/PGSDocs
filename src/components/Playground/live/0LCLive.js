import React, { useState } from 'react';

import Invoice from '@site/src/components/Playground/live/Invoice.mdx';
import Expense from '@site/src/components/Playground/live/Expense.mdx';
import Payslip from '@site/src/components/Playground/live/Payslip.mdx';
import Contrat from '@site/src/components/Playground/live/Contrat.mdx';
import Employee from '@site/src/components/Playground/live/Employee.mdx';
import Mail from '@site/src/components/Playground/live/Mail.mdx';
import Document from '@site/src/components/Playground/live/Document.mdx';
import Task from '@site/src/components/Playground/live/Task.mdx';
import Quiz from '@site/src/components/Playground/live/Quiz.mdx';
import Dashboard from '@site/src/components/Playground/live/Dashboard.mdx';

const LiveSelector = () => {
  const [selectedComponent, setSelectedComponent] = useState('none');

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  let ComponentToRender;
  switch (selectedComponent) {
    case 'Invoice':
      ComponentToRender = Invoice;
      break;
    case 'Expense':
      ComponentToRender = Expense;
      break;
    case 'Payslip':
      ComponentToRender = Payslip;
      break;
    case 'Contrat':
      ComponentToRender = Contrat;
      break;
    case 'Employee':
      ComponentToRender = Employee;
      break;
    case 'Mail':
      ComponentToRender = Mail;
      break;
    case 'Document':
      ComponentToRender = Document;
      break;
    case 'Task':
      ComponentToRender = Task;
      break;
    case 'Quiz':
      ComponentToRender = Quiz;
      break;
    case 'Dashboard':
        ComponentToRender = Dashboard;
        break;
    case 'none':
    default:
      ComponentToRender = null;
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <select
        onChange={handleChange}
        value={selectedComponent}
        style={{
          marginBottom: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      >
        <option value="none">-- Selectionner --</option>
        <option value="Invoice">Facture</option>
        <option value="Expense">Dépenses</option>
        <option value="Payslip">Fiche de paie</option>
        <option value="Contrat">Contrat</option>
        <option value="Employee">Employé</option>
        <option value="Mail">Couriel</option>
        <option value="Document">Importer document</option>
        <option value="Task">Tâches</option>
        <option value="Quiz">Question à choix multiple</option>
        <option value="Dashboard">Tableau de bord</option>
      </select>

      <div>
        {ComponentToRender ? <ComponentToRender /> : <p>Aucun simulateur sélectionné.</p>}
      </div>
    </div>
  );
};

export default LiveSelector;
