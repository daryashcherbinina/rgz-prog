import {createContext, useState, useEffect} from 'react';
import {getAllCategories} from '../api';
import React from 'react';
const CatalogContext = createContext();

const CatalogContextProvider = (props) => {
    const [categories, setCategories] = useState([]); // здесь храним все категории, которые получили
    const [loading, setLoading] = useState(true);
    // рецепты каждой категории, которую пользователь уже просмотрел

    // как только рецепты категории получены сохраняем их
    const recipes = {};

    // до того, как категории получены, будем показывать
    // компонент Preloader, после получения изменяем loading на false
    useEffect(() => {
        getAllCategories().then(data => {
            data.categories && setCategories(data.categories);
            setLoading(false);
        });
    }, []);

    const getCategory = (name) => categories.find(item => item.strCategory === name);

    const getRecipes = (name) => {
        return recipes[name] ? recipes[name] : [];
    };

    const setRecipes = (name, items) => {
       recipes[name] = items;
    };

    const value = {
        categories: categories,
        loading: loading,
        getCategory: getCategory,
        getRecipes: getRecipes,
        setRecipes: setRecipes,
    };

    return (
        <CatalogContext.Provider value={value}>
            {props.children}
        </CatalogContext.Provider>
    );
}

export {CatalogContext, CatalogContextProvider};