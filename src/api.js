import {API_URL} from './config';

// получить все категории
const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};
// получить рецепты категории
const getCategoryRecipes = async (name) => {
    const response = await fetch(API_URL + 'filter.php?c=' + name);
    return await response.json();
};
// получить один рецепт по id
const getOneRecipe = async (id) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + id);
    return await response.json();
};
const filterByMainIngredient = async (search) => {
  search = encodeURIComponent(search);
  const response = await fetch(API_URL + 'filter.php?i=' + search);
  return await response.json();
};

const getFoundRecipes = async (search) => {
    search = encodeURIComponent(search);
    const response = await fetch(API_URL + 'search.php?s=' + search);
    return await response.json();
};


  
  export {
    getAllCategories, getCategoryRecipes, getOneRecipe, getFoundRecipes, filterByMainIngredient
  };
