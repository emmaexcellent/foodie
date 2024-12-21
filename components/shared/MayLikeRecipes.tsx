"use client";
import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard';
import { Models } from 'appwrite';
import { fetchRecipeList } from '@/lib/appwrite';

const MayLikeRecipes = ({title}: {title: string}) => {
  const [recipes, setRecipes] = useState<Models.Document[]>([]);

  useEffect(() => {
    const getRecipeList = async () => {
      const recipes = await fetchRecipeList();
      return recipes;
    };
    const fetchData = async () => {
      const recipesList = await getRecipeList();
      setRecipes(recipesList);
    };
    fetchData();
  }, []);
  
  return (
    <section className="mt-24">
      <div className="w-full max-w-7xl mx-auto px-3 md:px-8">
        <h2 className="text-2xl font-semibold text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 items-center gap-3 md:gap-5 mt-5">
          {recipes.slice(5,9).map((recipe) => (
            <RecipeCard key={recipe.$id} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MayLikeRecipes