import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const searchRecipes = async (query: string) => {
  let result;

  try {
    result = await axios(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
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
