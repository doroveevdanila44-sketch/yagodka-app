"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatPrice,
  weightOptions,
  type Product,
} from "@/lib/products";
import { useCart } from "./CartProvider";

export default function ProductDetail({ product }: { product: Product }) {
  const [weightIndex, setWeightIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const weight = weightOptions[weightIndex];
  const price = product.price * weight.multiplier;

  const handleAdd = () => {
    add({
      slug: product.slug,
      name: product.name,
      image: product.image,
      grams: weight.grams,
      price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="pb-4">
      {/* Большое фото */}
      <div className="relative aspect-square w-full bg-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority
          sizes="390px"
          className="object-cover"
        />
      </div>

      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold text-ink">{product.name}</h1>
        <p className="mt-1 text-sm text-gray-500">
          Цена за {weight.label}
        </p>
        <p className="mt-1 text-2xl font-bold text-brand">
          {formatPrice(price)}
        </p>

        {/* Выбор веса */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold text-ink">Вес</p>
          <div className="flex gap-2">
            {weightOptions.map((option, index) => {
              const active = index === weightIndex;
              return (
                <button
                  key={option.grams}
                  onClick={() => setWeightIndex(index)}
                  className={`flex-1 rounded-xl border py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "border-brand bg-brand text-white"
                      : "border-light bg-light text-ink"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Описание */}
        <div className="mt-5">
          <p className="mb-1 text-sm font-semibold text-ink">Описание</p>
          <p className="text-sm leading-relaxed text-gray-600">
            {product.description}
          </p>
        </div>

        {/* Кнопка в корзину */}
        <button
          onClick={handleAdd}
          className="mt-6 w-full rounded-2xl bg-brand py-3.5 text-base font-semibold text-white active:bg-accent"
        >
          {added ? "Добавлено" : `В корзину · ${formatPrice(price)}`}
        </button>
      </div>
    </div>
  );
}
