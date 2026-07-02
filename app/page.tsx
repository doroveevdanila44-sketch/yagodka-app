import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "@/lib/products";
import { PinIcon } from "@/components/icons";

export default function HomePage() {
  return (
    <div className="pb-16">
      {/* Баннер */}
      <section className="relative">
        <div className="relative h-56 w-full">
          <Image
            src="/images/banner.png"
            alt="Свежие ягоды"
            fill
            priority
            sizes="390px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
        </div>
        <div className="absolute inset-y-0 left-0 flex w-3/4 flex-col justify-center px-5">
          <h1 className="text-3xl font-bold leading-tight text-ink">
            Свежие ягоды
          </h1>
          <p className="mt-1 text-sm text-gray-600">Собраны на Камчатке</p>
          <Link
            href="/catalog"
            className="mt-4 inline-flex w-fit rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white active:bg-accent"
          >
            Смотреть все
          </Link>
        </div>
      </section>

      {/* Наши ягоды — горизонтальный скролл */}
      <section className="mt-6">
        <div className="mb-3 flex items-center justify-between px-4">
          <h2 className="text-lg font-bold text-ink">Наши ягоды</h2>
          <Link href="/catalog" className="text-sm font-semibold text-brand">
            Все
          </Link>
        </div>
        <div className="no-scrollbar flex gap-3 overflow-x-auto px-4 pb-2">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="w-36 flex-shrink-0 overflow-hidden rounded-2xl border border-light bg-white"
            >
              <div className="relative aspect-square bg-light">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-ink">{product.name}</h3>
                <p className="mt-0.5 text-xs text-gray-500">за 250 г</p>
                <p className="mt-1 text-sm font-bold text-brand">
                  {formatPrice(product.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Кнопка поиска магазина — фиксированная внизу */}
      <div className="fixed inset-x-0 bottom-[72px] z-20 mx-auto max-w-app px-4">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white shadow-lg active:bg-accent">
          <PinIcon className="h-5 w-5" />
          Найти ближайший магазин
        </button>
      </div>
    </div>
  );
}
