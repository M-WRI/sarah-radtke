import Link from "next/link";
// STYLES
import styles from "../styles/Navigation.module.scss";
// DATA
import data from "../api/navigation.json";
import Image from "next/image";

export const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src="/icon/sarah-radtke-logo.svg"
                alt="sarah logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </a>
          </Link>
        </div>
        <ul className={styles.navBar}>
          {data.map((item) => (
            <li key={item.id} className={styles.navItem}>
              <Link href={item.slug}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.mobileNavBar}>
          {data.map((item) => (
            <li key={item.id} className={styles.mobileNavItem}>
              <Link href={item.slug}>
                <a>{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
