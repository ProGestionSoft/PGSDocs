import React from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/css/pages.module.css';
import Translate, {translate} from '@docusaurus/Translate';


function DocsCpn({ icon, title, link, description }) {
  return (
    <div className={styles.DocsCard}>
        <div className={styles.DocsCardTitle}>
          <h3><i className={icon}></i> | {title}</h3>
          <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-arrow-right" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
        </a>
        </div>
      <p>{description}</p>
    </div>
  );
}

function DocsSection() {
  return (
    <section className={styles.DocsSection}>
      <h1>
          <Translate
            id="Idx-DocsTitle"
            description="Le titre de Docs sur Index"> 
            Lire la documentation
          </Translate>
          &nbsp; <i className="fas fa-bookmark fa-flip"></i>
        </h1>

      <div className={styles.DocsContainer}>
        <div>
          <DocsCpn
            icon="fas fa-sign-in-alt"
            title={
              translate({
                id: 'Idx-DocsCpnTitle1',
                message: 'Authentification',
                description: 'Titre de DocsCard1',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail1',
                message: 'Créez un compte ou connectez-vous. L\'inscription est simple et rapide.',
                description: 'Detail de DocsCard1',
              })} 
            link="/docs/category/authentification"
          />
          <DocsCpn
            icon="fas fa-user-plus"
            title={
              translate({
                id: 'Idx-DocsCpnTitle2',
                message: 'Ajouter un collaborateur',
                description: 'Titre de DocsCard2',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail2',
                message: 'Invitez facilement des membres de votre équipe sur Pro Gestion Soft pour collaborer et partager les responsabilités. Vous pouvez assigner des rôles à chaque collaborateur, leur donnant accès aux sections dont ils ont besoin pour contribuer efficacement.',
                description: 'Detail de DocsCard2',
              })} 
            link=""
          />
          <DocsCpn
            icon="fas fa-sign-in-alt"
            title={
              translate({
                id: 'Idx-DocsCpnTitle3',
                message: 'Supprimer votre compte',
                description: 'Titre de DocsCard3',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail3',
                message: 'Si vous décidez de ne plus utiliser Pro Gestion Soft, vous pouvez supprimer définitivement votre compte. Cette action est irréversible et supprimera toutes vos données de notre système. Assurez-vous d\'avoir sauvegardé les informations importantes avant de procéder.',
                description: 'Detail de DocsCard3',
              })} 
            link=""
          />
        </div>

        <div>
          <DocsCpn
            icon="fas fa-check-circle"
            title={
              translate({
                id: 'Idx-DocsCpnTitle4',
                message: 'Vérifier votre compte',
                description: 'Titre de DocsCard4',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail4',
                message: 'Pour garantir la sécurité de votre compte, nous vous envoyons un e-mail de vérification après l’inscription. Cliquez sur le lien dans cet e-mail pour vérifier votre adresse. Cette étape est essentielle pour activer votre compte et vous assurer un accès sécurisé.',
                description: 'Detail de DocsCard4',
              })} 
            link=""
          />
          <DocsCpn
            icon="fas fa-envelope"
            title={
              translate({
                id: 'Idx-DocsCpnTitle5',
                message: 'Ajouter un courriel',
                description: 'Titre de DocsCard5',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail5',
                message: 'Pour renforcer la sécurité et la communication, vous pouvez ajouter une adresse e-mail supplémentaire à votre compte. Cette fonctionnalité vous permet de recevoir des notifications importantes et d’améliorer la récupération de compte en cas de besoin.',
                description: 'Detail de DocsCard5',
              })} 
            link=""
          />
          <DocsCpn
            icon="fas fa-file-alt"
            title={
              translate({
                id: 'Idx-DocsCpnTitle6',
                message: 'Gérer les candidatures',
                description: 'Titre de DocsCard6',
              })}
            description={
              translate({
                id: 'Idx-DocsCpnDetail6',
                message: 'Simplifiez votre processus de recrutement en suivant et en gérant les candidatures directement sur Pro Gestion Soft. Publiez des offres, évaluez les candidats, et suivez chaque étape du processus de recrutement. Accédez aux CV et aux notes d’évaluation pour prendre des décisions éclairées.',
                description: 'Detail de DocsCard6',
              })} 
            link=""
          />
        </div>
      </div>

      <Link
        className="button button--link button--lg"
        href="/docs/intro">
        <Translate
            id="Idx-DocsLink"
            description="Le lien Lire plu de Docs"> 
            Lire plus
          </Translate>
          &nbsp; <i className="fas fa-arrow-right"></i>
      </Link>
    </section>
  );
}

export default DocsSection;