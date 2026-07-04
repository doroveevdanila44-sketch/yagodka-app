import CatalogClient from "@/components/CatalogClient";
import { products } from "@/lib/products";

export default function CatalogPage() {
  return <CatalogClient products={products} />;
}
