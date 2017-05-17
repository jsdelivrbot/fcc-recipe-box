import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeDetail extends Component {
    render() {
       if(!this.props.recipe) {
          return <div className="start">Select a Recipe from the list</div>
        }

          return (
         
           <div className="recipeinfo">
            <h3 className="title">{this.props.recipe.title}</h3>
            <div className="instructions">{this.props.recipe.instructions}</div>
           </div>
          );
    }
}

function mapStateToProps(state){
    return {
        recipe: state.activeRecipe
    };
}

export default connect(mapStateToProps)(RecipeDetail);