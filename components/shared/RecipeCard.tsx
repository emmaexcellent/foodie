import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import { Models } from 'appwrite';
import { slugify } from '@/lib/utils';

const RecipeCard = ({ recipe }: { recipe: Models.Document }) => {
  return (
    <Link
      href={recipe ? `/recipes/${slugify(recipe.name, recipe.$id)}`:"#"}
      className="p-2 md:p-4 bg-gradient-to-b from-transparent to-[#E7FAFE] space-y-4 rounded-2xl shadow hover:shadow-lg"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={recipe?.thumbnail}
          width={200}
          height={200}
          alt=""
          className="w-full h-[180px] object-cover hover:scale-110"
        />
        <div className="absolute top-3 right-3 cursor-pointer animate-pulse">
          <Image
            src="/heart.png"
            width={25}
            height={25}
            alt="Remove to wishlist"
          />
        </div>
      </div>
      <div className="space-y-2">
        <p className="font-semibold line-clamp-2">{recipe?.name}</p>
        <div className="flex items-center gap-5">
          <div className="py-2 inline-flex items-center gap-1 md:gap-1.5 text-xs md:text-sm">
            <Image
              src="/hero/time.png"
              width={20}
              height={20}
              alt="hot recipe"
              priority
            />
            {recipe?.cook_time}
          </div>
          <div className="py-2 inline-flex items-center gap-1.5 text-sm">
            <Image
              src="/hero/fork.png"
              width={20}
              height={20}
              alt="hot recipe"
              priority
            />
            {recipe?.category}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard