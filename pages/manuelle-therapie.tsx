import Head from "next/head";
// DATA
import data from "../api/manualTherapie.json";
import { Footer } from "../components/Footer.component";
// COMPONENTS
import { Hero } from "../components/Hero.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
// TYPES
import type { NextPage } from "next";

const ManuelleTherapie: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Manuelle Therapie | Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        img="manual"
        title={data.heroTitle}
        text={data.heroText}
        center
        underline
      />
      <InfoBox headline={data.symptomTitle} list={data.symptomList} />
      <PreFooter site="Manuelle Therapie" />
      <Footer />
    </div>
  );
};

export default ManuelleTherapie;
