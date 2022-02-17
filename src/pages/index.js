import React, { useEffect } from 'react';
import WithOutAuth from '../HOC/withOutAuth';
import Image from 'next/image'
import SectionText from '../components/section/SectionText/SectionText'
import SectionTextImageRight from '../components/section/SectionTextImage/SectionTextImageRight/SectionTextImageRight'
import SectionTextImageLeft from '../components/section/SectionTextImage/SectionTextImageLeft/SectionTextImageLeft'
import Ecran1Image from "../../public/ecran1.png"
import Ecran2Image from "../../public/ecran2.png"
import Ecran3Image from "../../public/ecran3.png"
import Ecran4Image from "../../public/ecran4.png"
import NavAccount from '../components/navs/NavAccount/NavAccount';
import { useRouter } from "next/router";

function Home() {
  /*const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
        router.push("/account");
    }
  }, []);*/

  return (
    <div className="container">
      <main>
        <NavAccount type="Home"></NavAccount>
        <SectionText/>
        <SectionTextImageRight  imageLink = {Ecran1Image.src} title="Regardez Netflix sur votre TV" description="Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et bien plus."/>
        <SectionTextImageLeft  imageLink = {Ecran2Image.src} title="Téléchargez vos séries préférées pour les regarder hors connexion." description="Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder."/>
        <SectionTextImageRight  imageLink = {Ecran3Image.src} title="Où que vous soyez." description="Regardez des films et séries TV en accès illimité sur votre TV, smartphone, tablette et ordinateur, tout compris."/>
        <SectionTextImageLeft  imageLink = {Ecran4Image.src} title="Créez des profils pour les enfants." description="Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement."/>
      </main>
    </div>
  )
}

export default WithOutAuth(Home);