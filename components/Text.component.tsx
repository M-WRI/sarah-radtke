// TYPES
import { ITextProps } from "../types/text.types";
// STYLES
import styles from "../styles/Text.module.scss";

export const Text = ({ children, center = false }: ITextProps) => {
  return (
    <div className={`${styles.textContainer} ${center && styles.center}`}>
      {children}
    </div>
  );
};
