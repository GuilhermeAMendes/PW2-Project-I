// Types
import type { ListProductProps } from "./types";

export const ListProduct = ({ content }: ListProductProps) => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      {content.length > 0 ? (
        <ul>
          {content.map((prod, index) => (
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
  );
};

export default ListProduct;
