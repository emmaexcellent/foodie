import React from 'react'
import Image from 'next/image';

const InstagramPost = () => {
  const posts = [
    "/instagram/1.png",
    "/instagram/2.png",
    "/instagram/3.png",
    "/instagram/4.png",
  ];
  return (
    <section className="mt-12 bg-gradient-to-b from-transparent to-[#E7FAFE]">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center">
        <h4 className="font-semibold text-2xl text-center">
          Check out @foodieland on Instagram
        </h4>
        <p className="text-center text-sm max-w-md mt-3">
          Check out @foodieland for inspiring recipes, stunning food
          photography, and step-by-step cooking tutorials. Share your creations
          with us!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-7 my-12">
          {posts.map((post, index) => (
            <Image
              key={index}
              src={post}
              width={200}
              height={300}
              alt="Instagram Post"
            />
          ))}
        </div>
        <button className="font-semibold h-12 py-2 px-5 rounded-lg shadow-lg inline-flex items-center gap-1.5 bg-black text-white hover:bg-black/70">
          View Instagram
          <Image
            src="/social/instagram.png"
            width={20}
            height={20}
            alt="hot recipe"
            priority
          />
        </button>
      </div>
    </section>
  );
}

export default InstagramPost