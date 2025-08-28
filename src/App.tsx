// External library
import { useState } from "react";

// Components
import Banner from "@components/commons/structure/Banner";
import TextField from "@components/commons/toolkit/inputs/TextField";

// Styles
import styles from "./styles.module.css";

function App() {
  const [name, setName] = useState<string>("");

  return (
    <>
      <Banner />
      <main className={styles.main}>
        <section className={styles.section}>
          <TextField label="Nome" value={name} changeValue={setName} />
        </section>
      </main>
    </>
  );
}

export default App;
