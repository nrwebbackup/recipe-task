import Ingredients from '@/features/Recipes/components/Ingredients';
import styles from './Sidebar.module.scss';

type Props = {
  ingredient: string;
  search: string;
  setIngredient: (value: string) => void;
  setSearch: (value: string) => void;
};

const Sidebar = ({ ingredient, setIngredient, search, setSearch }: Props) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.filterContainer}>
        <p>Meal Search</p>
        <input
          data-cy='searchbar'
          className='textfield'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search for a Recipe'
          value={search}
        />
      </div>
      <div className={styles.filterContainer}>
        <p>Ingredient Filter</p>
        <Ingredients
          onChange={(e) => setIngredient(e.target.value as string)}
          value={ingredient}
        />
      </div>
    </div>
  );
};

export default Sidebar;
