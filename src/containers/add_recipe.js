import AddRecipeForm from '../components/recipe_form'

import { connect } from 'react-redux'
import { addRecipe } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addRecipe(text))
        }
    }
}

let AddRecipe = connect(null, mapDispatchToProps)(AddRecipeForm)

export default AddRecipe