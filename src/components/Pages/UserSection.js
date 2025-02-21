import React from 'react';
import styles from '@site/src/css/pages.module.css';
import Translate, {translate} from '@docusaurus/Translate';


function UserCpn({ icon, title, description }) {
  return (
    <div className={styles.UserCard}>
      <h3><i className={icon}></i> - {title}</h3>
      <p>{description}</p>
    </div>
  );
}

function UserSection() {
  return (
    <section className={styles.UserSection}>
      <div className={styles.UserText}>
        <h1>
          <Translate
            id="Idx-UserTitle"
            description="Le titre de User sur Index"> 
            Votre guide vers l’efficacité
          </Translate>
          &nbsp; <i className="fas fa-puzzle-piece"></i>
        </h1>

        <p>
          <Translate
            id="Idx-UserSubtitle"
            description="Le sous-titre de User sur Index">
              Résolvez les défis de gestion au quotidien avec des solutions adaptées à chaque métier.
          </Translate>
        </p>
       
        <UserCpn
          icon="fas fa-folder-open"
          title={
            translate({
              id: 'Idx-UserCpnTitle1',
              message: 'Conçu pour les gestionnaires des PMEs',
              description: 'Titre de UserCard1',
            })}
          description={
            translate({
              id: 'Idx-UserCpnDetail1',
              message: 'Grâce à ses fonctionnalités complètes de gestion des ressources humaines, de suivi des performances, et de gestion des documents, cette documentation permet aux responsables des PME de simplifier et d’optimiser la gestion de leurs employés, du recrutement à la paie, tout en centralisant les données pour une gestion efficace de l’entreprise.',
              description: 'Detail de UserCard1',
            })} 
        />
        <UserCpn
          icon="fas fa-laptop "
          title={
            translate({
              id: 'Idx-UserCpnTitle2',
              message: 'Adapté aux développeurs',
              description: 'Titre de UserCard2',
            })}
          description={
            translate({
              id: 'Idx-UserCpnDetail2',
              message: 'Avec des guides détaillés sur les APIs et les intégrations tierces, cette documentation offre aux développeurs les outils nécessaires pour personnaliser, étendre et connecter facilement les fonctionnalités de la plateforme aux systèmes existants, facilitant ainsi l’intégration et l’adaptation aux besoins techniques spécifiques.',
              description: 'Detail de UserCard2',
            })} 
        />
        <UserCpn
          icon="fas fa-search"
          title={
            translate({
              id: 'Idx-UserCpnTitle3',
              message: 'Dédiée candidats et chercheurs d’emploi',
              description: 'Titre de UserCard3',
            })}
          description={
            translate({
              id: 'Idx-UserCpnDetail3',
              message: 'Cette documentation fournit aux candidats des informations complètes sur le processus de recrutement, allant des tests en ligne à la soumission des candidatures. Elle permet de comprendre comment utiliser les outils pour postuler efficacement et suivre les opportunités professionnelles proposées par les entreprises.',
              description: 'Detail de UserCard3',
            })} 
        />
      </div>

      <div className={styles.UserImgContainer}>
        <img 
          src="/img/Idx-UserImg.png"
          alt={
            translate({
              id: 'Idx-UserImg',
              message: 'Illustration de la gestion d\'entreprise',
              description: 'Illustration de  de User sur Index',
            })}
          className={styles.UserImg}
        />
      </div>
    </section>
  );
}

export default UserSection;