import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const searchRecipes = async (query: string) => {
  let result;

  try {
    result = await axios(
      `${import.meta.env.VITE_MEAL_API_URL}/search.php?s=${query}`
    );
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals as RecipeType[];
};

export const useSearchRecipes = (query: string) => {
  return useQuery(['recipes', query], () => searchRecipes(query), {
    enabled: !!query,
  });
};
