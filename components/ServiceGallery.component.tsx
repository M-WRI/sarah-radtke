import { useState } from "react";
import { motion } from "framer-motion";
// DATA
import data from "../api/serviceGallery.json";
// COMPONENTS
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
// ANIMATION
import { animation } from "../animation/serviceGallery";
// TYPES
import { IArticleData, IItemData } from "../types/serviceGallery";
// STYLES
import styles from "../styles/ServiceGallery.module.scss";

export const ServiceGallery = (): JSX.Element => {
  const [index, setIndex] = useState<number | string>(1);

  const galleryHandeler = (index: string | number): void => {
    setIndex(index);
  };

  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.galleryNavContainer}>
          {data.map((item: IItemData) => {
            return (
              <li
                key={`navbar-${item.id}`}
                className={`${styles.galleryNavItem} ${
                  item.id === index && styles.active
                }`}
                onClick={() => galleryHandeler(item.id)}
              >
                <div className={styles.line} />
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.contentContainer}>
        {data.map((article: IArticleData) => (
          <>
            {article.id === index && (
              <div
                key={`article-${article.id}`}
                className={styles.articleContainer}
              >
                <div className={styles.imageContainer}>
                  <motion.div
                    initial={{ y: "100%" }}
                    variants={animation}
                    animate={"image"}
                    className={styles.image}
                  >
                    {article.id}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  variants={animation}
                  animate={"contentBox"}
                  className={styles.article}
                >
                  <Headline type="h1" center={false}>
                    {article.title}
                  </Headline>
                  <Text>{article.text}</Text>
                </motion.div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};
