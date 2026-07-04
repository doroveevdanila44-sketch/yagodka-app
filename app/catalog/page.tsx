import CatalogClient from "@/components/CatalogClient";
import { products, mixes, smoothies } from "@/lib/products";

export default function CatalogPage() {
  return (
    <CatalogClient products={products} mixes={mixes} smoothies={smoothies} />
  );
}
