// Images
import technologycAbstract from "@assets/images/banners/technology-abstract.jpg";

// Styles
import styles from "./styles.module.css";

export default function Banner() {
  return (
    <header className={styles.bannerContainer}>
      <figure className={styles.bannerContent}>
        <img
          src={technologycAbstract}
          alt="Computer store banner"
          className={styles.bannerImage}
        />
      </figure>
    </header>
  );
}
