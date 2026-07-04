import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1 — Hero */}
      <section className="flex flex-col gap-6 bg-white px-4 pt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <h1 className="text-3xl font-bold leading-tight text-ink">
              Свежие ягоды Камчатки
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Собраны вручную. Доставлены свежими.
            </p>
          </div>
          <div className="relative min-h-[200px] w-1/2 shrink-0">
            <Image
              src="/images/banner.png"
              alt="Ягоды Камчатки"
              fill
              priority
              sizes="175px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — Ягоды (фото слева, текст справа) */}
      <section className="bg-white px-4 py-12">
        <div className="flex items-stretch gap-4">
          <div className="relative w-[120px] shrink-0 self-stretch overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/berries-banner.jpg"
              alt="Северные ягоды"
              fill
              sizes="120px"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Ягоды
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink">
              Настоящие северные ягоды
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Мы собираем лучшие ягоды Камчатки и других регионов России.
              Голубика, жимолость, морошка, облепиха, брусника, клюква и другие
              ягоды проходят тщательный отбор, чтобы сохранить естественный вкус
              и пользу природы.
            </p>
            <Link
              href="/catalog"
              className="mt-4 inline-flex rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand active:bg-light"
            >
              Все ягоды
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Смузи (текст слева, фото справа) */}
      <section className="bg-white px-4 py-12">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Смузи
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Свежие смузи</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Каждый смузи готовится только из натуральных ягод без лишних
              добавок. Семь авторских сочетаний — от лёгких и сладких до
              насыщенных северных вкусов.
            </p>
            <Link
              href="/catalog?tab=smoothies"
              className="mt-4 inline-flex rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white active:bg-accent"
            >
              Выбрать смузи
            </Link>
          </div>
          <div className="relative h-[280px] w-[140px] shrink-0 overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/smoothies-banner.png"
              alt="Смузи"
              fill
              sizes="140px"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — Миксы (фото слева, текст справа) */}
      <section className="bg-white px-4 py-12">
        <div className="flex items-center gap-4">
          <div className="h-[280px] w-[120px] shrink-0 overflow-hidden rounded-2xl bg-white">
            <Image
              src="/images/mixes-banner-v2.jpg"
              alt="Ягодные миксы"
              width={120}
              height={280}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Миксы
            </p>
            <h2 className="mt-1 text-2xl font-bold text-ink">Ягодные миксы</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Мы уже подобрали идеальные сочетания ягод. Каждый микс имеет свой
              характер, настроение и вкус — от сладкого летнего до бодрящего
              северного.
            </p>
            <Link
              href="/catalog?tab=mixes"
              className="mt-4 inline-flex rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand active:bg-light"
            >
              Все миксы
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Ягодная волна + CTA */}
      <section className="bg-white">
        <Image
          src="/images/berry-wave-banner.jpg"
          alt="Ягодная волна"
          width={1536}
          height={1024}
          sizes="100vw"
          className="block h-auto w-full"
        />
        <div className="flex justify-center px-4 pb-16">
          <Link
            href="/catalog"
            className="mt-6 rounded-full bg-brand px-10 py-2.5 text-base font-semibold text-white active:bg-accent"
          >
            Собрать ягоду
          </Link>
        </div>
      </section>
    </div>
  );
}
