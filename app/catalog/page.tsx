import CatalogClient from "@/components/CatalogClient";
import { products, mixes } from "@/lib/products";

export default function CatalogPage() {
  return <CatalogClient products={products} mixes={mixes} />;
}
