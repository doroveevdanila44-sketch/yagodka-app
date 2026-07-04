"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";
import {
  CartIcon,
  CatalogIcon,
  HomeIcon,
  MixIcon,
  ProfileIcon,
} from "./icons";

const tabs = [
  { href: "/", label: "Главная", Icon: HomeIcon },
  { href: "/catalog", label: "Каталог", Icon: CatalogIcon },
  { href: "/mixes", label: "Миксы", Icon: MixIcon },
  { href: "/cart", label: "Корзина", Icon: CartIcon },
  { href: "/profile", label: "Профиль", Icon: ProfileIcon },
];

export default function TabBar() {
  const pathname = usePathname();
  const { count } = useCart();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 mx-auto flex max-w-app items-stretch border-t border-light bg-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {tabs.map(({ href, label, Icon }) => {
        const active =
          href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`relative flex flex-1 flex-col items-center gap-1 py-2 text-[11px] ${
              active ? "text-brand" : "text-gray-400"
            }`}
          >
            <span className="relative">
              <Icon className="h-6 w-6" />
              {href === "/cart" && count > 0 && (
                <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </span>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
