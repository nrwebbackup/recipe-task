import { useState } from 'react';

import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Tooltip, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';

import logo from '@/assets/images/logo.png';
import { useRandomRecipe } from '@/features/Recipes/api/getRandomRecipe';
import {
  setCurrentRecipeId,
  toggleRecipeDialog,
} from '@/redux/slices/recipeSlice';
import styles from './Banner.module.scss';

const Banner = () => {
  const [random, setRandom] = useState(false);

  const dispatch = useDispatch();
  const { data: randomRecipe } = useRandomRecipe(random);

  const handleClick = () => {
    setRandom(!random);
    dispatch(setCurrentRecipeId(randomRecipe?.idMeal));
    dispatch(toggleRecipeDialog());
  };

  return (
    <div className={styles.banner}>
      <img data-cy='logo' height={40} src={logo} />
      <Tooltip placement='left' title='Randomise Recipe'>
        <IconButton data-cy='random-button' onClick={handleClick}>
          <ShuffleIcon sx={{ color: 'white' }} />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Banner;
