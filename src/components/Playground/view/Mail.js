import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Mail = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [emailPreview, setEmailPreview] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setEmailPreview({
      recipient,
      subject,
      message,
    });
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de courriel</h2>
      <form onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="recipient">Destinataire :</label>
          <input
            type="email"
            id="recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="exemple@domaine.com"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Objet :</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message ici..."
          />
        </div>
        <button type="submit" className={styles.PgCompBtn}>Envoyer l'email</button>
      </form>

      {emailPreview && (
        <div className={styles.preview}>
          <h2>Aperçu</h2>
          <p>
            <strong>À :</strong> {emailPreview.recipient}
          </p>
          <p>
            <strong>Objet :</strong> {emailPreview.subject}
          </p>
          <p>
            <strong>Message :</strong>
          </p>
          <p>{emailPreview.message}</p>
        </div>
      )}
    </div>
  );
};

export default Mail;
