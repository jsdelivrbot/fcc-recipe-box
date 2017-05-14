import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeDetail extends Component {
    render() {
       if(!this.props.recipe) {
          return <div className="start">Select a book from the list</div>
        }

          return (
         
            <div>
              {this.props.recipe.title}
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