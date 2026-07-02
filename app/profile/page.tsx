import { ProfileIcon } from "@/components/icons";

const menu = [
  "Мои заказы",
  "Адреса доставки",
  "Способы оплаты",
  "Уведомления",
  "Поддержка",
];

export default function ProfilePage() {
  return (
    <div className="px-4 py-4">
      <h1 className="mb-4 text-xl font-bold text-ink">Профиль</h1>

      <div className="flex items-center gap-4 rounded-2xl bg-light p-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand">
          <ProfileIcon className="h-7 w-7" />
        </div>
        <div>
          <p className="text-base font-bold text-ink">Гость</p>
          <p className="text-sm text-gray-500">Войдите в аккаунт</p>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-light">
        {menu.map((item, i) => (
          <button
            key={item}
            className={`flex w-full items-center justify-between px-4 py-3.5 text-left text-sm text-ink ${
              i !== menu.length - 1 ? "border-b border-light" : ""
            }`}
          >
            {item}
            <span className="text-gray-300">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}
