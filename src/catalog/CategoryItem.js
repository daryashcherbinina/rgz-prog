import {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {CatalogContext} from './Context';
import {getCategoryRecipes} from '../api';
import React from 'react';
import Preloader from '../components/Preloader';
import RecipeList from './RecipeList';


export default function CategoryItem(props) {
    const params = useParams();

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const {
        loading: loadingContext,
        getCategory: getCategoryContext,
        getRecipes: getRecipesContext,
        setRecipes: setRecipesContext
    } = useContext(CatalogContext);

    useEffect(() => {
        const saved = getRecipesContext(params.name);
        if (saved.length === 0) {
            getCategoryRecipes(params.name).then(data => {
                if (data.meals) {
                    setRecipes(data.meals);
                    // сохраняем рецепты категории в контекст
                    setRecipesContext(params.name, data.meals);
                }
                setLoading(false);
            });
        } else {
            setRecipes(saved);
            setLoading(false);
        }
    }, []);

    const category = getCategoryContext(params.name);

    return (
        <>
            {loadingContext || loading ? (
                <Preloader />
            ) : recipes.length ? (
                <>
                    <h1 className="flow-text" >{params.name}</h1>
                    {category && <p style = {{textAlign: "justify"}} >{category.strCategoryDescription}</p>}
                    <RecipeList items={recipes} />
                </>
            ) : (
                <p>Failed to load</p>
            )}
        </>
    );
}
