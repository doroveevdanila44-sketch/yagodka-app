"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import MixCard from "./MixCard";
import SmoothieCard from "./SmoothieCard";
import type { Mix, Product, Smoothie } from "@/lib/products";

type TasteFilter = {
  label: string;
  slugs: string[] | null; // null = все ягоды
};

const tasteFilters: TasteFilter[] = [
  { label: "Все", slugs: null },
  {
    label: "Сладкие",
    slugs: ["klubnika", "malina", "golubika", "irga", "moroshka"],
  },
  {
    label: "Кисло-сладкие",
    slugs: [
      "vishnya",
      "krasnaya-smorodina",
      "brusnika",
      "klyukva",
      "kostyanika",
      "zhimolost",
    ],
  },
  {
    label: "Кислые",
    slugs: ["oblepikha", "klyukva", "brusnika", "krasnaya-smorodina"],
  },
  {
    label: "Терпкие",
    slugs: ["chernaya-smorodina", "irga", "zhimolost", "ezhevika"],
  },
];

type Category = "berries" | "mixes" | "smoothies";

const categories: { key: Category; label: string }[] = [
  { key: "berries", label: "Ягоды" },
  { key: "mixes", label: "Миксы" },
  { key: "smoothies", label: "Смузи" },
];

export default function CatalogClient({
  products,
  mixes,
  smoothies,
}: {
  products: Product[];
  mixes: Mix[];
  smoothies: Smoothie[];
}) {
  const [category, setCategory] = useState<Category>("berries");
  const [tasteIndex, setTasteIndex] = useState(0);

  const visibleProducts = useMemo(() => {
    const slugs = tasteFilters[tasteIndex].slugs;
    if (!slugs) return products;
    const set = new Set(slugs);
    return products.filter((p) => set.has(p.slug));
  }, [tasteIndex, products]);

  return (
    <div className="py-4">
      <h1 className="mb-4 px-4 text-xl font-bold text-ink">Каталог</h1>

      {/* Категории */}
      <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto px-4">
        {categories.map((c) => {
          const isActive = c.key === category;
          return (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`whitespace-nowrap rounded-full border border-brand px-4 py-1.5 text-sm font-semibold transition-colors ${
                isActive ? "bg-brand text-white" : "bg-white text-brand"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      {category === "berries" && (
        <>
          {/* Чипы-фильтры по вкусу */}
          <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto px-4">
            {tasteFilters.map((filter, index) => {
              const isActive = index === tasteIndex;
              return (
                <button
                  key={filter.label}
                  onClick={() => setTasteIndex(index)}
                  className={`whitespace-nowrap rounded-full border border-brand px-4 py-1.5 text-sm font-semibold transition-colors ${
                    isActive ? "bg-brand text-white" : "bg-white text-brand"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-3 px-4">
            {visibleProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </>
      )}

      {category === "mixes" && (
        <div className="grid grid-cols-2 gap-3 px-4">
          {mixes.map((mix) => (
            <MixCard key={mix.slug} mix={mix} />
          ))}
        </div>
      )}

      {category === "smoothies" && (
        <div className="grid grid-cols-2 gap-3 px-4">
          {smoothies.map((smoothie) => (
            <SmoothieCard key={smoothie.slug} smoothie={smoothie} />
          ))}
        </div>
      )}
    </div>
  );
}
