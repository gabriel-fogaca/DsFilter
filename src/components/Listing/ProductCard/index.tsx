import { ProductDTO } from "../../../models/products";
import "./style.css";

type Props = {
  product: ProductDTO;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <p className="product-name">{product.name}</p>
      <p className="product-value">R$ {product.price.toFixed(2)}</p>
    </div>
  );
}