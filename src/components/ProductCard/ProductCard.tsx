import { Product } from "../../types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
    </div>
  );
}
