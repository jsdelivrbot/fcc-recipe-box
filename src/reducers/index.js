import { combineReducers } from 'redux';
import RecipeReducer from'./reducer_recipes';
import ActiveRecipe from'./reducer_active_recipe';

const rootReducer = combineReducers({
  recipes: RecipeReducer,
  activeRecipe: ActiveRecipe
});

export default rootReducer;