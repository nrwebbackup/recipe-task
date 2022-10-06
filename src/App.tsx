import { useState } from 'react';

import styles from '@/App.module.scss';
import Banner from '@/components/Banner';
import Sidebar from '@/components/Sidebar';
import RecipeDialog from '@/features/Recipes/components/RecipeDialog';
import RecipesIndex from '@/features/Recipes/Index';
import { useSearch } from '@/hooks/useSearch';

const App = () => {
  const [ingredient, setIngredient] = useState('any');

  const { query, search, setSearch } = useSearch();

  const recipeProps = { ingredient, query };
  const sidebarProps = { ingredient, setIngredient, search, setSearch };

  return (
    <>
      <RecipeDialog />
      <div className={styles.appWrapper}>
        <Banner />
        <div style={{ display: 'flex' }}>
          <Sidebar {...sidebarProps} />
          <RecipesIndex {...recipeProps} />
        </div>
      </div>
    </>
  );
};

export default App;
