import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from '@site/src/css/pages.module.css';
import Translate, {translate} from '@docusaurus/Translate';

function HeroSection() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.HeroBanner)}>
      <div className={styles.HeroContainer}>
        <img 
          src="/img/Idx-HeroImg.png"
          alt={
            translate({
              id: 'Idx-HeroImg',
              message: 'Illustration de la gestion d\'entreprise',
              description: 'Illustration de  de Hero sur Index',
            })}
          className={styles.HeroImg}
        />

        <div className={styles.HeroText}>
          <h1 className={styles.HeroTitle}>
          <Translate
              id= "Idx-HeroTitle"
              description= "Le titre de Hero sur Index"
              values= {{
                term1: <span className={styles.HeroTitleVar}> <Translate id="term1">Connectez</Translate></span>,
                term2: <span className={styles.HeroTitleVar}> <Translate id="term2">en toute simplicité</Translate></span>,
              }}>
                
              {'{term1} gestion, créativité et ambitions {term2}.'}
          </Translate>
          </h1>

          <p className={styles.HeroSubtitle}>
            <Translate
              id="Idx-HeroSubtitle"
              description="Le sous-titre de Hero sur Index">
                Organisez vos priorités, optimisez vos actions et concevez des projets marquants pour avancer dans votre carrière avec clarté.
            </Translate>
          </p>

          <div className={styles.HeroBtns}>
          <Link
              className="button button--secondary button--lg"
              href="/docs/intro">
                <Translate
                  id="Idx-IntroBtn"
                  description="Le bouton Introduction">
                    Introduction
                </Translate> &nbsp;<i className="fas fa-book"></i>
            </Link>
            
            <Link
              className="button button--primary button--lg"
              href="https://app.progestionsoft.com">
                <Translate
                  id="Idx-TryBtn"
                  description="Le bouton Essayez gratuitement">
                    Essayer gratuitement
                </Translate> &nbsp;<i className="fas fa-bolt"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;