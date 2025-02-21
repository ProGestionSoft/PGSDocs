import React from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/css/pages.module.css';
import Translate, {translate} from '@docusaurus/Translate';


function IntroCpn({ link, iconSrc, icon, title, description, bgSrc }) {
  return (
    <Link
      to={link}
      className={styles.IntroCard}
      style={{ position: 'relative', color: 'transparent', }}
    >
      <div
        className={styles.IntroBGImg}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(${bgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className={styles.iconContainer}>
        <img src={iconSrc} alt={title} className={styles.IntroIcone} />
      </div>
      <h3><i className={icon}></i> | {title}</h3>
      <p>{description}</p>
    </Link>
  );
}

function IntroSection() {
  return (
    <section className={styles.IntroSection}>
      <h1><i className="fas fa-rocket fa-beat-fade"></i> &nbsp;
        <Translate
          id="Idx-IntroTitle"
          description="Le titre de Intro sur Index"> 
           Apprenez, développez, réussissez
        </Translate>
      </h1>

      <p>
        <Translate
          id="Idx-IntroSubtitle"
          description="Le sous-titre de Intro sur Index">
            Découvrez des guides détaillés pour maîtriser vos outils, intégrer des solutions et atteindre vos objectifs professionnels.
        </Translate>
      </p>

      <div className={styles.IntroContainer}>
        <IntroCpn
          link="/docs/category/compte"
          icon="fas fa-glasses"
          iconSrc="/img/Idx-IntroIcon1.png"
          title={
            translate({
              id: 'Idx-IntroCpnTitle1',
              message: 'Gestion opérationnelle',
              description: 'Titre de IntroCard1',
            })}
          description={
            translate({
              id: 'Idx-IntroCpnDetail1',
              message: 'Cette documentation est conçue pour les utilisateurs cherchant à maîtriser la gestion quotidienne de leurs opérations. Découvrez des guides pratiques sur la gestion des courriels, des ressources humaines, des documents d’entreprise et de la facturation et plus encore.',
              description: 'Detail de IntroCard1',
            })}        
          bgSrc="/img/Idx-IntroBg1.svg"
        />
        <IntroCpn
          link="/docs/category/pour-les-developpeurs"
          icon="fas fa-star"
          iconSrc="./img/Idx-IntroIcon2.png"
          title={
              translate({
                id: 'Idx-IntroCpnTitle2',
                message: 'Développez et intégrez',
                description: 'Titre de IntroCard2',
              })}
          description={
            translate({
              id: 'Idx-IntroCpnDetail2',
              message: 'Accédez à une documentation complète dédiée aux développeurs, vous permettant de connecter des services tiers, d\'explorer nos APIs et d\'intégrer des fonctionnalités avancées à vos solutions existantes. Optimisez vos systèmes grâce à des outils conçus pour la flexibilité et l\'efficacité.',
              description: 'Detail de IntroCard2',
            })} 
          bgSrc="/img/Idx-IntroBg2.svg"
        />
        <IntroCpn
          link="/docs/category/pour-les-candidats"
          icon="fas fa-compass"
          iconSrc="../img/Idx-IntroIcon3.png"
          title={
            translate({
              id: 'Idx-IntroCpnTitle3',
              message: 'Votre prochaine opportunité',
              description: 'Titre de IntroCard3',
            })}
          description={
            translate({
              id: 'Idx-IntroCpnDetail3',
              message: 'Explorez un vaste réseau d\'entreprises proposant des postes variés. Bénéficiez de conseils pour postuler efficacement et mettez toutes les chances de votre côté pour décrocher un emploi qui correspond à vos ambitions.',
              description: 'Detail de IntroCard3',
            })} 
          bgSrc="/img/Idx-IntroBg3.svg"
        />
      </div>
    </section>
  );
}

export default IntroSection;