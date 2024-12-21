"use client";

import ContactForm from "@/components/ContactForm";
import MayLikeRecipes from "@/components/shared/MayLikeRecipes";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative h-64 md:h-auto">
            <Image
              src="/chef.png"
              alt="Chef"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Form Section */}
          <ContactForm />
        </div>
      </div>
      <MayLikeRecipes title="Check out the delicious recipe" />
    </div>
  );
}
