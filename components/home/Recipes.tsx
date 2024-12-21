import React from 'react'
import RecipeCard from '../shared/RecipeCard'
import { Models } from 'appwrite';


const Recipes = ({recipes}: {recipes: Models.Document[]}) => {

  return (
    <section className="my-12">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 text-center">
          <h2 className="text-xl md:text-3xl font-bold">
            Simple And Tasty Recipes
          </h2>
          <p className="text-xs md:text-sm text-foreground/60 max-w-md mx-auto">
            Discover easy-to-make recipes that don’t compromise on flavor. From
            breakfast to dessert, explore dishes that will make cooking a
            delightful experience.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-3 md:gap-5 mt-5">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.$id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recipes