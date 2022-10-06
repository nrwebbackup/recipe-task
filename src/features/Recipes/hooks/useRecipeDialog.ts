import { RecipeType } from '../api/schemas';

export const useRecipeDialog = (recipe: RecipeType | undefined) => {
  const ingredientKeys = Object.keys(recipe || {}).filter((key) =>
    key.startsWith('strIngredient')
  );
  const ingredients = Object.fromEntries(
    ingredientKeys.map((key) => [key, recipe?.[key as keyof typeof recipe]])
  );
  const sanitisedIngredients = Object.values(ingredients).filter(
    (item) => item?.length
  );
  const instructions = recipe?.strInstructions.split('. ');

  return { sanitisedIngredients, instructions };
};
