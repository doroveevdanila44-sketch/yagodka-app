import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Smoothie } from "@/lib/products";

export default function SmoothieCard({ smoothie }: { smoothie: Smoothie }) {
  return (
    <Link
      href={`/smoothies/${smoothie.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-light bg-white"
    >
      <div className="relative aspect-square bg-white">
        <Image
          src={smoothie.image}
          alt={smoothie.name}
          fill
          sizes="180px"
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex-grow">
          <h3 className="text-sm font-bold text-ink">{smoothie.name}</h3>
          <p className="mt-0.5 text-xs text-gray-500">
            {smoothie.composition.join(" · ")}
          </p>
        </div>
        <p className="mt-1 text-base font-bold text-brand">
          от {formatPrice(smoothie.price)}
        </p>
      </div>
    </Link>
  );
}
