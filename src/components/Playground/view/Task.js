import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';
import clsx from 'clsx';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [statusFilter, setStatusFilter] = useState('Toutes');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, status: 'En attente' }]);
      setNewTask('');
    }
  };

  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    statusFilter === 'Toutes'
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de tâche</h2>
      <div className={styles.taskInput}>
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask} className={styles.PgCompBtn}>Ajouter</button>
      </div>

      <div className={styles.filter}>
        <label>Filtrer par statut :</label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="Toutes">Toutes</option>
          <option value="En attente">En attente</option>
          <option value="Terminée">Terminée</option>
        </select>
      </div>

      <ul className={styles.taskList}>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            <span
              className={clsx(styles.taskName, {
                [styles.pending]: task.status === 'En attente',
                [styles.completed]: task.status === 'Terminée',
              })}
            >
              {task.name}
            </span>

            <select
              value={task.status}
              onChange={(e) => updateTaskStatus(task.id, e.target.value)}
            >
              <option value="En attente">En attente</option>
              <option value="Terminée">Terminée</option>
            </select>
            <button className={styles.deleteBtn} onClick={() => deleteTask(task.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
