// External library
import { useState } from "react";

// Types
import type { Product } from "./types";

// Components
import DefaultForm from "@components/commons/toolkit/forms/DefaultForm";
import TextField from "@components/commons/toolkit/inputs/TextField";
import NumberField from "@components/commons/toolkit/inputs/NumberField";
import SelectField from "@components/commons/toolkit/selects/SelectField";
import RadioGroup from "@components/commons/toolkit/radios/RadioGroup";
import SubmitButton from "@components/commons/toolkit/buttons/SubmitButton";
import ListProduct from "./components/list/ListProduct";

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

const stateOptions = [
  { label: "Novo", value: "New" },
  { label: "Usado", value: "Used" },
];

const sectionOptions = [
  { label: "Computadores", value: "Computers" },
  { label: "Acessórios", value: "Accessories" },
  { label: "Impressoras", value: "Printers" },
  { label: "Jogos", value: "Games" },
  { label: "Gadgets", value: "Gadgets" },
];

const brandOptions = [
  { label: "HP", value: "HP" },
  { label: "Dell", value: "Dell" },
  { label: "Positivo", value: "Positivo" },
  { label: "Asus", value: "Asus" },
  { label: "Genérico", value: "Generic" },
];

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

  const hasInvalidField = () => {
    return Object.values(product).some(
      (prop) =>
        prop === "" ||
        prop === null ||
        prop === undefined ||
        (typeof prop === "number" && prop < 0)
    );
  };

  const handleFormSubmit = () => {
    if (hasInvalidField()) return;
    setProducts((prev) => [...prev, product]);
    setProduct(defaultProduct);
  };

  return (
    <section className={styles.section}>
      <h1>Loja de informática</h1>
      <DefaultForm title="Registrar produto" handleSubmit={handleFormSubmit}>
        <SelectField
          label="Seção"
          value={section}
          options={sectionOptions}
          placeholder="Selecione uma seção"
          changeValue={(value) => handleChange("section", value)}
        />
        <SelectField
          label="Marca"
          value={brand}
          options={brandOptions}
          placeholder="Selecione uma marca"
          changeValue={(value) => handleChange("brand", value)}
        />
        <TextField
          label="Nome"
          value={name}
          changeValue={(value) => handleChange("name", value)}
        />
        <NumberField
          label="Preço"
          value={price}
          changeValue={(value) => handleChange("price", value)}
        />
        <RadioGroup
          label="Uso"
          value={state}
          options={stateOptions}
          changeValue={(value) => handleChange("state", value)}
        />
        <SubmitButton children="Criar" />
      </DefaultForm>
      <ListProduct content={products} />
    </section>
  );
}
