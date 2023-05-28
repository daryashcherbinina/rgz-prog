import {useHistory} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Preloader from '../components/Preloader';
import RecipeList from '../catalog/RecipeList';
import SearchInput from '../catalog/SearchInput';
import {filterByMainIngredient} from '../api';
import React from 'react';

export default function SearchIngredient(props) {
        const history = useHistory();
    const location = useLocation();

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // проверяем корректность данных
        const search = decodeURIComponent(location.search);
        if (search === '') {
    
            setLoading(false);
            return;
        }
        const [name, value] = search.split('=');
        if (name.trim() !== '?str') {
            setLoading(false);
            return;
        }
        if (value.trim() === '') {
            setLoading(false);
            return;
        }
        
        // выполняем запрос к сервису
        filterByMainIngredient(value).then(data => {
            if (data.meals) {
                setRecipes(data.meals);
            }
            setLoading(false);
        });
    }, [location.search]);
    const handleSearch = (str) => {
        if (str.trim() === "") return;
        history.push({
            pathname: '/ingredient',
            search: `?str=${str.trim()}`,
        });
    };
    return (
        <>
        <main className="container">
        <SearchInput searchHandler={handleSearch} />
        <h1>Search by main ingredient</h1>
        {loading ? (
                <Preloader />
            ) : recipes.length ? (
                <>
                    <RecipeList items={recipes} />
                </>
            ) : (
                <>
          
                </>
            )}

         </main>  
        </>
    );
}