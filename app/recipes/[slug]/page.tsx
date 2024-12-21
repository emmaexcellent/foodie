import RecipeDescription from "@/components/Description";
import RecipeInteractiveSection from "@/components/RecipeInteractiveSection";
import ListSingle from "@/components/shared/ListSingle";
import MayLikeRecipes from "@/components/shared/MayLikeRecipes";
import User from "@/components/shared/user";
import { fetchRecipeById, fetchRecipeList } from "@/lib/appwrite";
import { unslugify } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const RecipeDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const { id } = unslugify(slug);

  const recipe = await fetchRecipeById(id);

  const recipes = await fetchRecipeList();

  return (
    <main>
      <section className="my-12">
        <div className="w-full max-w-7xl mx-auto p-4 sm:p-6">
          {/* Detail Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-5xl leading-snug font-bold">
                {recipe.name}
              </h1>
              <div className="flex flex-wrap gap-6">
                <div className="pr-5 border-r">
                  <User
                    imgUrl="/hero/user.png"
                    name="John Smith"
                    date="15 March 2013"
                  />
                </div>
                <div className="pr-5 border-r">
                  <User
                    imgUrl="/hero/time.png"
                    name="PREP TIME"
                    date={recipe.prep_time}
                  />
                </div>
                <div className="pr-5 border-r">
                  <User
                    imgUrl="/hero/time.png"
                    name="COOK TIME"
                    date={recipe.cook_time}
                  />
                </div>
                <div>
                  <User imgUrl="/hero/fork.png" date={recipe.category} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="rounded-full bg-[#E7FAFE] p-4 cursor-pointer">
                <Image
                  src="/printer.png"
                  width={20}
                  height={20}
                  alt="Printer"
                />
              </div>
              <div className="rounded-full bg-[#E7FAFE] p-4 cursor-pointer">
                <Image src="/share.png" width={20} height={20} alt="Share" />
              </div>
            </div>
          </div>

          {/* Detail Image & Nutrition & Description */}
          <div className="my-10">
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden">
                <Image
                  src={recipe?.thumbnail || null}
                  width={500}
                  height={500}
                  alt="Recipe"
                  className="object-fill w-full rounded-2xl h-[300px] sm:h-[400px]"
                  priority
                />
              </div>
              <div className="w-full lg:w-1/3 bg-[#E7FAFE] rounded-2xl p-5">
                <h4 className="font-semibold">Nutritional Information</h4>
                <ul className="w-full py-5 space-y-3">
                  {[
                    { label: "Calories", value: recipe.calories },
                    { label: "Total Fat", value: recipe.fat },
                    { label: "Protein", value: recipe.protein },
                    { label: "Carbohydrate", value: recipe.carbohydrate },
                    { label: "Cholesterol", value: recipe.cholesterol },
                  ].map((info) => (
                    <li
                      key={info.label}
                      className="flex items-center justify-between gap-5 text-sm pb-3 border-b"
                    >
                      <p>{info.label}</p>
                      <strong>{info.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <RecipeDescription description={recipe.description} />
          </div>

          {/* Ingredients & Side Recipes */}
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
            <div className="w-full lg:w-2/3">
              <h4 className="uppercase font-semibold text-lg sm:text-xl">
                Ingredients
              </h4>
              <RecipeInteractiveSection
                fetchedIngredients={recipe.ingredients}
                fetchedDirections={recipe.directions}
              />
            </div>
            <div className="w-full lg:w-1/3">
              <h5 className="font-semibold text-lg">Related Recipes</h5>
              <div className="mt-6 space-y-4">
                {recipes.slice(4, 8).map((recipe) => (
                  <ListSingle
                    key={recipe.$id}
                    title={recipe.name}
                    imgUrl={recipe.thumbnail}
                    description={recipe.cook_time}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10">
        <div className="w-full max-w-7xl mx-auto">
          <MayLikeRecipes title="You may also like these recipes" />
        </div>
      </section>
    </main>
  );
};

export default RecipeDetailPage;
