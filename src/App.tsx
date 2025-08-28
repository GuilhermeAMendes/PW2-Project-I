// Components
import Banner from "@components/commons/structure/Banner";

// Styles
import styles from "./styles.module.css";
import Products from "./features/product/index";

function App() {
  return (
    <>
      <Banner />
      <main className={styles.main}>
        <Products />
      </main>
    </>
  );
}

export default App;
