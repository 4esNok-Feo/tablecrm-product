// app/page.tsx
import ProductForm from "./products/create/page";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Создание продукта</h1>
      <ProductForm />
    </main>
  );
}