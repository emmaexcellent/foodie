import Image from "next/image";
import React from "react";
import Badge from "../shared/badge";
import User from "../shared/user";

const Hero = () => {
  return (
    <section className="w-full mt-5">
      <div className="max-w-7xl mx-auto">
        <div className="p-1 lg:p-5">
          <div className="bg-[#E7FAFE] rounded-3xl flex flex-col lg:flex-row items-center max-h-[80vh] overflow-hidden relative">
            <div className="w-full lg:w-1/2 p-5 lg:p-10">
              <Badge
                bgColor="bg-white"
                imgUrl="/fire.png"
                title="Hot recipes"
              />
              <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-snug">
                Spicy Delicious Chicken Wings
              </h2>
              <p className="text-foreground/70 text-xs lg:text-sm my-5 md:max-w-md">
                Enjoy a burst of flavor with these mouthwatering spicy chicken
                wings, perfect for any occasion. Whether you&apos;re hosting a
                party or enjoying a cozy night in, this recipe guarantees a
                delicious treat.
              </p>
              <div className="flex items-center gap-8">
                <Badge
                  bgColor="bg-gray-200"
                  imgUrl="/hero/time.png"
                  title="30 Minutes"
                />
                <Badge
                  bgColor="bg-gray-200"
                  imgUrl="/hero/fork.png"
                  title="Chicken"
                />
              </div>
              <div className="flex items-center gap-10 lg:justify-between mt-10">
                <User
                  imgUrl="/hero/user.png"
                  name="John Smith"
                  date="15 March 2013"
                />
                <button className="font-semibold h-12 py-1.5 lg:py-2 px-3 lg:px-5 rounded-lg shadow-lg inline-flex items-center gap-1.5 bg-black text-white hover:bg-black/70 text-sm lg:text-base">
                  View Recipes{" "}
                  <Image
                    src="/hero/play.png"
                    width={20}
                    height={20}
                    alt="hot recipe"
                    priority
                  />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src="/hero/1.png"
                width={500}
                height={5500}
                alt="featured recipe"
                className="w-full"
                priority
              />
            </div>
            <Image
              src="/badge.png"
              width={100}
              height={100}
              alt="featured badge"
              className="absolute lg:inset-x-0 w-12 h-12 md:w-24 md:h-24 mx-auto top-3 right-3 md:top-32 lg:right-0 lg:top-10"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
