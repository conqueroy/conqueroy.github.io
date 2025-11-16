'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Experiments', href: '/experiments' },
  { name: 'Store', href: '/store' },
  { name: 'About', href: '/about' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-opacity duration-500 lg:px-[60px] h-[140px] flex items-center ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <nav className="hidden lg:flex items-center justify-between w-full">
          <div className="h-[80px] w-[242px]" aria-hidden="true" />

          <div className="flex items-center border border-neutral-200 rounded-full h-[46px] px-2 bg-white">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-soehne-buch text-sm text-primary px-5 py-2 transition-colors hover:text-neutral-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="h-[80px] w-[244px]" aria-hidden="true" />
        </nav>
        
        <div className="lg:hidden w-full px-5">
           <Link href="/">
              <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/e26b9d0c-b6bb-449f-b032-8f1bb18f4990-kevinhipke-com/assets/svgs/kevinhipke-3.svg?"
                  alt="KEVIN HIPKE logo"
                  width={145}
                  height={21}
                  priority
              />
          </Link>
        </div>
      </header>

      <nav
        className={`hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex items-center bg-[#1C1C1C]/95 text-white rounded-full h-[46px] px-2 shadow-xl backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-soehne-buch text-sm px-5 py-2 transition-colors hover:text-neutral-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}