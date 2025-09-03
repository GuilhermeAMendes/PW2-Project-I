// Components
import DefaultCard from "@components/commons/toolkit/cards/DefaultCard";

// Images
import Dell from "@assets/images/brands/dell-logo.svg";
import Asus from "@assets/images/brands/Asus-logo.svg";
import Generic from "@assets/images/brands/Generic-logo.svg";
import HP from "@assets/images/brands/HP-logo.svg";
import Positivo from "@assets/images/brands/Positivo-logo.svg";

// Types
import type { ListProductProps } from "./types";

// Styles
import styles from "./styles.module.css";
import type { Brand, State, StoreSection } from "features/product/types";

export const ListProduct = ({ content }: ListProductProps) => {
  const sections = Array.from(new Set(content.map((item) => item.section)));

  const brandMap: Record<Brand, string> = {
    "": "",
    Asus: Asus,
    Dell: Dell,
    Generic: Generic,
    HP: HP,
    Positivo: Positivo,
  };

  const sectionMap: Record<StoreSection, string> = {
    "": "",
    Accessories: "Acessório",
    Computers: "Computadore",
    Gadgets: "Gadget",
    Games: "Jogo",
    Printers: "Impressora",
  };

  const stateMap: Record<State, string> = {
    "": "",
    New: "Novo",
    Used: "Usado",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Produtos</h2>
      {content.length > 0 ? (
        <div className={styles.sectionsWrapper}>
          {sections.map((section, index) => (
            <div key={index} className={styles.sectionBlock}>
              <h3 className={styles.sectionTitle}>
                {`${sectionMap[section]}s`}
              </h3>
              <div className={styles.cardsRow}>
                {content
                  .filter((item) => item.section == section)
                  .map((prod, index) => (
                    <DefaultCard key={index}>
                      <img
                        src={brandMap[prod.brand]}
                        alt={`${sectionMap[section]} da marca ${prod.brand}.`}
                        className={styles.brandLogo}
                      />
                      <div className={styles.productContent}>
                        <p className={styles.productName}>
                          <strong>{prod.brand}</strong> - {prod.name}
                        </p>
                        <span className={styles.price}>R$ {prod.price}</span>
                        <span
                          className={`${styles.stateBadge} ${
                            prod.state === "New" ? styles.new : styles.used
                          }`}
                        >
                          {stateMap[prod.state]}
                        </span>
                        <span className={styles.description}>
                          {`${prod.name} da marca ${prod.brand}, categoria ${
                            sectionMap[prod.section]
                          }s, disponível em condição ${
                            stateMap[prod.state]
                          }. Um produto confiável que oferece boa performance e durabilidade.`}
                        </span>
                      </div>
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
