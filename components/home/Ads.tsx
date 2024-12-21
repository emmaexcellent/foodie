import React from 'react'
import Image from "next/image"

const Ads = () => {
  return (
    <div className="shadow hover:shadow-lg relative rounded-2xl">
      <Image
        src="/ads-bg.png"
        width={300}
        height={300}
        alt="ads"
        className="w-full rounded-2xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-between p-10 text-white">
        <p className="italic font-medium text-lg text-center">
          Don’t forget to eat healthy food
        </p>
        <Image
          src="/ads-food.png"
          width={200}
          height={200}
          alt="ads"
          className="w-full"
        />
        <p className="text-sm">www.foodie.com</p>
      </div>
    </div>
  );
}

export default Ads