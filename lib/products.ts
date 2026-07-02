export type Product = {
  slug: string;
  name: string;
  /** Цена за 250 г, ₽ */
  price: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "golubika",
    name: "Голубика",
    price: 650,
    image: "/images/golubika.jpg",
    description:
      "Нежная северная ягода с лёгкой кислинкой. Богата антиоксидантами и витамином C.",
  },
  {
    slug: "irga",
    name: "Ирга",
    price: 450,
    image: "/images/irga.jpg",
    description:
      "Сладкая, почти медовая ягода тёмно-фиолетового цвета. Отлично подходит для десертов.",
  },
  {
    slug: "brusnika",
    name: "Брусника",
    price: 550,
    image: "/images/brusnika.jpg",
    description:
      "Упругая ягода с яркой кислинкой и лёгкой горчинкой. Классика северного стола.",
  },
  {
    slug: "klyukva",
    name: "Клюква",
    price: 500,
    image: "/images/klyukva.jpg",
    description:
      "Кислая болотная ягода, собранная вручную. Незаменима для морсов и соусов.",
  },
  {
    slug: "chernaya-smorodina",
    name: "Чёрная смородина",
    price: 480,
    image: "/images/chernaya-smorodina.jpg",
    description:
      "Ароматная ягода с насыщенным вкусом. Рекордсмен по содержанию витамина C.",
  },
  {
    slug: "krasnaya-smorodina",
    name: "Красная смородина",
    price: 480,
    image: "/images/krasnaya-smorodina.jpg",
    description:
      "Освежающая ягода с приятной кислинкой и рубиновым блеском. Хороша в свежем виде.",
  },
  {
    slug: "oblepikha",
    name: "Облепиха",
    price: 520,
    image: "/images/oblepikha.jpg",
    description:
      "Солнечная ягода с терпким вкусом и целебным маслом. Кладезь витаминов.",
  },
  {
    slug: "zhimolost",
    name: "Жимолость",
    price: 600,
    image: "/images/zhimolost.jpg",
    description:
      "Первая ягода лета с кисло-сладким вкусом и тонкой горчинкой. Тает во рту.",
  },
  {
    slug: "moroshka",
    name: "Морошка",
    price: 900,
    image: "/images/moroshka.jpg",
    description:
      "Редкая янтарная ягода северных болот. Нежный вкус с оттенком мёда и цитруса.",
  },
  {
    slug: "kostyanika",
    name: "Костяника",
    price: 700,
    image: "/images/kostyanika.jpg",
    description:
      "Рубиновая лесная ягода с гранатовой кислинкой. Собирается только вручную.",
  },
  {
    slug: "klubnika",
    name: "Клубника",
    price: 750,
    image: "/images/klubnika.jpg",
    description:
      "Сочная сладкая ягода с насыщенным ароматом. Любимица взрослых и детей.",
  },
  {
    slug: "malina",
    name: "Малина",
    price: 780,
    image: "/images/malina.jpg",
    description:
      "Ароматная бархатистая ягода с медовой сладостью. Спелая и сочная.",
  },
  {
    slug: "ezhevika",
    name: "Ежевика",
    price: 820,
    image: "/images/ezhevika.jpg",
    description:
      "Крупная тёмная ягода с глубоким вкусом и лёгкой кислинкой. Спелая до черноты.",
  },
  {
    slug: "vishnya",
    name: "Вишня",
    price: 690,
    image: "/images/vishnya.jpg",
    description:
      "Сочная ягода с классическим кисло-сладким вкусом. Собрана в самый пик спелости.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export const weightOptions = [
  { label: "250 г", grams: 250, multiplier: 1 },
  { label: "500 г", grams: 500, multiplier: 2 },
  { label: "1 кг", grams: 1000, multiplier: 4 },
] as const;

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ru-RU")} ₽`;
}
