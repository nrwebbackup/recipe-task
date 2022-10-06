import { useState } from 'react';

import { Dialog, DialogContent, DialogTitle, Tab, Tabs } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import TabPanel from '@/components/Tabs/TabPanel';
import SlideUp from '@/components/Transitions/SlideUp';
import {
  setCurrentRecipeId,
  toggleRecipeDialog,
} from '@/redux/slices/recipeSlice';
import { RootState } from '@/redux/store';
import styles from './RecipeDialog.module.scss';
import { useRecipe } from '../api/getRecipe';
import { useRecipeDialog } from '../hooks/useRecipeDialog';

const RecipeDialog = () => {
  const dispatch = useDispatch();
  const currentRecipeId = useSelector(
    (state: RootState) => state.recipe.currentRecipeId
  );
  const dialogOpen = useSelector((state: RootState) => state.recipe.dialogOpen);
  const { data: recipe } = useRecipe(currentRecipeId);

  const { instructions, sanitisedIngredients } = useRecipeDialog(recipe);

  const [tab, setTab] = useState(0);

  const handleClose = () => {
    dispatch(toggleRecipeDialog());
    dispatch(setCurrentRecipeId(''));
  };

  const handleTab = (e: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Dialog
      data-cy='recipe-dialog'
      fullWidth
      onClose={handleClose}
      open={dialogOpen}
      maxWidth='md'
      TransitionComponent={SlideUp}
    >
      <DialogTitle className={styles.dialogTitle}>
        {recipe?.strMeal}
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <div style={{ width: '100%' }}>
          <Tabs onChange={handleTab} value={tab}>
            <Tab label='Instructions' />
            <Tab data-cy='tab-ingredients' label='Ingredients' />
          </Tabs>
          <TabPanel value={tab} index={0}>
            <ul>
              {instructions?.map((instr) => (
                <li key={instr} style={{ marginBottom: '0.5rem' }}>
                  {instr}
                </li>
              ))}
            </ul>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ul data-cy='list-ingredients'>
              {sanitisedIngredients.map((ingr) => (
                <li>{ingr}</li>
              ))}
            </ul>
          </TabPanel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RecipeDialog;
