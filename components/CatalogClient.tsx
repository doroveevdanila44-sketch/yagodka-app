"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "@/lib/products";

type Filter = {
  label: string;
  slugs: string[] | null; // null = все ягоды
};

const filters: Filter[] = [
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

export default function CatalogClient({ products }: { products: Product[] }) {
  const [active, setActive] = useState(0);

  const visible = useMemo(() => {
    const slugs = filters[active].slugs;
    if (!slugs) return products;
    const set = new Set(slugs);
    return products.filter((p) => set.has(p.slug));
  }, [active, products]);

  return (
    <div className="py-4">
      <h1 className="mb-4 px-4 text-xl font-bold text-ink">Каталог</h1>

      {/* Чипы-фильтры */}
      <div className="no-scrollbar mb-4 flex gap-2 overflow-x-auto px-4">
        {filters.map((filter, index) => {
          const isActive = index === active;
          return (
            <button
              key={filter.label}
              onClick={() => setActive(index)}
              className={`whitespace-nowrap rounded-full border border-brand px-4 py-1.5 text-sm font-semibold transition-colors ${
                isActive ? "bg-brand text-white" : "bg-white text-brand"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Сетка товаров */}
      <div className="grid grid-cols-2 gap-3 px-4">
        {visible.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
