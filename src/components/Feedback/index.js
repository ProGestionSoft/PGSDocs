import React, { useState } from "react";
import styles from './Feedback.module.css';

const feedbackMessages = {
  "😓": "😓 Nous sommes désolés que cette page ne réponde pas à vos attentes. Voulez-vous nous faire des suggestions ?.",
  "😐": "😐 Merci pour votre retour ! Nous continuerons d'améliorer cette page pour mieux répondre à vos besoins. Dites-nous plus sur vos attentes",
  "😍": "😍 Merci beaucoup ! Nous sommes heureux que cette page vous ait été utile. vez-vous des commentaires ?",
};

const Feedback = () => {
  const [selected, setSelected] = useState(null);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedback = (emoji) => {
    setSelected(emoji);
  };

  const handleSubmit = async () => {
    setSubmitted(true);

    // Simulation d'envoi des données (remplace par une API réelle si besoin)
    console.log("Feedback soumis :", { emoji: selected, comment });

     // Ici, tu peux envoyer les données à un serveur via une API REST
    /*
    await fetch("https://api.example.com/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ emoji: selected, comment, page: window.location.pathname }),
    });
    */
  };

  const handleGoBack = () => {
    setSelected(null);
    setComment("");
  };

  return (
    <div className={styles.feedbackContainer}>
      <p className={styles.feedbackTitle}>Cette page vous a-t-elle aidé ?</p>

      {!selected ? (
        <div className={styles.emojiContainer}>
          {["😓", "😐", "😍"].map((emoji) => (
            <span
              key={emoji}
              className={styles.emoji}
              onClick={() => handleFeedback(emoji)}
            >
              {emoji}
            </span>
          ))}
        </div>
      ) : submitted ? (
        <p>Merci pour votre retour !</p>
      ) : (
        <div>
          <p>{feedbackMessages[selected]}</p>

          <textarea
            rows="3"
            placeholder="Laissez un commentaire (facultatif)..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className={styles.feedbackTextarea}
          />

        <div className={styles.ButtonsContainer}>
            <button className={styles.backButton} onClick={handleGoBack}>
              Modifier mon choix
            </button>

            <button className={styles.submitButton} onClick={handleSubmit}>
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
