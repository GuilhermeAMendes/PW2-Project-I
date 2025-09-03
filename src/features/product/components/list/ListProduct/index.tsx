// Components
import DefaultCard from "@components/commons/toolkit/cards/DefaultCard";

// Types
import type { ListProductProps } from "./types";

// Styles
import styles from "./styles.module.css";

export const ListProduct = ({ content }: ListProductProps) => {
  const sections = Array.from(new Set(content.map((item) => item.section)));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Produtos</h2>
      {content.length > 0 ? (
        <div className={styles.sectionsWrapper}>
          {sections.map((section, index) => (
            <div key={index} className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>{section}</h3>
              <div className={styles.cardsRow}>
                {content
                  .filter((item) => item.section == section)
                  .map((prod, index) => (
                    <DefaultCard key={index}>
                      <p className={styles.productText}>
                        <strong>{prod.brand}</strong> - {prod.name}
                        <span className={styles.price}> R$ {prod.price}</span>
                        <span className={styles.state}> ({prod.state})</span>
                      </p>
                    </DefaultCard>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.emptyText}>Nenhum produto registrado ainda.</p>
      )}
    </div>
  );
};

export default ListProduct;
