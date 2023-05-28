import {Link} from 'react-router-dom';
import React from 'react';

export default function CategoryCard(props) {
    const {
        strCategory,
        strCategoryThumb,
        strCategoryDescription
    } = props;
    return (
        <div className="card hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={strCategoryThumb} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {strCategory}
                </span>
                <p>{strCategoryDescription.slice(0, 90)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn-small brown darken-4">
                    View recipes
                </Link>
            </div>
        </div>
    );
}