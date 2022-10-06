import { createSlice } from '@reduxjs/toolkit';

type RecipeState = {
  currentRecipeId: string;
  dialogOpen: boolean;
};

const initialState: RecipeState = {
  currentRecipeId: '',
  dialogOpen: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setCurrentRecipeId: (state, action) => {
      state.currentRecipeId = action.payload;
    },
    toggleRecipeDialog: (state) => {
      state.dialogOpen = !state.dialogOpen;
    },
  },
});

export const { setCurrentRecipeId, toggleRecipeDialog } = recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
