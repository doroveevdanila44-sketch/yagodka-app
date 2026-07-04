import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import SmoothieDetail from "@/components/SmoothieDetail";
import { getSmoothie, smoothies } from "@/lib/products";

export function generateStaticParams() {
  return smoothies.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const smoothie = getSmoothie(params.slug);
  return {
    title: smoothie ? `Смузи «${smoothie.name}» — Ягодка` : "Ягодка",
  };
}

export default function SmoothiePage({
  params,
}: {
  params: { slug: string };
}) {
  const smoothie = getSmoothie(params.slug);
  if (!smoothie) notFound();

  return (
    <div>
      <div className="px-4 pt-2">
        <Link href="/catalog" className="text-sm font-semibold text-brand">
          ← Назад в каталог
        </Link>
      </div>
      <SmoothieDetail smoothie={smoothie} />
    </div>
  );
}
