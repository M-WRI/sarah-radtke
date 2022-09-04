// COMPONENTS
import { Headline } from "./Headline.component";
// DATA
import data from "../api/preFooter.json";
// STYLES
import styles from "../styles/preFooter.module.scss";

export const PreFooter = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <Headline type="h1" center>
        {data.head}
      </Headline>
      <div className={styles.listContainer}>
        {data.list.map((item) => (
          <div key={item.id} className={styles.imageContainer}>
            <Headline center>{item.title}</Headline>
          </div>
        ))}
      </div>
    </section>
  );
};
