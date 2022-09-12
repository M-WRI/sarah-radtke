// COMPONENTS
import { Navigation } from "./Navigation.component";
// TYPES
import { ILayoutProps } from "../types/layout.types";
// STYLES
import styles from "../styles/Layout.module.scss";

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navigation />
      <main className={styles.container}>{children}</main>
    </>
  );
};
