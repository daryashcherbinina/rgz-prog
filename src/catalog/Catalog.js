import {useContext} from 'react';
import Preloader from '../components/Preloader';
import CategoryList from './CategoryList';
import {CatalogContext} from './Context';
import SearchInput from './SearchInput';
import {useHistory} from 'react-router-dom';
import React from 'react';

export default function Catalog() {
    const {categories, loading} = useContext(CatalogContext);
    const history = useHistory();
    
    const handleSearch = (str) => {
        if (str.trim() === "") return;
        history.push({
            pathname: '/search',
            search: `?str=${str.trim()}`,
        });
    };
    

    return (
        <>
            <main className="container">
                <SearchInput searchHandler={handleSearch} />
            
            <h1>Categories</h1>
            {loading ? (
                <Preloader />
            ) : categories.length ? (
                <CategoryList items={categories} />
            ) : (
                <p>fgf</p>
            )}
            </main>
        </>
    );
}
