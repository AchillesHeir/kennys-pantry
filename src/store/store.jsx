// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterSlice';

// import recipeReducer from '../reducers/recipeSlice'
import recipeListSlice from '../reducers/recipeListSlice'
// import ingredientReducer from '../reducers/ingredientSlice'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    recipeList: recipeListSlice,
    // recipe: recipeReducer,
    // ingredient: ingredientReducer,
  },
});