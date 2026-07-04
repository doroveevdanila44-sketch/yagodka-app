"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-light bg-white">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-square bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-3">
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-bold text-ink">{product.name}</h3>
        </Link>
        <p className="mt-0.5 text-xs text-gray-500">за 250 г</p>
        <p className="mt-1 text-base font-bold text-brand">
          {formatPrice(product.price)}
        </p>
        <button
          onClick={() =>
            add({
              slug: product.slug,
              name: product.name,
              image: product.image,
              grams: 250,
              price: product.price,
            })
          }
          className="mt-3 w-full rounded-xl bg-brand py-2 text-sm font-semibold text-white active:bg-accent"
        >
          В корзину
        </button>
      </div>
    </div>
  );
}
