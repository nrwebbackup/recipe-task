import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const getRecipesByIngredient = async (ingredient: string) => {
  let result;

  try {
    result = await axios(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
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
