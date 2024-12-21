"use client";

import MayLikeRecipes from "@/components/shared/MayLikeRecipes";
import ShareButtons from "@/components/shared/share-button";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BlogDetail() {
  const [currentUrl, setCurrentUrl] = useState("");
  

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <main className="relative max-w-3xl mx-auto px-4 py-8 md:py-12">
      {/* Share buttons - positioned absolutely on desktop */}
      <div className="hidden md:block absolute left-0 top-0 transform -translate-x-16">
        <ShareButtons
          title="Full Guide to Becoming a Professional Chef"
          url={currentUrl}
        />
      </div>

      {/* Main content */}
      <div className="space-y-8">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Full Guide to Becoming a Professional Chef
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span>By John Smith</span>
            <span>•</span>
            <time>December 21, 2024</time>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <Image
            src="/recipes/1.png"
            alt="Chef cooking with flames in a professional kitchen"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article content */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:order-last mb-5">
            <p className="uppercase text-sm pb-3 text-center">Share this on:</p>
            <ShareButtons
              title="Full Guide to Becoming a Professional Chef"
              url={currentUrl}
              className="flex justify-center gap-4"
            />
          </div>
          <div className="prose prose-lg max-w-none">
            <h2>How did you start in the food industry?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras porta nulla
              facilisi. Nulla tristique dictum eros, sed finibus orci hendrerit
              at. Nullam consequat tellus id lacus placerat fringilla.
            </p>

            <h2>What do you love most about your job?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac
              habitasse platea dictumst. Suspendisse potenti. Aenean fermentum
              leo vel sceleri sque ultrices. Vestibulum id ligula porta felis
              euismod semper.
            </p>

            <div className="relative aspect-[16/9] my-8 rounded-lg overflow-hidden">
              <Image
                src="/chef.png"
                alt="Chef preparing ingredients in kitchen"
                fill
                className="object-cover"
              />
            </div>

            <h2>Do you cook at home or you dine off?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
              justo eu mi scelerisque consectetur. Nulla tristique dictum eros,
              sed finibus orci hendrerit at. Nullam consequat tellus id lacus
              placerat fringilla.
            </p>

            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              accumsan tempus risus.
            </blockquote>

            <h2>
              What would your advice be to young people looking to get their
              foot in the door?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. Cras porta nulla
              facilisi. Leone vel sceleri sque ultrices. Vestibulum id ligula
              porta felis euismod semper.
            </p>

            <h2>
              What is the biggest misconception that people have about being a
              professional chef?
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
              justo eu mi scelerisque consectetur. Nulla tristique dictum eros,
              sed finibus orci hendrerit at. Nullam consequat tellus id lacus
              placerat fringilla.
            </p>
          </div>

          <MayLikeRecipes
            title="Check out the delicious recipe"
          />
        </div>
      </div>
    </main>
  );
}
