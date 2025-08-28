// External library
import { useState } from "react";

// Components
import Banner from "@components/commons/structure/Banner";
import TextField from "@components/commons/toolkit/inputs/TextField";

// Styles
import styles from "./styles.module.css";
import { DefaultForm } from "@components/commons/toolkit/forms/DefaultForm";

function App() {
  const [name, setName] = useState<string>("");

  const handle = () => {
    console.log(`Current name ${name}`);
  };

  return (
    <>
      <Banner />
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Loja de informática</h1>
          <DefaultForm title="Registrar produtos" handleSubmit={handle}>
            <TextField label="Nome" value={name} changeValue={setName} />
            <button type="submit">Criar</button>
          </DefaultForm>
        </section>
      </main>
    </>
  );
}

export default App;
