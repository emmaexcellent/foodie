"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants"; // Ensure this imports the navigation links correctly.

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the menu if the user clicks outside it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/foodie.png"
            width={100}
            height={60}
            alt="Foodie Logo"
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className={`text-sm font-medium ${
                nav.href === pathname
                  ? "text-orange-600 underline underline-offset-4"
                  : "text-gray-600 hover:text-orange-600 hover:underline hover:underline-offset-4"
              }`}
            >
              <Link href={nav.href}>{nav.title}</Link>
            </li>
          ))}
        </ul>

        {/* Social Icons for Desktop */}
        <ul className="hidden md:flex items-center gap-4">
          {["facebook", "x", "instagram"].map((platform) => (
            <li key={platform} className="cursor-pointer">
              <Image
                src={`/social/${platform}.png`}
                width={20}
                height={20}
                alt={platform}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <div className="p-5">
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <ul className="mt-10 space-y-5 pl-5">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`text-base font-medium ${
                  nav.href === pathname
                    ? "text-orange-600 underline underline-offset-4"
                    : "text-gray-600 hover:text-orange-600 hover:underline hover:underline-offset-4"
                }`}
              >
                <Link href={nav.href} onClick={closeMenu}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons for Mobile */}
          <ul className="mt-10 flex items-center gap-6">
            {["facebook", "x", "instagram"].map((platform) => (
              <li key={platform} className="cursor-pointer">
                <Image
                  src={`/social/${platform}.png`}
                  width={24}
                  height={24}
                  alt={platform}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
