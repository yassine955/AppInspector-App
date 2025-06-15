'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const NavbarComponent = () => {
  const { push } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-[140px] flex flex-col">
      {/* Top part: Logo */}
      <div className="flex-shrink-0 h-[80px] flex items-center px-4">
        <img
          onClick={() => push('/')}
          className="h-[50px] w-auto cursor-pointer"
          src="/logo-app.svg"
          alt="Logo"
        />
      </div>

      {/* Bottom part: Navbar */}
      <nav className="bg-[#0096c9] flex-shrink-0 h-[60px] relative flex items-center">
        <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8">
          {/* Home */}
          <div className="hidden md:block">
            <Link href="/" className="text-white font-bold hover:text-gray-200">
              Home
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label={menuOpen ? 'Sluit menu' : 'Open menu'}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={!menuOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
                />
              </svg>
            </button>
          </div>

          {/* Meer weten? */}
          <div className="hidden md:block">
            <Link href="/info" className="text-white font-bold hover:text-gray-200">
              Meer weten?
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full bg-[#0096c9] px-4 pt-4 pb-4 space-y-2 transform transition-all duration-300 ease-in-out z-40 ${
            menuOpen
              ? 'opacity-100 scale-100 max-h-40'
              : 'opacity-0 scale-95 max-h-0 overflow-hidden'
          }`}
        >
          <Link href="/" className="block text-white font-bold hover:text-gray-200">
            Home
          </Link>
          <Link href="/info" className="block text-white font-bold hover:text-gray-200">
            Meer weten?
          </Link>
        </div>
      </nav>
    </header>
  );
};
