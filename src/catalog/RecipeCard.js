import {Link} from 'react-router-dom';
import React from 'react';
export default function RecipeCard(props) {
    const {
        idMeal,
        strMeal,
        strMealThumb
    } = props;
    return (
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strMealThumb} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {strMeal}
                </span>
            </div>
            <div className="card-action">
                <Link to={`/recipe/${idMeal}`} className="btn-small brown darken-4">
                    View recipe
                </Link>
            </div>
        </div>
    );
}