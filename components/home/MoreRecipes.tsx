import React from 'react'
import RecipeCard from '../shared/RecipeCard';
import { Models } from 'appwrite';

const MoreRecipes = ({ recipes }: { recipes: Models.Document[] }) => {
  return (
    <section className="my-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 flex flex-col md:flex-row items-center justify-between">
          <h2 className="text-xl md:text-3xl font-bold max-w-md">
            Try this delicious recipe to make your day
          </h2>
          <p className="text-xs md:text-sm text-foreground/60 max-w-md mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grids-cols-3 lg:grid-cols-4 items-center gap-3 md:gap-5 mt-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.$id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreRecipes