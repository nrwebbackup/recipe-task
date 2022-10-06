import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const getRandomRecipe = async () => {
  let result;

  try {
    result = await axios(`${import.meta.env.VITE_MEAL_API_URL}/random.php`);
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals[0] as RecipeType;
};

export const useRandomRecipe = (randomise: boolean) => {
  return useQuery(['recipes', randomise], () => getRandomRecipe());
};
