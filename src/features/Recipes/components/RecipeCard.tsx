import { Chip } from '@mui/material';
import { useDispatch } from 'react-redux';

import {
  setCurrentRecipeId,
  toggleRecipeDialog,
} from '@/redux/slices/recipeSlice';
import styles from './RecipeCard.module.scss';
import { RecipeType } from '../api/schemas';

const RecipeCard = ({
  idMeal,
  strInstructions,
  strMeal,
  strMealThumb,
  strTags,
}: RecipeType) => {
  const dispatch = useDispatch();

  const sanitisedTags = strTags?.split(',');

  const handleRecipeClick = () => {
    dispatch(setCurrentRecipeId(idMeal));
    dispatch(toggleRecipeDialog());
  };

  return (
    <div
      className={styles.card}
      onClick={handleRecipeClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={strMealThumb} height={150} />
      <div className={styles.content}>
        <h2 style={{ textTransform: 'capitalize' }}>{strMeal}</h2>
        <p className='lineclamp'>{strInstructions}</p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {sanitisedTags ? (
            sanitisedTags.map((tag) => <Chip key={tag} label={tag} />)
          ) : (
            <Chip label='No Available Tags' />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
