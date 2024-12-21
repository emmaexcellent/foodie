import Image from 'next/image';
import React from 'react'

const ChefCta = () => {
  return (
    <section>
      <div className="flex items-center flex-col md:flex-row gap-10 p-10">
        <div className="space-y-5 wfull lg:w-1/2 max-w-lg">
          <h2 className="text-2xl md:text-4xl font-bold">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="text-sm text-foreground/60">
            Transform your kitchen into a culinary haven with these simple yet
            satisfying recipes. From savory breakfasts to delectable desserts,
            unleash your inner chef and impress everyone at the table.
          </p>
          <button className="font-semibold py-2 px-5 rounded-lg shadow-lg bg-black text-white hover:bg-black/70 mt-8">
            Learn More
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/chef.png"
            width={500}
            height={500}
            alt="chef"
            className="object-cover h-[300px] md:h-[450px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default ChefCta