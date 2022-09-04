// COMPONENTS
import { Headline } from "./Headline.component";
// DATA
import head from "../api/preFooter.json";
import list from "../api/serviceGallery.json";
// STYLES
import styles from "../styles/PreFooter.module.scss";

export const PreFooter = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <Headline type="h1" center>
        {head.head}
      </Headline>
      <div className={styles.listContainer}>
        {list.map((item) => (
          <div key={item.id} className={styles.imageContainer}>
            <Headline center>{item.title}</Headline>
          </div>
        ))}
      </div>
    </section>
  );
};
