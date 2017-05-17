export function selectRecipe(recipe) {
  return{
  type: 'RECIPE_SELECTED',
  payload: recipe
  };
}

let nextRecipeId = 0
export const addRecipe = (text) => {
    return {
        type: 'ADD_RECIPE',
        id: nextRecipeId++,
        text
    }
}