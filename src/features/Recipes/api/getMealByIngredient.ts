import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const getRecipesByIngredient = async (ingredient: string) => {
  let result;

  try {
    result = await axios(
      `${import.meta.env.VITE_MEAL_API_URL}/filter.php?i=${ingredient}`
    );
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals as RecipeType[];
};

export const useRecipesByIngredient = (ingredient: string) => {
  return useQuery(
    ['recipes', ingredient],
    () => getRecipesByIngredient(ingredient),
    { enabled: !!ingredient }
  );
};
