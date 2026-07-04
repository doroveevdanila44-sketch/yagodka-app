import Image from "next/image";
import Link from "next/link";
import { Hand, Zap, Leaf, Star } from "lucide-react";

const benefits = [
  {
    Icon: Hand,
    title: "Собрано вручную",
    text: "Каждая ягода отобрана вручную",
  },
  {
    Icon: Zap,
    title: "Быстрая доставка",
    text: "Свежими к вашей двери",
  },
  {
    Icon: Leaf,
    title: "Натуральные ягоды",
    text: "Без добавок и консервантов",
  },
  {
    Icon: Star,
    title: "Своё производство",
    text: "Контроль качества на каждом этапе",
  },
];

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
              src="/images/mixes-banner.jpg"
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

      {/* SECTION 5 — Отзывы */}
      <section className="bg-white px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-ink">Отзывы</h2>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-64 shrink-0 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200" />
                <div className="h-3 w-24 rounded bg-gray-200" />
              </div>
              <div className="mt-3 flex gap-0.5 text-brand opacity-30">
                {"★★★★★".split("").map((s, j) => (
                  <span key={j}>{s}</span>
                ))}
              </div>
              <div className="mt-3 space-y-1.5">
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-full rounded bg-gray-100" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-gray-400">
          Скоро здесь появятся первые отзывы
        </p>
      </section>

      {/* SECTION 6 — Преимущества */}
      <section className="bg-[#FFF5E6] px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-ink">
          Почему Ягодка
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {benefits.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-2xl bg-white p-4 text-center"
            >
              <Icon size={28} className="text-brand" />
              <p className="mt-2 text-sm font-semibold text-ink">{title}</p>
              <p className="mt-1 text-xs text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="relative flex min-h-[280px] flex-col items-center justify-center gap-4 overflow-hidden px-4 py-12">
        <Image
          src="/images/banner.png"
          alt=""
          fill
          sizes="390px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <h2 className="relative z-10 text-center text-2xl font-bold text-white">
          Попробуйте вкус настоящего севера
        </h2>
        <Link
          href="/catalog"
          className="relative z-10 rounded-full bg-white px-8 py-3 font-semibold text-brand active:bg-light"
        >
          Перейти в каталог
        </Link>
      </section>
    </div>
  );
}
