import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// COMPONENTS
import { Text } from "./Text.component";
import { Headline } from "./Headline.component";
// TYPES
import { IHeroProps } from "../types/hero.types";
// STYLES
import styles from "../styles/Hero.module.scss";
import Image from "next/image";

export const Hero = ({ img, text, title, isMain = false }: IHeroProps) => {
  const animation = {
    imageContainer: {
      width: "90%",
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 2.4,
      },
    },
    image: {
      y: 0,
      transition: {
        delay: 0.5,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1.2,
      },
    },
    textContainer: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 0.8,
        ease: [0.7, 0.135, 0.235, 0.99],
        duration: 1.2,
      },
    },
  };

  const { ref, inView } = useInView();

  const imgConCtrl = useAnimation();
  const imgCtrl = useAnimation();
  // const textBox = useAnimation();

  useEffect(() => {
    if (inView) {
      imgConCtrl.start("imageContainer");
      imgCtrl.start("image");
      // textBox.start("textContainer");
    }
  }, [inView, imgCtrl, imgConCtrl]);

  return (
    <section ref={ref} className={styles.container}>
      <motion.div
        className={styles.imageContainer}
        initial={{ width: "100%" }}
        variants={animation}
        animate={imgConCtrl}
      >
        <motion.div
          className={styles.image}
          initial={{ y: "100%" }}
          variants={animation}
          animate={imgCtrl}
        >
          {img && (
            <Image
              src={img}
              alt="test"
              layout="fill"
              objectFit="cover"
              priority
            />
          )}
        </motion.div>
      </motion.div>
      <div
        className={
          isMain ? styles.heroTextContainerIndex : styles.heroTextContainer
        }
      >
        {title && <Headline>{title}</Headline>}
        {text && <Text>{text}</Text>}
      </div>
    </section>
  );
};
