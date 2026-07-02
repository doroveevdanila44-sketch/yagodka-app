import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import ProductDetail from "@/components/ProductDetail";
import { getProduct, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  return {
    title: product ? `${product.name} — Ягодка` : "Ягодка",
  };
}

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return (
    <div>
      <div className="px-4 pt-2">
        <Link href="/catalog" className="text-sm font-semibold text-brand">
          ← Назад в каталог
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
