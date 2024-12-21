import Image from 'next/image';
import React from 'react'

const Newsletter = () => {
  return (
    <section className="w-full my-12">
      <div className="w-full max-w-7xl mx-auto text-center px-2 md:px-6 relative">
        <Image
          src="/newsletter-bg.png"
          width={400}
          height={800}
          alt="Newsletter"
          className="w-screen h-[250px] md:h-auto object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 top-0 flex flex-col items-center justify-center gap-5">
          <h4 className="text-2xl md:text-3xl font-bold">
            Deliciousness to your inbox
          </h4>
          <p className="text-foreground/70 w-[85%] max-w-md mx-auto text-xs md:text-sm mt-3">
            Get the latest recipes, cooking tips, and food inspiration sent
            directly to your inbox. Never miss out on a chance to elevate your
            cooking game!
          </p>
          <div className="relative mt-5">
            <input
              className="h-16 rounded-xl placeholder:px-3 text-sm w-[300px] md:w-[450px]"
              placeholder="Your email address..."
            />
            <button className="absolute top-2 right-2 h-12 px-8 rounded-xl bg-black text-white font-semibold hover:bg-black/70">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter