import { useRouter } from "next/router";

export default function ProductPage() {
  const { query } = useRouter();

  return (
    <div>
      <h2>Product Detail Page</h2>
      <p>Product ID: {query.productId}</p>
    </div>
  );
}
