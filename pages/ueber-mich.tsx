import Head from "next/head";
// COMPONENTS
import { Layout } from "../components/Layout.component";
import { TimeLine } from "../components/TimeLine";
import { Hero } from "../components/Hero.component";
import { PhotoBox } from "../components/PhotoBox.component";
import { InfoBox } from "../components/InfoBox.component";
import { PreFooter } from "../components/PreFooter.component";
import { Footer } from "../components/Footer.component";
// DATA
import data from "../api/aboutMe.json";

const UeberMich = (): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Über Mich | Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero img="about" title={data.heroTitle} text={data.heroText} center />
      <PhotoBox title={data.photoTitle} text={data.photoText} img="" />
      <InfoBox text={data.symptomText} />
      <TimeLine vita={data.vita} />
      <PreFooter />
      <Footer />
    </Layout>
  );
};

export default UeberMich;
