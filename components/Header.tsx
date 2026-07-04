"use client";

import Link from "next/link";
import { BellIcon } from "./icons";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between px-4 py-3 backdrop-blur"
      style={{
        paddingTop: "calc(0.75rem + env(safe-area-inset-top))",
        backgroundColor: "#FFFFFF",
      }}
    >
      <div className="w-9" />
      <Link href="/" className="flex items-center">
        <span className="text-lg font-bold text-brand">Ягодка</span>
      </Link>
      <button
        type="button"
        aria-label="Уведомления"
        className="flex h-9 w-9 items-center justify-center text-ink"
      >
        <BellIcon className="h-6 w-6" />
      </button>
    </header>
  );
}
