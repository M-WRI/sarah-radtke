// TYPES
import { IHeadlineProps, THeadlineType } from "../types/headline";
// STYLES
import styles from "../styles/Headline.module.scss";

export const Headline = ({
  children,
  type = "h2",
  margin = true,
  center = false,
}: IHeadlineProps) => {
  const headType = (type: THeadlineType) => {
    switch (type) {
      case "h1":
        return (
          <h1
            className={`${styles.baseHead} ${styles.mainHead} ${
              center ? styles.center : ""
            } ${margin ? styles.margin : ""}`}
          >
            {children}
          </h1>
        );
      case "h2":
        return (
          <h2
            className={`${styles.baseHead} ${styles.subHead} ${
              center ? styles.center : ""
            }  ${margin ? styles.margin : ""}`}
          >
            {children}
          </h2>
        );
    }
  };

  const headline = headType(type);

  return <div>{headline}</div>;
};
