"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

function weightLabel(grams: number): string {
  return grams >= 1000 ? `${grams / 1000} кг` : `${grams} г`;
}

export default function CartPage() {
  const { items, total, remove, clear } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="text-xl font-bold text-ink">Корзина пуста</h1>
        <p className="mt-2 text-sm text-gray-500">
          Добавьте свежие ягоды из каталога
        </p>
        <Link
          href="/catalog"
          className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white active:bg-accent"
        >
          В каталог
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-ink">Корзина</h1>
        <button
          onClick={clear}
          className="text-sm font-medium text-gray-400"
        >
          Очистить
        </button>
      </div>

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={`${item.slug}-${item.grams}`}
            className="flex items-center gap-3 rounded-2xl border border-light bg-white p-3"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-white">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-bold text-ink">{item.name}</h3>
              <p className="text-xs text-gray-500">
                {weightLabel(item.grams)} · {item.qty} шт.
              </p>
              <p className="mt-1 text-sm font-bold text-brand">
                {formatPrice(item.price * item.qty)}
              </p>
            </div>
            <button
              onClick={() => remove(item.slug, item.grams)}
              aria-label="Удалить"
              className="px-2 text-lg text-gray-400"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">Итого</span>
        <span className="text-xl font-bold text-ink">
          {formatPrice(total)}
        </span>
      </div>

      <button className="mt-4 w-full rounded-2xl bg-brand py-3.5 text-base font-semibold text-white active:bg-accent">
        Оформить заказ
      </button>
    </div>
  );
}
