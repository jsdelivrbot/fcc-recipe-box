import React from 'react';
import { Component } from 'react';

import RecipeList from '../containers/recipe_list';
import RecipeDetail from '../containers/recipe_detail';

export default class App extends Component {
  render() {
    return (
      <div>
      <RecipeList />
      <RecipeDetail />
      </div>
    );
  }
}
