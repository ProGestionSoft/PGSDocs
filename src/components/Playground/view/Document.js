import React, { useState } from 'react';
import styles from '@site/src/components/Playground/view/0LC.module.css';

const Document = () => {
  const [documents, setDocuments] = useState([]);
  const [currentFile, setCurrentFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCurrentFile(file);
      const objectUrl = URL.createObjectURL(file);
      setFilePreview(objectUrl);
    }
  };

  const handleUpload = () => {
    if (currentFile) {
      setDocuments([...documents, currentFile]);
      setCurrentFile(null);
      setFilePreview(null);
    } else {
      alert("Veuillez sélectionner un fichier à téléverser.");
    }
  };

  const handleDelete = (file) => {
    setDocuments(documents.filter((document) => document !== file));
  };

  return (
    <div className={styles.PgCompCont}>
      <h2>Simulateur de documents</h2>

      <div className={styles.formGroup}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".pdf, .doc, .docx, .jpg, .png"
        />
        {filePreview && (
          <div className={styles.Preview}>
            <h2>Aperçu</h2>
            <div className={styles.preview}>
              {currentFile.type.startsWith('image/') ? (
                <img
                  src={filePreview}
                  alt="aperçu" />
              ) : (
                <p>Aperçu du fichier non disponible</p>
              )}
            </div>
          </div>
        )}
        <button onClick={handleUpload} disabled={!currentFile} className={styles.PgCompBtn}>
          Télécharger le document
        </button>
      </div>

      <div className={styles.uploadedDocuments}>
        <h2>Documents téléchargés</h2>
        <ul>
          {documents.map((file, index) => (
            <li key={index} className={styles.documentItem}>
              <span>{file.name}</span>
              <button className={styles.deleteBtn} onClick={() => handleDelete(file)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Document;
