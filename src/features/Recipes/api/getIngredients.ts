import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { IngredientType } from './schemas';

export const getIngredients = async () => {
  let result;

  try {
    result = await axios(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
  } catch (err) {
    console.log(err);
  }

  return result?.data.meals as IngredientType[];
};

export const useIngredients = () => {
  return useQuery(['ingredients'], () => getIngredients());
};
