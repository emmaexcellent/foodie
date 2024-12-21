import ListSingle from "@/components/shared/ListSingle";
import MayLikeRecipes from "@/components/shared/MayLikeRecipes";
import SearchBar from "@/components/shared/search-bar";
import { fetchRecipeList } from "@/lib/appwrite";
import React from "react";

const BlogPage = async () => {
  const recipes = await fetchRecipeList();
  
  return (
    <main>
      <section className="my-10">
        <div className="w-full max-w-6xl mx-auto p-3 md:p-6">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-center text-4xl font-bold">Blog & Article</h2>
            <p className="text-center text-foreground/60">
              Here you can find all the blog and article
            </p>
            <SearchBar />
          </div>

          <div className="flex flex-col lg:flex-row gap-x-6 mt-10">
            {/* Blog Section */}
            <div className="w-full lg:w-2/3 md:p-6 space-y-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <ListSingle
              key={i}
                type="blog"
                title="How to make a perfect cup of coffee"
                imgUrl="/recipes/1.png"
                description="Making a perfect cup of coffee is an art. Here is how you can make a perfect cup of coffee."
              />
            ))}
            </div>

            {/* Tasty Recipes Section */}
            <div className="w-full lg:w-1/3 p-6 space-y-2">
              <h4 className="text-2xl font-semibold">Tasty Recipes</h4>
              {recipes.slice(4,8).map((recipe) => (
                <ListSingle key={recipe.$id} title={recipe.name} imgUrl={recipe.thumbnail} description={recipe.cook_time} />
              ))}
            </div>
          </div>

          <MayLikeRecipes
            title="Check out the delicious recipe"
          />
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
