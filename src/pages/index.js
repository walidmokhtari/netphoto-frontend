import React, { useEffect } from 'react';
import Image from 'next/image'
import SectionText from '../components/section/SectionText/SectionText'
import SectionTextImage from '../components/section/SectionTextImage/SectionTextImage'
import TvImage from "../../public/tv.png"
import NavAccount from '../components/navs/NavAccount/NavAccount';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token != null) {
        router.push("/account");
    }
  }, []);

  return (
    <div className="container">
      <main >
        <NavAccount type="Home"></NavAccount>
        <SectionText/>
        <SectionTextImage  imageLink = {TvImage.src} videoLink = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"/>
        <SectionTextImage  imageLink = {TvImage.src} />
        <SectionTextImage  imageLink = {TvImage.src} />
        <SectionTextImage  imageLink = {TvImage.src}/>
      </main>
    </div>
  )
}
