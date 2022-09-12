// COMPONENTS
import { Headline } from "./Headline.component";
import { ImageComponent } from "./Image.component";
// DATA
import head from "../api/preFooter.json";
import list from "../api/serviceGallery.json";
// TYPES
import { IPreFooterProps } from "../types/preFooter.types";
// STYLES
import styles from "../styles/PreFooter.module.scss";

export const PreFooter = ({ site }: IPreFooterProps): JSX.Element => {
  const filteredList = list.filter((item) => item.title !== site);

  return (
    <section className={styles.container}>
      <Headline type="h1" center>
        {head.head}
      </Headline>
      <div
        className={
          filteredList.length < 4
            ? styles.listContaienerSm
            : styles.listContainer
        }
      >
        {filteredList.map((item) => (
          <div key={item.id} className={styles.imageContainer}>
            <ImageComponent type={item.img} alt={item.alt} />
            <Headline center>{item.title}</Headline>
          </div>
        ))}
      </div>
    </section>
  );
};
