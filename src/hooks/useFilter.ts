import { useEffect, useState } from 'react';

import { RecipeType } from '../features/Recipes/api/schemas';

export const useFilter = (
  ingredient: string,
  recipes: RecipeType[] | undefined,
  ingredientRecipes: RecipeType[] | undefined
) => {
  const [filteredData, setFilteredData] = useState<RecipeType[] | undefined>(
    []
  );

  useEffect(() => {
    if (ingredient !== 'any' && recipes?.length) {
      setFilteredData(
        recipes?.filter((recipe) => Object.values(recipe).includes(ingredient))
      );
    } else if (ingredient === 'any' && recipes?.length) {
      setFilteredData(recipes);
    } else if (ingredient !== 'any' && !recipes?.length) {
      setFilteredData(ingredientRecipes);
    }
  }, [ingredientRecipes, recipes]);

  return filteredData;
};
