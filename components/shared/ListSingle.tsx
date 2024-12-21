import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import User from './user';

const ListSingle = ({
  type,
  title,
  imgUrl,
  description,
}: {
  type?: string;
  title: string;
  imgUrl: string;
  description: string;
}) => {
  return (
    <Link href="#" className="flex items-center gap-3 p-5">
      <div className="w-1/2 rounded-xl overflow-hidden">
        <Image
          src={imgUrl}
          width={250}
          height={250}
          alt="Recipe"
          className="object-fill w-full hover:scale-110 rounded-xl"
        />
      </div>
      <div className="w-1/2 space-y-1.5 md:space-y-3">
        <p className="font-semibold line-clamp-2">{title}</p>
        <p className="text-xs md:text-sm text-foreground/50 line-clamp-2 md:line-clamp-3">
          {description}
        </p>
        {type === "blog" && (
          <div>
            <User
              imgUrl="/hero/user.png"
              name="John Smith"
              date="15 March 2013"
            />
          </div>
        )}
      </div>
    </Link>
  );
};

export default ListSingle