"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "./CartProvider";
import { CartIcon } from "./icons";

export default function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white/95 px-4 py-3 backdrop-blur">
      <div className="w-9" />
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Ягодка"
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl"
          priority
        />
      </Link>
      <Link
        href="/cart"
        aria-label="Корзина"
        className="relative flex h-9 w-9 items-center justify-center text-ink"
      >
        <CartIcon className="h-6 w-6" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
}
