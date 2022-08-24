import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero.component";
// import styles from "../styles/Home.module.css";
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
      <Hero
        img={image}
        title="This is a Title"
        text="Das ist ein Text"
        isMain
      />
    </div>
  );
};

export default Home;
