import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function CatalogPage() {
  return (
    <div className="px-4 py-4">
      <h1 className="mb-4 text-xl font-bold text-ink">Каталог</h1>
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
