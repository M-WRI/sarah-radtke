// TYPES
import { IHeadlineProps, THeadlineType } from "../types/headline";
// STYLES
import styles from "../styles/Headline.module.scss";

export const Headline = ({
  children,
  type = "h2",
  margin = true,
  center = false,
  line = false,
}: IHeadlineProps) => {
  const headType = (type: THeadlineType) => {
    switch (type) {
      case "h1":
        return (
          <div className={styles.headlineWrapper}>
            <h1
              className={`${styles.baseHead} ${styles.mainHead} ${
                center ? styles.center : ""
              } ${margin ? styles.margin : ""}`}
            >
              {children}
            </h1>

            <div className={styles.line} />
          </div>
        );
      case "h2":
        return (
          <div className={styles.headlineWrapper}>
            <h2
              className={`${styles.baseHead} ${styles.subHead} ${
                center ? styles.center : ""
              }  ${margin ? styles.margin : ""}`}
            >
              {children}
            </h2>
            <div className={styles.line} />
          </div>
        );

      case "sanserif":
        return (
          <h2
            className={`${styles.sanserif} ${center ? styles.center : ""}  ${
              margin ? styles.margin : ""
            }`}
          >
            {children}
          </h2>
        );
    }
  };

  const headline = headType(type);

  return <div>{headline}</div>;
};
