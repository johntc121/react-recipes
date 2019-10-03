import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients, url}) => {

    const openRecipe = () => {
        window.open(
            `${url}`
        )
    }

    return(
        <div className={style.recipe}>
            <img className={style.image} src={image} alt=""/>
            <h1>{title}</h1>
            
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            <p>{calories}</p>
            <button onClick={openRecipe}>View Recipe</button>
        </div>
    );
}

export default Recipe;