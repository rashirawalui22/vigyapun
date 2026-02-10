'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({ onNavigate }) {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname?.startsWith(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`rounded-full px-3 py-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive
                ? "bg-brand-yellow text-brand-black"
                : "text-neutral-800 hover:bg-brand-yellow/20"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <nav
      aria-label="Main navigation"
      className="border-b border-black/5 bg-brand-cream/80 backdrop-blur"
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] uppercase text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full bg-white">
              <Image
                src="/images/logo.png"
                alt="Vigyapun Limitless logo"
                fill
                sizes="2rem"
                className="object-contain"
                priority
              />
            </span>
            <span className="hidden text-xs font-semibold sm:inline">
              VIGYAPUN <span className="font-normal tracking-normal">LIMITLESS</span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <NavLinks />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-sm font-medium text-brand-black md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow-dark focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={toggle}
            aria-label={open ? "Close main menu" : "Open main menu"}
            aria-expanded={open}
            aria-controls="primary-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="block h-0.5 w-5 rounded-full bg-brand-black" />
            <span className="mt-1 block h-0.5 w-5 rounded-full bg-brand-black" />
          </button>
        </div>

        {open && (
          <div
            id="primary-navigation"
            className="flex flex-col gap-2 pb-4 md:hidden"
          >
            <NavLinks onNavigate={close} />
          </div>
        )}
      </Container>
    </nav>
  );
}

