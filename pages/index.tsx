import Head from "next/head";
// DATA
import data from "../api/home.json";
// COMPONENTS
import { Hero } from "../components/Hero.component";
import { ServiceGallery } from "../components/ServiceGallery.component";
import { InfoBox } from "../components/InfoBox.component";
// TYPES
import type { NextPage } from "next";
// TEST ELEMENTS
import testImg from "../img/test_img.jpeg";
import { PhotoBox } from "../components/PhotoBox.component";
import { PriceInfo } from "../components/PriceInfo.component";

const Home: NextPage = () => {
  const image = testImg;

  return (
    <div>
      <Head>
        <title>Sarah Radtke</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero img={image} title={data.heroData.title} isMain center />
      <ServiceGallery />
      <InfoBox
        headline={data.symptomData.headline}
        text={data.symptomData.text}
        list={data.list}
      />
      <PhotoBox
        title={data.personalData.title}
        text={data.personalData.text}
        img={data.personalData.img}
        link={data.personalData.link}
      />
      <PriceInfo />
    </div>
  );
};

export default Home;
