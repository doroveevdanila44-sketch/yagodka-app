import CatalogClient from "@/components/CatalogClient";
import { products, mixes, smoothies } from "@/lib/products";

export default function CatalogPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  return (
    <CatalogClient
      products={products}
      mixes={mixes}
      smoothies={smoothies}
      initialTab={searchParams.tab}
    />
  );
}
