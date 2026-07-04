import Image from "next/image";
import Link from "next/link";
import { mixes, formatPrice } from "@/lib/products";

export const metadata = {
  title: "Миксы — Ягодка",
};

export default function MixesPage() {
  return (
    <div className="px-4 py-4">
      <div className="mb-4 flex items-center gap-3">
        <Link
          href="/"
          aria-label="Назад"
          className="text-xl font-bold text-brand"
        >
          ←
        </Link>
        <h1 className="text-xl font-bold text-ink">Миксы</h1>
      </div>

      <div className="flex flex-col gap-6">
        {mixes.map((mix) => (
          <div key={mix.slug} className="flex flex-col">
            <Link href={`/mixes/${mix.slug}`} className="block">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={mix.imageJar}
                  alt={mix.name}
                  fill
                  sizes="358px"
                  className="object-contain"
                />
              </div>
            </Link>

            <div className="mt-3">
              <Link href={`/mixes/${mix.slug}`}>
                <h2 className="text-xl font-bold text-ink">{mix.name}</h2>
              </Link>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {mix.composition.map((berry) => (
                  <span
                    key={berry}
                    className="rounded-full bg-light px-2.5 py-1 text-xs font-medium text-brand"
                  >
                    {berry}
                  </span>
                ))}
              </div>

              <p className="mt-2 text-sm text-gray-500">{mix.shortDesc}</p>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-brand">
                  от {formatPrice(mix.price)}
                </span>
                <Link
                  href={`/mixes/${mix.slug}`}
                  className="rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand active:bg-light"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
