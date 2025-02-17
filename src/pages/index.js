import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import styles from '@site/src/css/pages.module.css';
import { useState } from 'react';
import Translate, {translate} from '@docusaurus/Translate';


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
        
      <Header />

      <main className={styles.mainContent}>
        <IntroSection />
        <UserSection />
        <DocsSection />
        <HelpSection />
      </main>
    </Layout>
  );
}


function Header() {
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
          className={styles.HeroImage}
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


function HelpCpn({ icon, title, description, link, linkText,}) {
  return (
    <div className={styles.HelpCard}>
      <h3><i className={icon}></i> {title}</h3>
      <p>{description}</p>
      <Link href={link} target="_blank" rel="noopener noreferrer"><i className="fas fa-arrow-circle-right"></i> {linkText}</Link> 
    </div>
  );
}

function HelpSection() {
  const supportData = {
    technical: [
      {
        icon: "fas fa-tools",
        title: 
          <Translate
            id="Idx-HelpCpnTitleTicket"
            description="Titre de HelpCard Ticket"> 
            Ticket technique
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailTicket"
            description="Detail de HelpCard Ticket"> 
            Vous pouvez créer un ticket si vous disposez déjà d'un compte. C'est un excellent moyen de suivre vos requêtes de manière formelle.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkTicket"
          description="Lien de HelpCard Ticket"> 
          Créer un ticket
        </Translate>,
        link: "https://app.progestionsoft.com/support",
      },
      {
        icon: "fas fa-file-signature",
        title: 
          <Translate
            id="Idx-HelpCpnTitleForm"
            description="Titre de HelpCard Formulaire"> 
            Formulaire d'aide
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailForm"
            description="Detail de HelpCard Formulaire"> 
            Remplissez notre formulaire de contact pour nous poser toutes vos questions.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkForm"
          description="Lien de HelpCard Formulaire"> 
          Remplir le formulaire
        </Translate>,
        link: "https://progestionsoft.com",
      },
    ],
    direct: [
      {
        icon: "fas fa-envelope-open",
        title: 
          <Translate
            id="Idx-HelpCpnTitleMail"
            description="Titre de HelpCard Email"> 
            Email
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailMail"
            description="Detail de HelpCard Email"> 
            Contactez notre équipe de support via support@progestionsoft.com pour obtenir des réponses à vos questions.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkMail"
          description="Lien de HelpCard Email"> 
          Envoyer un email
        </Translate>,
        link: "mailto:support@progestionsoft.com?subject=Demande d'assistance sur PRO GESTION SOFT&body=Bonjour !%0AJe m'appelle Votre prénom et nom et je vous contacte suite à un souci que je rencontre sur votre plateforme PRO GESTION SOFT.%0AVoici ma préoccupation :%0A- Détaillez le souci que vous rencontrez.",
      },
      {
        icon: "fas fa-phone",
        title: 
          <Translate
            id="Idx-HelpCpnTitleCall"
            description="Titre de HelpCard Appel"> 
            Appel téléphone
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailCall"
            description="Detail de HelpCard Appel"> 
            Appelez-nous directement au 2290152535380 pour une assistance en temps réel.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkCall"
          description="Lien de HelpCard Appel"> 
          Appeler le support
        </Translate>,
        link: "tel:+22952535380",
      },
    ],
    chat: [
      {
        icon: "fab fa-whatsapp",
        title: 
          <Translate
            id="Idx-HelpCpnTitleWapp"
            description="Titre de HelpCard WhatsApp"> 
            WhatsApp
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailWapp"
            description="Detail de HelpCard WhatsApp"> 
            Contactez via WhatsApp pour une assiatnce plus fluide.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkWapp"
          description="Lien de HelpCard WhatsApp"> 
          Ouvrir WhatsApp
        </Translate>,
        link: "https://api.whatsapp.com/send?phone=+22952535380&text=Bonjour !%0AJe m'appelle *Votre prénom et nom* et je vous contacte suite à un souci que je rencontre sur votre plateforme PRO GESTION SOFT.%0AVoici ma préoccupation :%0A- `Détaillez le souci que vous rencontrez.`",
      },
      {
        icon: "fab fa-telegram-plane",
        title: 
          <Translate
            id="Idx-HelpCpnTitleTgram"
            description="Titre de HelpCard Telegram"> 
            Telegram
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetaileTgram"
            description="Detail de HelpCard Telegram"> 
            Contactez via Telegram pour une assiatnce plus fluide.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkTgram"
          description="Lien de HelpCard Telegram"> 
          Ouvrir Telegram
        </Translate>,
        link: "https://t.me/pgs_sarl?text=Bonjour !%0AJe m'appelle **Votre prénom et nom** et je vous contacte suite à un souci que je rencontre sur votre plateforme PRO GESTION SOFT.%0AVoici ma préoccupation :%0A- `Détaillez le souci que vous rencontrez.`",
      },
    ],
    community: [
      {
        icon: "fas fa-comment-dots",
        title: 
          <Translate
            id="Idx-HelpCpnTitleForum"
            description="Titre de HelpCard Forum"> 
            Forum
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailForum"
            description="Detail de HelpCard Forum"> 
            Poser votre préoccupation à la communauté et trouvez une approche de solution très rapidement.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkForum"
          description="Lien de HelpCard Forum"> 
          Accéder au forum
        </Translate>,
        link: "https://progestionsoft.com/forum",
      },
      {
        icon: "fab fa-discord",
        title: 
          <Translate
            id="Idx-HelpCpnTitleDcord"
            description="Titre de HelpCard Discord"> 
            Discord
          </Translate>,
        description: 
          <Translate
            id="Idx-HelpCpnDetailDcord"
            description="Detail de HelpCard Discord"> 
            Rejoignez notre serveur Discord pour discuter avec d'autres utilisateurs et échanger des astuces.
          </Translate>,
        linkText: 
        <Translate
          id="Idx-HelpCpnLinkDcord"
          description="Lien de HelpCard Discord"> 
          Rejoindre Discord
        </Translate>,
        link: "https://discord.gg/ygy6dv6C",
      },
    ],
  };

  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className={styles.HelpSection}>
      <div className={styles.HelpImgContainer}>
        <img
          src="/img/Idx-HelpImg.png"
          alt={
            translate({
              id: 'Idx-HelpImg',
              message: 'Illustration de la gestion d\'entreprise',
              description: 'Illustration de  de Help sur Index',
            })}
          className={styles.HelpImg}
        />
      </div>

      <div className={styles.HelpText}>
        <h1><i className="fas fa-headset"></i> &nbsp;
        <Translate
          id="Idx-HelpTitle"
          description="Le titre de Help sur Index"> 
           Comment pouvons-nous vous aider ?
        </Translate>
      </h1>

      <p>
        <Translate
          id="Idx-HelpSubtitle"
          description="Le sous-titre de Help sur Index">
            Explorez nos options de support pour obtenir l'assistance nécessaire.
        </Translate>
      </p>

        <Tabs defaultValue="all" values={[
          { label:  <Translate
                      id="Idx-HelpTabAll"
                      description="Le titre de l'onglet Tous les canaux">
                      Tous les canaux
                    </Translate>, value: 'all' },
          { label:  <Translate
                      id="Idx-HelpTabTec"
                      description="Le titre de l'onglet Support technique">
                      Support technique
                    </Translate>, value: 'technical' },
          { label:  <Translate
                      id="Idx-HelpTabDirect"
                      description="Le titre de l'onglet Contact direct">
                      Contact direct
                    </Translate>, value: 'direct' },
          { label:  <Translate
                      id="Idx-HelpTabChat"
                      description="Le titre de l'onglet Chat social">
                      Chat social
                    </Translate>, value: 'chat' },
          { label:  <Translate
                      id="Idx-HelpTabComty"
                      description="Le titre de l'onglet Communauté">
                      Communauté
                    </Translate>, value: 'community' },
          ]}>
          <TabItem value="all">
            <div className={styles.HelpContCard}>
              {Object.values(supportData).flat().slice(0, showMore ? undefined : 3).map((item, index) => (
                <HelpCpn
                  key={index}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  linkText={item.linkText}
                  icon={item.icon}
                />
              ))}
            </div>
            {Object.values(supportData).flat().length > 3 && (
              <button className={styles.ToggleButton} onClick={handleToggle}>
                {showMore ?
                  (<Translate
                    id="Idx-HelpBtnLess"
                    description="Le bouton Voir moins de HelpSection"> 
                    Voir moins
                  </Translate>) :
                  (<Translate
                    id="Idx-HelpBtnMore"
                    description="Le bouton Voir plus de HelpSection"> 
                    Voir plus
                  </Translate>)}
              </button>
            )}
          </TabItem>

          {Object.entries(supportData).map(([key, items]) => (
            <TabItem value={key} key={key}>
              <div className={styles.HelpContCard}>
                {items.slice(0, showMore ? undefined : 3).map((item, index) => (
                  <HelpCpn
                    key={index}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    linkText={item.linkText}
                    icon={item.icon}
                  />
                ))}
              </div>
              {items.length > 3 && (
                <button className={styles.ToggleButton} onClick={handleToggle}>
                  {showMore ?
                  (<Translate
                    id="Idx-HelpBtnLess"
                    description="Le bouton Voir moins de HelpSection"> 
                    Voir moins
                  </Translate>) :
                  (<Translate
                    id="Idx-HelpBtnMore"
                    description="Le bouton Voir plus de HelpSection"> 
                    Voir plus
                  </Translate>)}
                </button>
              )}
            </TabItem>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
