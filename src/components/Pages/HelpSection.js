import React from 'react';
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from '@site/src/css/pages.module.css';
import { useState } from 'react';
import Translate, {translate} from '@docusaurus/Translate';


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
        link: "tel:+2290152535380",
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

export default HelpSection;