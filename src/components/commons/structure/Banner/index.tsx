// Images
import technologycAbstract from "@assets/images/banners/technology-abstract.jpg";

// Styles
import styles from "./styles.module.css";

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <img
          src={technologycAbstract}
          alt="Computer store banner"
          className={styles.bannerImage}
        />
        ;
      </div>
    </div>
  );
}
