import { Fade } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import undraw_eating from '@/assets/images/undraw_eating.svg';
import { useFilter } from '@/hooks/useFilter';
import styles from './index.module.scss';
import { useRecipesByIngredient } from '../api/getMealByIngredient';
import { useSearchRecipes } from '../api/searchRecipes';
import RecipeCard from '../components/RecipeCard';

type Props = {
  ingredient: string;
  query: string;
};

const RecipesIndex = ({ ingredient, query }: Props) => {
  const { data: ingredientRecipes } = useRecipesByIngredient(ingredient);
  const { data: recipes } = useSearchRecipes(query);

  const filteredData = useFilter(ingredient, recipes, ingredientRecipes);

  return (
    <div className={styles.container}>
      {filteredData?.length ? (
        <TransitionGroup data-cy='recipecards' className={styles.fadeContainer}>
          {filteredData.map((recipe) => (
            <Fade data-cy={`recipe-card-${recipe.strMeal}`} key={recipe.idMeal}>
              <div>
                <RecipeCard {...recipe} />
              </div>
            </Fade>
          ))}
        </TransitionGroup>
      ) : (
        <img src={undraw_eating} height={500} />
      )}
    </div>
  );
};

export default RecipesIndex;
