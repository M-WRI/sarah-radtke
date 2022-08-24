import Head from "next/head";
// DATA
import data from "../api/home.json";
// COMPONENTS
import { Hero } from "../components/Hero.component";
// TYPES
import type { NextPage } from "next";
// TEST ELEMENTS
import testImg from "../img/test_img.jpeg";

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
    </div>
  );
};

export default Home;
