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

export type MoodSlug =
  | "morning"
  | "energy"
  | "happy"
  | "relax"
  | "fresh"
  | "evening";

export const moodOptions: { slug: MoodSlug; label: string }[] = [
  { slug: "morning", label: "Начать день" },
  { slug: "energy", label: "Зарядиться" },
  { slug: "happy", label: "Настроение" },
  { slug: "relax", label: "Отдохнуть" },
  { slug: "fresh", label: "Освежиться" },
  { slug: "evening", label: "Вечер" },
];

export type Mix = {
  slug: string;
  name: string;
  composition: string[];
  shortDesc: string;
  fullDesc: string;
  mood: string;
  moods: MoodSlug[];
  /** Цена за 250 г, ₽ */
  price: number;
  imageJar: string;
  imageLoose: string;
};

export const mixes: Mix[] = [
  {
    slug: "taezhniy",
    name: "Таёжный",
    composition: ["Голубика", "Ирга", "Жимолость"],
    shortDesc: "Настоящий вкус северной тайги.",
    fullDesc:
      "Сочетание трёх дикорастущих ягод с мягким, насыщенным и благородным вкусом. Голубика дарит сладость, ирга добавляет медовые оттенки, а жимолость завершает микс лёгкой северной кислинкой. Идеальный выбор для тех, кто любит природный вкус без лишней сладости.",
    mood: "Спокойный, лесной, благородный",
    price: 890,
    moods: ["relax", "evening"],
    imageJar: "/images/mixes/taezhniy-jar.jpg",
    imageLoose: "/images/mixes/taezhniy-loose.jpg",
  },
  {
    slug: "kamchatskiy",
    name: "Камчатский",
    composition: ["Голубика", "Морошка", "Облепиха"],
    shortDesc: "Самые узнаваемые ягоды Камчатки.",
    fullDesc:
      "Яркий северный микс, вобравший в себя вкус Камчатки. Нежная морошка, ароматная облепиха и сочная голубика создают насыщенное сочетание сладости, свежести и лёгкой цитрусовой кислинки. Настоящее знакомство с дикой природой полуострова.",
    mood: "Северный, яркий, уникальный",
    price: 990,
    moods: ["fresh", "morning"],
    imageJar: "/images/mixes/kamchatskiy-jar.jpg",
    imageLoose: "/images/mixes/kamchatskiy-loose.jpg",
  },
  {
    slug: "yuzhniy",
    name: "Южный",
    composition: ["Клубника", "Малина"],
    shortDesc: "Максимально сладкий летний микс.",
    fullDesc:
      "Классическое сочетание двух самых любимых ягод. Сладкая клубника и ароматная малина создают насыщенный вкус спелого лета, который нравится и детям, и взрослым. Самый мягкий и десертный микс коллекции.",
    mood: "Летний, солнечный, сладкий",
    price: 850,
    moods: ["happy", "energy"],
    imageJar: "/images/mixes/yuzhniy-jar.jpg",
    imageLoose: "/images/mixes/yuzhniy-loose.jpg",
  },
  {
    slug: "polyarnaya-noch",
    name: "Полярная ночь",
    composition: ["Голубика", "Чёрная смородина", "Ежевика"],
    shortDesc: "Тёмный, насыщенный ягодный вкус.",
    fullDesc:
      "Глубокий вкус тёмных ягод с выразительным ароматом и благородной кислинкой. Голубика делает микс мягче, ежевика добавляет сочности, а чёрная смородина наполняет его характерным насыщенным послевкусием.",
    mood: "Глубокий, насыщенный, вечерний",
    price: 920,
    moods: ["evening", "relax"],
    imageJar: "/images/mixes/polyarnaya-noch-jar.jpg",
    imageLoose: "/images/mixes/polyarnaya-noch-loose.jpg",
  },
  {
    slug: "lesnoy",
    name: "Лесной",
    composition: ["Голубика", "Брусника", "Ирга"],
    shortDesc: "Классический лесной сбор.",
    fullDesc:
      "Гармоничное сочетание лесных ягод с мягкой сладостью и приятной кислинкой. Голубика придаёт сочность, ирга — лёгкие медовые ноты, а брусника освежает вкус. Универсальный микс для любителей натуральных ягод.",
    mood: "Натуральный, спокойный, лесной",
    price: 870,
    moods: ["relax", "fresh"],
    imageJar: "/images/mixes/lesnoy-jar.jpg",
    imageLoose: "/images/mixes/lesnoy-loose.jpg",
  },
  {
    slug: "vulkan",
    name: "Вулкан",
    composition: ["Клубника", "Малина", "Красная смородина"],
    shortDesc: "Яркий, сочный микс с лёгкой кислинкой.",
    fullDesc:
      "Самый энергичный ягодный микс коллекции. Сладкая клубника, ароматная малина и сочная красная смородина создают яркий, освежающий вкус с выразительной ягодной кислинкой. Каждая ложка напоминает о насыщенном летнем урожае.",
    mood: "Яркий, сочный, энергичный",
    price: 880,
    moods: ["energy", "happy"],
    imageJar: "/images/mixes/vulkan-jar.jpg",
    imageLoose: "/images/mixes/vulkan-loose.jpg",
  },
  {
    slug: "yantarniy",
    name: "Янтарный",
    composition: ["Облепиха", "Морошка"],
    shortDesc: "Золотистый северный микс.",
    fullDesc:
      "Две легендарные северные ягоды в одном сочетании. Нежная морошка и ароматная облепиха образуют богатый янтарный вкус с природной свежестью и лёгкими цитрусовыми нотами. Один из самых узнаваемых северных миксов.",
    mood: "Тёплый, золотистый, северный",
    price: 950,
    moods: ["happy", "morning"],
    imageJar: "/images/mixes/yantarniy-jar.jpg",
    imageLoose: "/images/mixes/yantarniy-loose.jpg",
  },
  {
    slug: "severnyy",
    name: "Северный",
    composition: ["Клюква", "Брусника", "Красная смородина"],
    shortDesc: "Самый бодрящий и кисловатый микс.",
    fullDesc:
      "Освежающий микс из трёх северных ягод с яркой природной кислинкой. Клюква дарит насыщенность, брусника делает вкус благороднее, а красная смородина добавляет сочности. Отличный выбор для тех, кто любит выразительный ягодный вкус.",
    mood: "Свежий, бодрящий, северный",
    price: 860,
    moods: ["morning", "fresh"],
    imageJar: "/images/mixes/severnyy-jar.jpg",
    imageLoose: "/images/mixes/severnyy-loose.jpg",
  },
];

export function getMix(slug: string): Mix | undefined {
  return mixes.find((m) => m.slug === slug);
}

export type Smoothie = {
  slug: string;
  name: string;
  composition: string[];
  shortDesc: string;
  fullDesc: string;
  mood: string;
  moods: MoodSlug[];
  /** Цена за 300 мл, ₽ */
  price: number;
  image: string;
};

export const smoothies: Smoothie[] = [
  {
    slug: "rassvet",
    name: "Рассвет",
    composition: ["Клубника", "Малина"],
    shortDesc: "Лёгкий сладкий смузи с ярким летним вкусом.",
    fullDesc:
      "Максимально понятный и универсальный смузи. Сладкая клубника и нежная малина создают яркий, солнечный вкус, который нравится всем без исключения.",
    mood: "Летний, лёгкий, сладкий",
    price: 390,
    moods: ["morning", "happy"],
    image: "/images/smoothies/rassvet.jpg",
  },
  {
    slug: "magma",
    name: "Магма",
    composition: ["Клубника", "Малина", "Красная смородина"],
    shortDesc: "Самый яркий смузи линейки.",
    fullDesc:
      "Богатый ягодный вкус с лёгкой освежающей кислинкой. Клубника и малина создают сладкую основу, которую красная смородина наполняет выразительной ягодной кислинкой.",
    mood: "Яркий, насыщенный, энергичный",
    price: 420,
    moods: ["energy", "happy"],
    image: "/images/smoothies/magma.jpg",
  },
  {
    slug: "polunochnyy",
    name: "Полуночный",
    composition: ["Голубика", "Чёрная смородина", "Ежевика"],
    shortDesc: "Глубокий насыщенный вкус северных ягод.",
    fullDesc:
      "Самый плотный и выразительный смузи коллекции. Голубика смягчает вкус, ежевика добавляет сочности, а чёрная смородина наполняет его характерным северным послевкусием.",
    mood: "Глубокий, насыщенный, вечерний",
    price: 440,
    moods: ["evening", "relax"],
    image: "/images/smoothies/polunochnyy.jpg",
  },
  {
    slug: "taezhniy-smoothie",
    name: "Таёжный",
    composition: ["Голубика", "Ирга", "Жимолость"],
    shortDesc: "Настоящий вкус северной тайги.",
    fullDesc:
      "Благородный, спокойный ягодный профиль с природной сладостью. Голубика и ирга дарят мягкость, а жимолость завершает вкус лёгкой северной кислинкой.",
    mood: "Спокойный, лесной, благородный",
    price: 430,
    moods: ["relax", "evening"],
    image: "/images/smoothies/taezhniy-smoothie.jpg",
  },
  {
    slug: "lesnaya-prohlada",
    name: "Лесная прохлада",
    composition: ["Голубика", "Брусника", "Ирга"],
    shortDesc: "Классическое сочетание лесных ягод.",
    fullDesc:
      "Освежающий вкус с приятной северной кислинкой. Голубика придаёт сочность, ирга — лёгкие медовые ноты, а брусника освежает и делает вкус чище.",
    mood: "Натуральный, свежий, лесной",
    price: 420,
    moods: ["fresh", "relax"],
    image: "/images/smoothies/lesnaya-prohlada.jpg",
  },
  {
    slug: "solnechnyy-den",
    name: "Солнечный день",
    composition: ["Облепиха", "Морошка"],
    shortDesc: "Максимально солнечный смузи.",
    fullDesc:
      "Лёгкий, свежий и очень витаминный. Облепиха и морошка создают яркий золотистый вкус с природной свежестью и лёгкими цитрусовыми нотами.",
    mood: "Тёплый, золотистый, витаминный",
    price: 450,
    moods: ["happy", "morning"],
    image: "/images/smoothies/solnechnyy-den.jpg",
  },
  {
    slug: "severnoe-utro",
    name: "Северное утро",
    composition: ["Клюква", "Брусника", "Красная смородина"],
    shortDesc: "Самый бодрящий смузи линейки.",
    fullDesc:
      "Сочная северная кислинка и насыщенный ягодный вкус, который отлично освежает. Клюква дарит насыщенность, брусника делает вкус благороднее, красная смородина добавляет сочности.",
    mood: "Свежий, бодрящий, северный",
    price: 410,
    moods: ["morning", "fresh"],
    image: "/images/smoothies/severnoe-utro.jpg",
  },
];

export function getSmoothie(slug: string): Smoothie | undefined {
  return smoothies.find((s) => s.slug === slug);
}

export const volumeOptions = [
  { label: "300 мл", ml: 300, multiplier: 1 },
  { label: "500 мл", ml: 500, multiplier: 1.6 },
] as const;
