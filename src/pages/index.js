import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from '@site/src/css/pages.module.css';
import {translate} from '@docusaurus/Translate';

import HeroSection from '@site/src/components/Pages/HeroSection';
import IntroSection from '@site/src/components/Pages/IntroSection';
import UserSection from '@site/src/components/Pages/UserSection';
import DocsSection from '@site/src/components/Pages/DocsSection';
import HelpSection from '@site/src/components/Pages/HelpSection';



export default function HomePage() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={
        translate({
          id: 'Idx-PageTitle',
          message: 'Acceuil',
          description: 'Le Titre de la page Index dans le Head',
        })}
      description={`${siteConfig.tagline}`}>
        
      <HeroSection />

      <main className={styles.mainContent}>
        <IntroSection />
        <UserSection />
        <DocsSection />
        <HelpSection />
      </main>
    </Layout>
  );
}
