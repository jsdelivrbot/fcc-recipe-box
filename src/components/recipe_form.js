import React from 'react'

let AddRecipeForm = ({ onSubmit }) => {
    let input
    
    return (
    <div>
     <form onSubmit={ e=> {
        e.preventDefault()
        if(!input.value.trim()) {
            return
        }
        onSubmit(input.value)
        input.value = ''
        }}>
        <input ref={node=> {
                    input = Node
                   }} />
        <input ref={node=> {
                    input = Node
                   }} />
        <input ref={node=> {
                    input = Node
                   }} />
        <button type="submit">
            Add Recipe
        </button>
        </form>
        </div>
    )
}

export default AddRecipeForm