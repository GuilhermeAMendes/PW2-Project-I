// External library
import { useState } from "react";

// Types
import type { Product } from "./types";

// Components
import { DefaultForm } from "@components/commons/toolkit/forms/DefaultForm";
import TextField from "@components/commons/toolkit/inputs/TextField";

// Styles
import styles from "./styles.module.css";

// Constants
const defaultProduct: Product = {
  name: "",
  price: 0,
  brand: "",
  section: "",
  state: "",
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>(defaultProduct);

  const { name, brand, price, section, state } = product;

  const handleChange = (key: keyof Product, value: string | number) => {
    setProduct((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleFormSubmit = () => {
    setProducts((prev) => [...prev, product]);
    setProduct(defaultProduct);
  };

  return (
    <section className={styles.section}>
      <h1>Loja de informática</h1>
      <DefaultForm title="Registrar produto" handleSubmit={handleFormSubmit}>
        <TextField
          label="Seção"
          value={section as string}
          changeValue={(value) => handleChange("section", value)}
        />
        <TextField
          label="Marca"
          value={brand as string}
          changeValue={(value) => handleChange("brand", value)}
        />
        <TextField
          label="Nome"
          value={name}
          changeValue={(value) => handleChange("name", value)}
        />
        <TextField
          label="Preço"
          value={String(price)}
          changeValue={(value) => handleChange("price", Number(value))}
        />
        <TextField
          label="Uso"
          value={state as string}
          changeValue={(value) => handleChange("state", value)}
        />
        <button type="submit">Criar</button>
      </DefaultForm>
      <div>
        <h2>Lista de Produtos</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((prod, index) => (
              <li key={index}>
                {prod.section} - {prod.brand} - {prod.name} - {prod.price} R$ -
                {prod.state}
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhum produto registrado ainda.</p>
        )}
      </div>
    </section>
  );
}
