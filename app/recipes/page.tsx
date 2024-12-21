import RecipeCard from "@/components/shared/RecipeCard";
import SearchBar from "@/components/shared/search-bar";
import { fetchRecipeList } from "@/lib/appwrite";
const RecipesPage = async () => {
  const recipes = await fetchRecipeList()
  
  return (
    <main>
      <section className="my-12">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h2 className="text-center text-4xl font-bold">Our Recipes</h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base w-[90%] md:max-w-md max-auto text-center">
            Discover delicious recipes curated for every taste. Use the search
            bar to find your favorite dish.
          </p>
          <SearchBar />
        </div>

        {/* Recipes Grid */}
        <div className="w-full max-w-7xl mx-auto p-2 lg:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-3 md:gap-6 mt-5">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.$id} recipe={recipe} />))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecipesPage;
