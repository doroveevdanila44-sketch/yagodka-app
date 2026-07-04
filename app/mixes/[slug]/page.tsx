import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import MixDetail from "@/components/MixDetail";
import { getMix, mixes } from "@/lib/products";

export function generateStaticParams() {
  return mixes.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const mix = getMix(params.slug);
  return {
    title: mix ? `Микс «${mix.name}» — Ягодка` : "Ягодка",
  };
}

export default function MixPage({ params }: { params: { slug: string } }) {
  const mix = getMix(params.slug);
  if (!mix) notFound();

  return (
    <div>
      <div className="px-4 pt-2">
        <Link href="/mixes" className="text-sm font-semibold text-brand">
          ← Назад к миксам
        </Link>
      </div>
      <MixDetail mix={mix} />
    </div>
  );
}
