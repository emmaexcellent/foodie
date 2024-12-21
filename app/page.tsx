import Categories from "@/components/home/Categories";
import ChefCta from "@/components/home/ChefCta";
import Hero from "@/components/home/Hero";
import InstagramPost from "@/components/home/InstagramPost";
import MoreRecipes from "@/components/home/MoreRecipes";
import Recipes from "@/components/home/Recipes";
import { fetchRecipeList } from "@/lib/appwrite";

export default async function Home() {
  const recipes = await fetchRecipeList();
  return (
    <main>
      <Hero />
      <Categories />
      <Recipes recipes={recipes.slice(0, 4)} />
      <ChefCta />
      <InstagramPost />
      <MoreRecipes recipes={recipes.slice(4, 8)} />
    </main>
  );
}
