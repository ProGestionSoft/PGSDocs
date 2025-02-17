import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const questions = [
  {
    id: 1,
    question: 'Quelle est la capitale du Bénin ?',
    options: ['Porto-Novo', 'Dassa-Zounmè', 'Cotonou', 'Lokossa'],
    correctAnswer: 'Porto-Novo',
  },
  {
    id: 2,
    question: 'Quelle est la langue dominante au Bénin ?',
    options: ['Sètô', 'Fon', 'Yoruba', 'Adja'],
    correctAnswer: 'Fon',
  },
  {
    id: 3,
    question: 'Combien font 2 + 2 ?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
];

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (questionId, selectedAnswer) => {
    setAnswers({ ...answers, [questionId]: selectedAnswer });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const score = questions.reduce((score, question) => {
    if (answers[question.id] === question.correctAnswer) {
      score += 1;
    }
    return score;
  }, 0);

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de questionnaire</h2>

      <div className={styles.formGroup}>
        {questions.map((question) => (
          <div key={question.id} className={styles.question}>
            <p>{question.question}</p>
            
            <div className={styles.options}>
              {question.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option}
                    checked={answers[question.id] === option}
                    onChange={() => handleChange(question.id, option)}
                    disabled={isSubmitted}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleSubmit} disabled={isSubmitted} className={styles.PgCompBtn}>
        Soumettre le test
      </button>

      {isSubmitted && (
        <div className={styles.inlineResult}>
          <h3>Votre note : {score} / {questions.length}</h3>
        </div>
      )}
    </div>
  );
};

export default Quiz;
