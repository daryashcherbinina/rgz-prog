import RecipeCard from './RecipeCard.js';
import React from 'react';

export default function RecipeList(props) {
    return (
        <div className="items">
            {props.items.map(item => <RecipeCard key={item.idMeal} {...item} />)}
        </div>
    );
}