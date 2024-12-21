import Image from 'next/image';
import React from 'react'

const User = ({
  imgUrl,
  name,
  date
}: {
  imgUrl: string;
  name?: string;
  date: string;
}) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={imgUrl}
        width={40}
        height={40}
        alt=""
        className="rounded-full"
        priority
      />
      <div>
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-foreground/70">{date}</p>
      </div>
    </div>
  );
};

export default User