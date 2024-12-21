import Image from 'next/image';
import React from 'react'

const Badge = ({
  bgColor,
  imgUrl,
  title,
}: {
  bgColor: string;
  imgUrl: string;
  title: string;
}) => (
  <button
    className={`font-semibold py-2 px-5 rounded-full shadow-lg inline-flex items-center gap-1.5 text-sm ${bgColor}`}
  >
    <Image src={imgUrl} width={20} height={20} alt="hot recipe" priority />
    {title}
  </button>
);

export default Badge