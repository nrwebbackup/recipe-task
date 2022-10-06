import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { RecipeType } from './schemas';

export const getRandomRecipe = async () => {
  let result;

  try {
    result = await axios(`https://www.themealdb.com/api/json/v1/1/random.php`);
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals[0] as RecipeType;
};

export const useRandomRecipe = (randomise: boolean) => {
  return useQuery(['recipes', randomise], () => getRandomRecipe());
};
