import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const getRecipe = async (id: string) => {
  let result;

  try {
    result = await axios(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals[0] as RecipeType;
};

export const useRecipe = (id: string) => {
  return useQuery(['recipes', id], () => getRecipe(id), {
    enabled: !!id,
  });
};
