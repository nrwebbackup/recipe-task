import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IngredientType } from './schemas';

export const getIngredients = async () => {
  let result;

  try {
    result = await axios(
      `${import.meta.env.VITE_MEAL_API_URL}/list.php?i=list`
    );
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals as IngredientType[];
};

export const useIngredients = () => {
  return useQuery(['ingredients'], () => getIngredients());
};
