import React from "react";
import Link from '@docusaurus/Link';
import styles from "./APICard.module.css";

const APICard = ({ icon, title, description, link }) => {
  return (
    <Link
    to={link}
    className={styles.CardContainer}>
      <div className={styles.CardContainerAA}>
        <h3><i className={icon}></i> {title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export const APICardList = ({ cards }) => {
  return (
    <div className={styles.CardGrid}>
      {cards.map((card, index) => (
        <APICard key={index} {...card} />
      ))}
    </div>
  );
};

export default APICard;
