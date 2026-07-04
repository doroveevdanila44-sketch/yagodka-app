"use client";

import Image from "next/image";
import { useState } from "react";
import { formatPrice, weightOptions, type Mix } from "@/lib/products";
import { useCart } from "./CartProvider";
import MoodTags from "./MoodTags";

export default function MixDetail({ mix }: { mix: Mix }) {
  const [weightIndex, setWeightIndex] = useState(0);
  const [added, setAdded] = useState(false);
  const { add } = useCart();

  const weight = weightOptions[weightIndex];
  const price = mix.price * weight.multiplier;

  const handleAdd = () => {
    add({
      slug: `mix-${mix.slug}`,
      name: `Микс «${mix.name}»`,
      image: mix.imageJar,
      grams: weight.grams,
      price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="px-4 pb-4">
      {/* Галерея */}
      <div className="flex flex-col gap-3">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
          <Image
            src={mix.imageJar}
            alt={`${mix.name} — в банке`}
            fill
            priority
            sizes="358px"
            className="object-contain"
          />
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white">
          <Image
            src={mix.imageLoose}
            alt={`${mix.name} — ягоды`}
            fill
            sizes="358px"
            className="object-contain"
          />
        </div>
      </div>

      {/* Название и описание */}
      <h1 className="mt-4 text-2xl font-bold text-ink">{mix.name}</h1>
      <p className="mt-1 text-sm text-gray-500">{mix.shortDesc}</p>

      {/* Состав */}
      <div className="mt-5">
        <p className="mb-2 text-sm font-semibold text-ink">Состав</p>
        <div className="flex flex-wrap gap-1.5">
          {mix.composition.map((berry) => (
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
        <p className="text-sm italic text-gray-600">{mix.mood}</p>
        <MoodTags moods={mix.moods} />
      </div>

      {/* Полное описание */}
      <p className="mt-5 text-sm leading-relaxed text-gray-600">
        {mix.fullDesc}
      </p>

      {/* Цена и выбор веса */}
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          {weight.label} / {formatPrice(price)}
        </p>
        <div className="mt-2 flex gap-2">
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

      {/* В корзину */}
      <button
        onClick={handleAdd}
        className="mt-6 w-full rounded-2xl bg-brand py-3.5 text-base font-semibold text-white active:bg-accent"
      >
        {added ? "Добавлено ✓" : `В корзину · ${formatPrice(price)}`}
      </button>
    </div>
  );
}
