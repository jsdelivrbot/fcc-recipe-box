import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import RecipeList from '../containers/recipe_list';
import RecipeDetail from '../containers/recipe_detail';
import AddRecipe from '../containers/add_recipe';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                <h1>Recipe Box</h1>
                <input type="button" value="Add Recipe" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h2>Add a Recipe</h2>
                        <div>Recipe<input value="Add a Recipe name" /> </div>
                        <p>Ingredients</p>
                        <AddRecipe />
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
                
                <RecipeDetail />
                <RecipeList />  
            </section>
        );
    }
}

export default App;