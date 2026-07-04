"use client";

import Image from "next/image";
import { useState } from "react";
import {
  formatPrice,
  volumeOptions,
  type Smoothie,
} from "@/lib/products";
import { useCart } from "./CartProvider";

export default function SmoothieDetail({ smoothie }: { smoothie: Smoothie }) {
  const [volumeIndex, setVolumeIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const volume = volumeOptions[volumeIndex];
  const price = Math.round(smoothie.price * volume.multiplier);

  const handleAdd = () => {
    add({
      slug: `smoothie-${smoothie.slug}`,
      name: `Смузи «${smoothie.name}»`,
      image: smoothie.image,
      grams: volume.ml,
      price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="px-4 pb-4">
      {/* Фото */}
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
        <Image
          src={smoothie.image}
          alt={smoothie.name}
          fill
          priority
          sizes="358px"
          className="object-contain"
        />
      </div>

      {/* Название и описание */}
      <h1 className="mt-4 text-2xl font-bold text-ink">{smoothie.name}</h1>
      <p className="mt-1 text-sm text-gray-500">{smoothie.shortDesc}</p>

      {/* Состав */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-ink">Состав</p>
        <div className="flex flex-wrap gap-1.5">
          {smoothie.composition.map((berry) => (
            <span
              key={berry}
              className="rounded-full bg-light px-3 py-1 text-xs font-medium text-brand"
            >
              {berry}
            </span>
          ))}
        </div>
      </div>

      {/* Характер */}
      <div className="mt-5">
        <p className="mb-1 text-sm font-semibold text-ink">Характер</p>
        <p className="text-sm italic text-gray-600">{smoothie.mood}</p>
      </div>

      {/* Полное описание */}
      <p className="mt-5 text-sm leading-relaxed text-gray-600">
        {smoothie.fullDesc}
      </p>

      {/* Цена и выбор объёма */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          {volume.label} / {formatPrice(price)}
        </p>
        <div className="mt-2 flex gap-2">
          {volumeOptions.map((option, index) => {
            const active = index === volumeIndex;
            return (
              <button
                key={option.ml}
                onClick={() => setVolumeIndex(index)}
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

      {/* Заказать */}
      <button
        onClick={handleAdd}
        className="mt-6 w-full rounded-2xl bg-brand py-3.5 text-base font-semibold text-white active:bg-accent"
      >
        {added ? "Добавлено ✓" : "Заказать"}
      </button>
    </div>
  );
}
