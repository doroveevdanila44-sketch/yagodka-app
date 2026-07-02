import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-2xl font-bold text-ink">Ничего не найдено</h1>
      <p className="mt-2 text-sm text-gray-500">
        Такой страницы или ягоды у нас нет
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white active:bg-accent"
      >
        На главную
      </Link>
    </div>
  );
}
