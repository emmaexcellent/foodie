import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pt-10">
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b gap-5">
          <div className="w-full">
            <Image
              src="/foodie.png"
              width={100}
              height={60}
              alt="Foodie"
              priority
              className="cursor-pointer"
            />
            <p className="text-sm mt-5 text-foreground/60">
              Lorem ipsum dolor sit amet, consectetuipisicing elit.
            </p>
          </div>
          <ul className="inline-flex items-center gap-5">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`text-sm font-medium  hover:text-foreground/80 hover:underline hover:underline-offset-4 hover:decoration-orange-600 text-nowrap`}
              >
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between pt-5">
          <div className="md:w-1/3" />
          <p className="text-sm text-center md:w-1/3 md:text-nowrap font-medium">
            © 2020 Emmanuel Excellent. Built for JS Mastery Hackathon
          </p>
          <ul className="inline-flex items-center justify-end gap-5 md:w-1/3 order-first md:order-last">
            <li className="cursor-pointer">
              <Image
                src="/social/facebook.png"
                width={20}
                height={20}
                alt="Facebook"
                priority
              />
            </li>
            <li className="cursor-pointer">
              <Image
                src="/social/x.png"
                width={20}
                height={20}
                alt="Facebook"
              />
            </li>
            <li className="cursor-pointer">
              <Image
                src="/social/instagram.png"
                width={20}
                height={20}
                alt="Facebook"
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
