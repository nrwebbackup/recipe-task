import { MenuItem, SelectProps } from '@mui/material';

import Select from '@/components/Inputs/Select';
import { useIngredients } from '../api/getIngredients';

type Props = {
  value: string;
};

const Ingredients = ({ value, ...rest }: Props & SelectProps) => {
  const { data: ingredients } = useIngredients();

  return (
    <Select
      {...rest}
      data-cy='ingredient-select'
      className='select'
      value={value}
    >
      <MenuItem value={'any'}>Any</MenuItem>
      {ingredients?.map((ingredient) => {
        return (
          <MenuItem
            data-cy={ingredient.strIngredient}
            key={ingredient.idIngredient}
            value={ingredient.strIngredient}
          >
            {ingredient.strIngredient}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export default Ingredients;
