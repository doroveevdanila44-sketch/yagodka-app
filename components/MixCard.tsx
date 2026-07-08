import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Mix } from "@/lib/products";

export default function MixCard({ mix }: { mix: Mix }) {
  return (
    <Link
      href={`/mixes/${mix.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-light bg-white"
    >
      <div className="relative aspect-square bg-white">
        <Image
          src={mix.imageJar}
          alt={mix.name}
          fill
          sizes="180px"
          className="object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col p-3">
        <div className="flex-grow">
          <h3 className="text-sm font-bold text-ink">{mix.name}</h3>
          <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
            {mix.shortDesc}
          </p>
        </div>
        <p className="mt-1 text-base font-bold text-brand">
          от {formatPrice(mix.price)}
        </p>
      </div>
    </Link>
  );
}
