// COMPONENTS
import { Headline } from "./Headline.component";
import { Text } from "./Text.component";
// DATA
import data from "../api/priceInformation.json";
// STYLES
import styles from "../styles/PriceIformation.module.scss";

export const PriceInfo = ():JSX.Element => {
  return (
    <section className={styles.container}>
      <Headline type="h1" center>
        {data.headline}
      </Headline>
      <div className={styles.wrapper}>
        <div className={styles.generalInfo}>
          <Text center margin={false}>
            {data.generalInformation}
          </Text>
        </div>
        <div>
          <Headline type="sanserif" center>
            {data.subHead}
          </Headline>
          <Text center>{data.price}</Text>
        </div>
      </div>
    </section>
  );
};
