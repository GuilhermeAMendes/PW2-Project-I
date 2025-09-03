// Types
import type { DefaultCardProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const DefaultCard = ({
  children,
  backgroundColor,
  border,
  boxShadow,
  color,
}: DefaultCardProps) => {
  return (
    <section className={styles.cardContainer}>
      <main
        style={{
          width: "100%",
          backgroundColor,
          border,
          boxShadow,
          color,
        }}
      >
        {children}
      </main>
    </section>
  );
};

export default DefaultCard;
