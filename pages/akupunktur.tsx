import Head from "next/head";
// COMPONENTS
import { Footer } from "../components/Footer.component";
import { Hero } from "../components/Hero.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { PhotoBox } from "../components/PhotoBox.component";
// DATA
import data from "../api/acupuncture.json";
// TYPES
import type { NextPage } from "next";

const Akupunktur: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Akupunktur | Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        img="acupuncture"
        title={data.heroTitle}
        text={data.heroText}
        center
        underline
      />
      <PhotoBox
        title={data.photoTitle}
        text={data.photoText}
        img=""
        underline
      />
      <InfoBox headline={data.symptomData.headline} list={data.list} />
      <PreFooter site="Akupunktur" />
      <Footer />
    </div>
  );
};

export default Akupunktur;